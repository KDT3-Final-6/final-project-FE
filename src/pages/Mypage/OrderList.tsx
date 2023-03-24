import Button from '@src/components/common/Button'
import ProductCard, {
  HashStyle,
  ImgAreaStyle,
  PriceStyle,
  TxtAreaStyle,
} from '@src/components/common/ProductCard'
import Title from '@src/components/common/Title'
import PATH from '@src/constants/pathConst'
import COLORS from '@src/styles/root'
import React from 'react'
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { FiShare2 } from 'react-icons/fi'

type Props = {}

const OrderList = (props: Props) => {
  const navigate = useNavigate()
  return (
    <>
      <Helmet>
        <title>마이페이지</title>
      </Helmet>
      <OrderListStyle>
        <ProductCard cardType="barType" maxHeight="300px">
          <ImgAreaStyle>
            <img src="https://cdn.imweb.me/thumbnail/20221129/eabe0173c1ff0.png" alt="" />
          </ImgAreaStyle>
          <TxtAreaStyle isBarType={true}>
            <CompleteStyle complete="payment">결제완료</CompleteStyle>
            <Title
              titleType="h3"
              title="[실속 골프패키지] 사이판 3박4일 골프 여행"
              fontSize="22px"
              marginBotton="9px"
            />
            <HashStyle fontSize="18px" color={COLORS.darkGrey}>
              3일은 골프를 하루는 호캉스를 즐킬 수 있는 3월 특가 실속 골프 패키지
            </HashStyle>
            <DatePriceStyle>
              <p>출발: 2023. 04. 02(일) / 도착: 2023. 04. 05(수)</p>

              <PriceStyle fontSize="30px">
                <span>결제금액 :</span>
                {`${Number(350000).toLocaleString()}원`}
              </PriceStyle>
            </DatePriceStyle>
            <Buttons>
              <Button buttonType="borderGray">
                <FiShare2 />
                공유하기
              </Button>
              <Button buttonType="borderGray" onClick={() => navigate(PATH.PRODUCT_DETAIL)}>
                자세히 보기
              </Button>
              <Button buttonType="borderGray">리뷰작성하기</Button>
            </Buttons>
          </TxtAreaStyle>
        </ProductCard>
        <ProductCard cardType="barType">
          <ImgAreaStyle>
            <img src="https://cdn.imweb.me/thumbnail/20221129/eabe0173c1ff0.png" alt="" />
          </ImgAreaStyle>
          <TxtAreaStyle isBarType={true}>
            <CompleteStyle>여행완료</CompleteStyle>
            <Title
              titleType="h3"
              title="[실속 골프패키지] 사이판 3박4일 골프 여행"
              fontSize="22px"
              marginBotton="9px"
            />
            <HashStyle fontSize="18px" color={COLORS.darkGrey}>
              3일은 골프를 하루는 호캉스를 즐킬 수 있는 3월 특가 실속 골프 패키지
            </HashStyle>
            <DatePriceStyle>
              <p>출발: 2023. 04. 02(일) / 도착: 2023. 04. 05(수)</p>

              <PriceStyle fontSize="30px">
                <span>결제금액 :</span>
                {`${Number(350000).toLocaleString()}원`}
              </PriceStyle>
            </DatePriceStyle>
            <Buttons>
              <Button buttonType="borderGray">
                <FiShare2 />
                공유하기
              </Button>
              <Button buttonType="borderGray" onClick={() => navigate(PATH.PRODUCT_DETAIL)}>
                자세히 보기
              </Button>
              <Button buttonType="disable">리뷰작성완료</Button>
            </Buttons>
          </TxtAreaStyle>
        </ProductCard>
        <ProductCard cardType="barType">
          <ImgAreaStyle>
            <img src="https://cdn.imweb.me/thumbnail/20221129/eabe0173c1ff0.png" alt="" />
          </ImgAreaStyle>
          <TxtAreaStyle isBarType={true}>
            <CompleteStyle>여행완료</CompleteStyle>
            <Title
              titleType="h3"
              title="[실속 골프패키지] 사이판 3박4일 골프 여행"
              fontSize="22px"
              marginBotton="9px"
            />
            <HashStyle fontSize="18px" color={COLORS.darkGrey}>
              3일은 골프를 하루는 호캉스를 즐킬 수 있는 3월 특가 실속 골프 패키지
            </HashStyle>
            <DatePriceStyle>
              <p>출발: 2023. 04. 02(일) / 도착: 2023. 04. 05(수)</p>

              <PriceStyle fontSize="30px">
                <span>결제금액 :</span>
                {`${Number(350000).toLocaleString()}원`}
              </PriceStyle>
            </DatePriceStyle>
            <Buttons>
              <Button buttonType="borderGray">
                <FiShare2 />
                공유하기
              </Button>
              <Button buttonType="borderGray" onClick={() => navigate(PATH.PRODUCT_DETAIL)}>
                자세히 보기
              </Button>
              <Button buttonType="disable">리뷰작성완료</Button>
            </Buttons>
          </TxtAreaStyle>
        </ProductCard>
        <ProductCard cardType="barType">
          <ImgAreaStyle>
            <img src="https://cdn.imweb.me/thumbnail/20221129/eabe0173c1ff0.png" alt="" />
          </ImgAreaStyle>
          <TxtAreaStyle isBarType={true}>
            <CompleteStyle>여행완료</CompleteStyle>
            <Title
              titleType="h3"
              title="[실속 골프패키지] 사이판 3박4일 골프 여행"
              fontSize="22px"
              marginBotton="9px"
            />
            <HashStyle fontSize="18px" color={COLORS.darkGrey}>
              3일은 골프를 하루는 호캉스를 즐킬 수 있는 3월 특가 실속 골프 패키지
            </HashStyle>
            <DatePriceStyle>
              <p>출발: 2023. 04. 02(일) / 도착: 2023. 04. 05(수)</p>

              <PriceStyle fontSize="30px">
                <span>결제금액 :</span>
                {`${Number(350000).toLocaleString()}원`}
              </PriceStyle>
            </DatePriceStyle>
            <Buttons>
              <Button buttonType="borderGray">
                <FiShare2 />
                공유하기
              </Button>
              <Button buttonType="borderGray" onClick={() => navigate(PATH.PRODUCT_DETAIL)}>
                자세히 보기
              </Button>
              <Button buttonType="disable">리뷰작성완료</Button>
            </Buttons>
          </TxtAreaStyle>
        </ProductCard>
      </OrderListStyle>
      <PaginationStyle>Pagination</PaginationStyle>
    </>
  )
}

export default OrderList

const OrderListStyle = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 66px;
`

const CompleteStyle = styled.p<{
  complete?: string
}>`
  color: ${(props) => (props.complete === 'payment' ? COLORS.primary : COLORS.disableTxtGrey)};
  font-weight: bold;
  font-size: 20px;
  margin: 19px 0 9px;
`

const DatePriceStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${COLORS.primary};

  ${PriceStyle} {
    color: ${COLORS.darkGrey};
    display: flex;
    align-items: center;

    span {
      font-weight: normal;
      font-size: 20px;
      margin-right: 10px;
    }
  }
`

const Buttons = styled.div`
  display: flex;
  gap: 8px;
  justify-content: end;
  margin-top: 10px;

  button {
    display: flex;
    align-items: center;
    svg {
      font-size: 20px;
      margin-right: 10px;
    }
  }
`

const PaginationStyle = styled.div`
  margin-bottom: 100px;
  display: flex;
  justify-content: center;
`
