import React, { SetStateAction, useState, useEffect } from 'react'
import { SlArrowRight } from 'react-icons/sl'
import styled from 'styled-components'
import { AiOutlineShareAlt, AiOutlineShoppingCart } from 'react-icons/ai'
import Button from '../common/Button'
import Title from '../common/Title'
import { FONTSIZE, FONTWEGHT, COLORS } from '@src/styles/root'
import { IProductDetail, IProductOption } from '@src/interfaces/product'
import Image from '../common/Image'
import { useNavigate } from 'react-router-dom'
import useCopyClipBoard from '@src/utils/copyURL'
import { deleteWishlist, postCartProduct } from '@src/api/product'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import useCounter from '@src/hooks/useCounter'
import HeartButton from '../common/HeartButton'
import { BsFillSuitHeartFill } from 'react-icons/bs'
import { postWishlist } from '@src/api/product'

interface Props {
  productDetail: IProductDetail
  pathname: string
  setOptionIndex: React.Dispatch<SetStateAction<number>>
  optionIndex: number
}

interface schemaType {
  optionId: string
}

const ProductInfo = ({ productDetail, pathname, setOptionIndex, optionIndex }: Props) => {
  const onCopy = useCopyClipBoard()
  const { quantity, plusQuantity, minusQuantity } = useCounter(1)
  const navigate = useNavigate()
  const [heart, setHeart] = useState(false)

  useEffect(() => {
    setHeart(productDetail.isWished)
  }, [productDetail])

  const optionIdChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setOptionIndex(event.target.selectedIndex)
  }

  const schema = yup.object().shape({
    optionId: yup.string(),
  })

  const { register, handleSubmit } = useForm<schemaType>({ resolver: yupResolver(schema) })
  const onSubmit = async (data: schemaType) => {
    try {
      await postCartProduct(data.optionId, quantity)
      window.confirm('장바구니로 이동하시겠습니까?') && navigate('/mypage/cart')
    } catch (error) {
      console.log(error)
    }
  }

  /** 결제 페이지로 넘길 데이터 */
  const buyItem = {
    name: productDetail?.productName,
    productThumbnail: productDetail?.productThumbnail,
    productPrice: productDetail?.productPrice,
    periodOptionName: productDetail?.periodOptions[optionIndex && optionIndex - 1].periodOptionName,
    productId: Number(pathname.slice(9)),
    periodOptionid: productDetail?.periodOptions[optionIndex && optionIndex - 1].periodOptionId,
    quantity: quantity,
  }

  /** 찜하기 */
  const heartCheck = async () => {
    if (heart) {
      await deleteWishlist(Number(pathname.slice(9)))
      setHeart((prev) => !prev)
    } else {
      await postWishlist(Number(pathname.slice(9)))
      setHeart((prev) => !prev)
    }
  }

  return (
    <InfoStyle>
      <Image bgImage={productDetail.productThumbnail} width="50%" height="450px">
        <div style={{ position: 'relative' }}>
          <HeartButton right="20px" top="20px" isHeart={heart} onClick={heartCheck} />
        </div>
      </Image>
      <DescStyle onSubmit={handleSubmit(onSubmit)}>
        <TitleDescStyle>
          <Title fontSize={FONTSIZE.fz32}>
            <h1>{productDetail.productName}</h1>
          </Title>
          <span style={{ fontSize: FONTSIZE.fz18 }}>{productDetail.productContent}</span>
          <RateStyle>
            <BsFillSuitHeartFill />
            <span>{productDetail.wishlistCount}</span>
          </RateStyle>
        </TitleDescStyle>
        <div style={{ textAlign: 'right' }}>
          <span style={{ fontSize: FONTSIZE.fz20 }}>1인</span>
          {'/'}
          <span
            style={{ fontWeight: FONTWEGHT.fw700, fontSize: FONTSIZE.fz32, marginLeft: '10px' }}
          >
            {productDetail.productPrice.toLocaleString()}원
          </span>
        </div>
        <OptionSectionStyle>
          <span>출발일 *</span>
          <select {...register('optionId', { onChange: optionIdChangeHandler })}>
            <option defaultValue="0">옵션을 선택해 주세요.</option>
            {productDetail?.periodOptions &&
              productDetail?.periodOptions.map((option) => (
                <option key={option.periodOptionId} value={option.periodOptionId}>
                  {option.periodOptionName}
                </option>
              ))}
          </select>
          <span>인원 *</span>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>{productDetail.productPrice.toLocaleString()}원</span>
            <div style={{ display: 'flex' }}>
              <OptionCountStyle onClick={minusQuantity}>-</OptionCountStyle>
              <OptionCountStyle>{quantity}</OptionCountStyle>
              <OptionCountStyle onClick={plusQuantity}>+</OptionCountStyle>
            </div>
          </div>
        </OptionSectionStyle>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button
            width="180px"
            height="50px"
            buttonType="detail"
            // 추후에 주소 값은 수정 예정
            onClick={() => onCopy(`http://localhost:5173${pathname}`)}
          >
            <div
              style={{
                display: 'flex',
                gap: '5px',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <AiOutlineShareAlt style={{ margin: 0 }} />
              공유하기
            </div>
          </Button>
          <Button width="180px" height="50px" buttonType="detail" type="submit">
            <div
              style={{
                display: 'flex',
                gap: '5px',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <AiOutlineShoppingCart style={{ margin: 0 }} />
              장바구니
            </div>
          </Button>
          <Button
            width="180px"
            height="50px"
            buttonType="detail"
            onClick={() => navigate('/buy', { state: [buyItem] })}
          >
            구매하기
          </Button>
        </div>
      </DescStyle>
    </InfoStyle>
  )
}

const InfoStyle = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  height: 450px;
`

const DescStyle = styled.form`
  margin-left: 10px;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const TitleDescStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

const RateStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  svg {
    margin: 0;
    font-size: ${FONTSIZE.fz18};
    color: ${COLORS.heart};
  }
  span {
    font-size: ${FONTSIZE.fz18};
  }
`
const OptionSectionStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  span {
    font-size: ${FONTSIZE.fz20};
    font-weight: ${FONTWEGHT.fw700};
  }
  select {
    border: 1px solid black;
    height: 50px;
    width: 100%;
    border-radius: 3px;
    font-size: 16px;
    padding: 11px 23px;
  }
`

const OptionCountStyle = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
export default ProductInfo
