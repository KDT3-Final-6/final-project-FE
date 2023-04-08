import Title from '@src/components/common/Title'
import Image from '@src/components/common/Image'
import { COLORS, FONTSIZE, FONTWEGHT } from '@src/styles/root'
import styled from 'styled-components'
import Button, { ButtonStyle } from '@src/components/common/Button'
import { useLocation, useNavigate } from 'react-router-dom'
import CheckItem from '@src/components/common/CheckItem'
import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import {
  usePostOrderMutation,
  usePostNonUserOrderMutation,
} from '@src/reduxStore/api/orderApiSlice'
import { getCookie } from '@src/utils/cookie'
import { IPostOrder, IProductIds } from '@src/interfaces/order'
import { useSelector } from 'react-redux'
import { IUserInfo } from '@src/reduxStore/features/userInfoSlice'
import { RootState } from '@reduxjs/toolkit/dist/query/core/apiState'

interface IBuy {
  checkbox?: boolean
  paymentMethod: string
  memberEmail: string
  memberName: string
}

export interface productData {
  name: string
  periodOptionId: number
  periodOptionName: string
  productId: number
  productPrice: number
  productThumbnail: string
  quantity: number
}

const index = () => {
  const navigate = useNavigate()
  const [allChecked, setAllChecked] = useState(false)
  const [isChecked, setIsChecked] = useState([false, false])
  const [errorsMessage, setErrorsMessage] = useState<string>('')

  const [postOrder] = usePostOrderMutation()
  const [postNonMember] = usePostNonUserOrderMutation()

  const { state: productData }: { state: productData[] } = useLocation()

  const token = getCookie('accessToken')

  const name = '고투게더'
  const phoneNumber = '01012345678'
  const email = 'gotogether@gmail.com'

  /**post보낼 데이터 */
  const postProductData = productData.map((product: IProductIds) => ({
    periodOptionId: product.periodOptionId,
    quantity: product.quantity,
  }))

  const totalProductPrice = productData.reduce(
    (acc: number, curr: { productPrice: number; quantity: number }) => {
      return acc + curr.productPrice * curr.quantity
    },
    0
  )

  const paymentMethodTabs = [
    {
      id: '카드',
      tabName: '카드',
    },
    {
      id: '계좌이체',
      tabName: '계좌이체',
    },
    {
      id: '토스페이',
      tabName: '토스페이',
    },
  ]

  const handleAllChecked = () => {
    setAllChecked(!allChecked)
    setIsChecked([!allChecked, !allChecked])
  }

  const handleChecked = (index: number) => {
    const newIsChecked = [...isChecked]
    newIsChecked[index] = !isChecked[index]
    setIsChecked(newIsChecked)

    if (newIsChecked.every((check) => check)) {
      setAllChecked(true)
    } else {
      setAllChecked(false)
    }
  }

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IBuy>({})

  const onValid: SubmitHandler<IBuy> = async (data) => {
    if (token) {
      // 회원일 경우
      const { paymentMethod } = data
      const result = await postOrder({
        productIds: postProductData,
        paymentMethod,
      })

      if ('data' in result && result.data === null) {
        if (paymentMethod === '계좌이체') alert('결제에 성공하셨습니다. 메일을 확인해주세요')
        else alert('결제에 성공하셨습니다.')
        navigate('/mypage/orderlist', { replace: true })
        console.log('result', result)
      } else if ('error' in result) {
        console.log('result.error', result.error)
        alert('결제에 실패했습니다.')
      } else {
        alert('결제에 실패했습니다.')
        console.log('Unexpected result:', result)
      }
    } else {
      // 비회원일 경우
      const { paymentMethod, memberEmail, memberName } = data
      const result = await postNonMember({
        productIds: postProductData,
        paymentMethod,
        memberEmail,
        memberName,
      })
      if ('data' in result && result.data === null) {
        alert('결제에 성공하셨습니다. 메일을 확인해주세요')
        navigate('/mypage/orderlist', { replace: true })
        console.log('result', result)
      } else if ('error' in result) {
        console.log('result.error', result.error)
        alert('결제에 실패했습니다.')
      } else {
        alert('결제에 실패했습니다.')
        console.log('Unexpected result:', result)
      }
    }
  }

  const onInvalid = (errors: any) => {
    const errorMessage = Object.values(errors).map((error: any) => error.message)[0]
    setErrorsMessage(errorMessage)
    alert(errorMessage)
  }

  return (
    <ContainerStyle onSubmit={handleSubmit(onValid, onInvalid)}>
      <Title margin="102px 0 80px 0" fontSize={FONTSIZE.fz32}>
        결제하기
      </Title>
      <BoxStyle>
        <LeftBoxStyle>
          <ProductInfoStyle>
            {productData.map((item) => (
              <div key={item.productId}>
                <Title
                  margin="35px 24px 20px 24px"
                  fontSize={FONTSIZE.fz26}
                  fontWeight={FONTWEGHT.fw500}
                >
                  예약 상품 정보
                </Title>
                <ImageBoxStyle>
                  <Image
                    width="167px"
                    height="129px"
                    imgBorderRadius="5px"
                    bgImage={item.productThumbnail}
                  />
                  <ImageInfoStyle>
                    <span>{item.name}</span>
                    <PriceInfoStyle>
                      <div>
                        <span>수량</span>
                        <span>:</span>
                        <span>{item.quantity ? item.quantity : 1}개</span>
                      </div>
                      <div>{(item.productPrice * item.quantity).toLocaleString()}원</div>
                    </PriceInfoStyle>
                  </ImageInfoStyle>
                </ImageBoxStyle>
                <TravelDayStyle>
                  <span>여행일</span>
                  <span>{item.periodOptionName}</span>
                </TravelDayStyle>
              </div>
            ))}
            <SumOfPriceStyle>
              <span>합계</span>
              <span>{totalProductPrice.toLocaleString()}원</span>
            </SumOfPriceStyle>
          </ProductInfoStyle>
          <UserInfoStyle>
            <UserInfoHeaderStyle>
              <Title fontSize={FONTSIZE.fz26} fontWeight={FONTWEGHT.fw500}>
                예약자 정보
              </Title>
              <Button
                width="60px"
                height="43px"
                borderRadius="9999px"
                buttonType="black"
                onClick={() => navigate('/mypage/infoedit')}
              >
                수정
              </Button>
            </UserInfoHeaderStyle>
            <InfoStyle>
              <InfoCardStyle>
                <span>예약자 이름</span>
                {token ? (
                  <p>{name}</p>
                ) : (
                  <input
                    type="text"
                    placeholder="한글로 2글자 이상 작성해주세요"
                    {...register('memberName', {
                      pattern: {
                        value: /^[가-힣]{2,4}$/,
                        message: '이름을 한글로 올바르게 작성해주세요.',
                      },
                    })}
                  />
                )}
              </InfoCardStyle>
              {token ? (
                <InfoCardStyle>
                  <span>연락처('-'포함x)</span>
                  <p>{phoneNumber}</p>
                </InfoCardStyle>
              ) : null}
              <InfoCardStyle>
                <span>이메일</span>
                {token ? (
                  <p>{email}</p>
                ) : (
                  <input
                    type="text"
                    placeholder="gotogether@shinytravels.com"
                    {...register('memberEmail', {
                      required: '이메일을 입력하세요.',
                      pattern: { value: /\S+@\S+\.\S+/, message: '이메일 형식에 맞지 않습니다.' },
                    })}
                  />
                )}
              </InfoCardStyle>
            </InfoStyle>
          </UserInfoStyle>
        </LeftBoxStyle>
        <RightBoxStyle>
          <PaymentMethodStyle>
            <Title
              fontSize={FONTSIZE.fz26}
              fontWeight={FONTWEGHT.fw500}
              margin="25px 24px 20px 24px"
            >
              결제 방법
            </Title>
            <WrapStyle>
              {paymentMethodTabs.map((paymentMethod) => (
                <CheckItem
                  key={paymentMethod.id}
                  checkType="paymentType"
                  type="radio"
                  name="paymentMethod"
                  id={paymentMethod.id}
                  labelName={paymentMethod.tabName}
                  width="132px"
                  bgColor={COLORS.primary}
                  register={{
                    ...register('paymentMethod', { required: '결제 방법을 선택해주세요.' }),
                  }}
                />
              ))}
            </WrapStyle>
          </PaymentMethodStyle>
          <PriceBoxStyle>
            <Title
              fontSize={FONTSIZE.fz26}
              fontWeight={FONTWEGHT.fw500}
              margin="25px 24px 20px 24px"
            >
              주문 요약
            </Title>
            <PriceFirstBoxStyle>
              <span>상품가격</span>
              <span>{totalProductPrice.toLocaleString()}원</span>
            </PriceFirstBoxStyle>
            <PriceSecondBoxStyle>
              <span>총 결제 금액</span>
              <span>{totalProductPrice.toLocaleString()}원</span>
            </PriceSecondBoxStyle>
            <CheckBoxSectionStyle>
              <div>
                <input
                  id="all"
                  type="checkbox"
                  checked={allChecked}
                  {...register('checkbox', {
                    required: '구매조건 확인 및 결제진행에 동의하여 주시기 바랍니다.',
                    onChange: handleAllChecked,
                  })}
                />
                <label htmlFor="all">전체동의(필수)</label>
              </div>
              <div>
                <input
                  id="all"
                  type="checkbox"
                  checked={isChecked[0]}
                  onChange={() => handleChecked(0)}
                />
                <label htmlFor="all">개인정보 수집 및 이용 동의</label>
              </div>
              <div>
                <input
                  id="all"
                  type="checkbox"
                  checked={isChecked[1]}
                  onChange={() => handleChecked(1)}
                  // {...register('checkbox')}
                />
                <label htmlFor="all">예약 조건 확인 및 결제 진행에 동의</label>
              </div>
            </CheckBoxSectionStyle>
            <Button
              type="submit"
              width="100%"
              height="80px"
              borderRadius="0"
              buttonType="cartSkyBlue"
            >
              결제 하기
            </Button>
          </PriceBoxStyle>
        </RightBoxStyle>
      </BoxStyle>
    </ContainerStyle>
  )
}

export default index

const ContainerStyle = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.cF5F5F5};
  padding-bottom: 573px;
  height: 100%;
`

const BoxStyle = styled.div`
  display: flex;
  gap: 30px;
`

// 왼쪽 컨테이너 - 예약 상품 정보 영역

const ProductInfoStyle = styled.section`
  min-height: 396px;
`

const UserInfoStyle = styled.section`
  min-height: 350px;
  max-height: 455px;
`

const LeftBoxStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 656px;
  ${ProductInfoStyle}, ${UserInfoStyle} {
    width: 100%;
    background-color: ${COLORS.white};
    border: 1px solid ${COLORS.cddd};
  }
`

const ImageInfoStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  span {
    height: 100%;
    width: 421px;
    word-wrap: break-word;
    text-align: start;

    :first-child {
      line-height: 31px;
      font-weight: ${FONTWEGHT.fw500};
    }
  }
`

const PriceInfoStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  div:first-child {
    font-weight: 500;
    font-size: 20px;
    line-height: 31px;
  }
  div:last-child {
    font-weight: ${FONTWEGHT.fw700};
    font-size: 24px;
    line-height: 29px;
  }
`

const ImageBoxStyle = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 19px;
  padding: 10px 24px 30px 24px;
  font-size: ${FONTSIZE.fz24};
  div:first {
    width: 30%;
  }
  ${ImageInfoStyle} {
    width: 70%;
  }
`

const TravelDayStyle = styled.div`
  border-top: 1px solid ${COLORS.cE0E0E0};
  border-bottom: 1px solid ${COLORS.cE0E0E0};
  display: flex;
  padding: 25px 24px;
  justify-content: space-between;
  font-size: ${FONTSIZE.fz20};
`

const SumOfPriceStyle = styled.div`
  display: flex;
  padding: 25px 24px;
  justify-content: space-between;
  align-items: center;
  font-size: ${FONTSIZE.fz20};
  span {
    :last-child {
      text-align: right;
      font-weight: ${FONTWEGHT.fw700};
      font-size: 24px;
      line-height: 29px;
    }
  }
`

// 왼쪽 컨테이너 - 예약자 정보 영역

const UserInfoHeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 24px 20px 24px;
  border-bottom: 1px solid ${COLORS.cE0E0E0};
`

const InfoStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
`
const InfoCardStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 24px;
  span {
    font-size: ${FONTSIZE.fz20};
    line-height: 150%;
  }
  p {
    display: flex;
    align-items: center;
    padding: 0 15px;
    width: 607px;
    height: 48px;
    color: ${COLORS.c767676};
    background-color: ${COLORS.cededed};
    border: 1px solid ${COLORS.cddd};
  }
  input {
    display: flex;
    align-items: center;
    padding: 0 15px;
    width: 607px;
    height: 48px;
    color: ${COLORS.c767676};
    background-color: ${COLORS.cededed};
    border: 1px solid ${COLORS.cddd};
  }
`

// 오른쪽 컨테이너 - 결제 방법 영역

const PaymentMethodStyle = styled.div`
  height: 190px;
`

const PriceFirstBoxStyle = styled.div`
  font-size: ${FONTSIZE.fz20};
  span:last-child {
    font-weight: ${FONTWEGHT.fw700};
  }
`

const PriceSecondBoxStyle = styled.div`
  font-size: ${FONTSIZE.fz20};
  span:last-child {
    font-weight: ${FONTWEGHT.fw700};
    font-size: ${FONTSIZE.fz24};
  }
`

const PriceBoxStyle = styled.div`
  position: relative;
  height: 661px;
  ${PriceFirstBoxStyle}, ${PriceSecondBoxStyle} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px;
    border-top: 1px solid ${COLORS.cE0E0E0};
    span {
      line-height: 150%;
    }
  }
  button {
    position: absolute;
    bottom: 0;
    right: 0;
  }
`

const RightBoxStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 30px;
  width: 494px;
  ${PaymentMethodStyle}, ${PriceBoxStyle} {
    width: 100%;
    background-color: ${COLORS.white};
    border: 1px solid ${COLORS.cddd};
  }
`

const WrapStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 24px 25px 30px 25px;
  border-top: 1px solid ${COLORS.cE0E0E0};
`

// 오른쪽 컨테이너 - 주문 요약 영역

const CheckBoxSectionStyle = styled.article`
  width: 495px;
  min-height: 333px;
  border-top: 1px solid ${COLORS.cE0E0E0};
  padding: 32px 20px 0 20px;
  div {
    display: flex;
    align-items: center;
    font-size: ${FONTSIZE.fz20};
    gap: 10px;

    :first-child {
      font-weight: ${FONTWEGHT.fw600};
    }

    input {
      width: 24px;
      height: 24px;
      margin: 8px;
    }
  }
`
