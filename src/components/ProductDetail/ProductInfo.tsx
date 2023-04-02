import React, { useState } from 'react'
import { SlArrowRight } from 'react-icons/sl'
import styled from 'styled-components'
import { AiOutlineShareAlt, AiOutlineShoppingCart } from 'react-icons/ai'
import Button from '../common/Button'
import Title from '../common/Title'
import { COLORS, FONTSIZE, FONTWEGHT } from '@src/styles/root'
import StarRateWrapGet from '@src/components/common/StarRateWrapGet'
import Select from '../common/Select'
import { IProductDetail } from '@src/interfaces/product'
import Image from '../common/Image'
import { useNavigate } from 'react-router-dom'
import useCopyClipBoard from '@src/utils/copyURL'

interface Props {
  productDetail: IProductDetail
  pathname: string
}

const ProductInfo = ({ productDetail, pathname }: Props) => {
  const onCopy = useCopyClipBoard()
  const [quantity, setQuantity] = useState(1)
  const minusQuantity = () => {
    quantity > 1 ? setQuantity((prev) => prev - 1) : 1
  }
  const plusQuantity = () => {
    setQuantity((prev) => prev + 1)
  }
  const navigate = useNavigate()
  return (
    <InfoStyle>
      <Image bgImage={productDetail.productThumbnail} width="50%" height="450px" />
      <DescStyle>
        <TitleDescStyle>
          <Title fontSize={FONTSIZE.fz32}>
            <h1>{productDetail.productName}</h1>
          </Title>
          <span style={{ fontSize: FONTSIZE.fz18 }}>{productDetail.productContent}</span>
          <RateStyle>
            <StarRateWrapGet AVR_RATE={80} />
            <span className="rate-number">4.0</span>
            <span className="review-number">(83)</span>
            <SlArrowRight style={{ margin: 0 }} />
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
          <Select
            options={productDetail.periodOptions}
            initial="출발일 옵션 선택"
            onChange={(e) => e.preventDefault()}
            width="100%"
            height="50px"
            borderRadius="0"
            borderColor={COLORS.black}
          />
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
          <Button width="180px" height="50px" buttonType="detail">
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
          <Button width="180px" height="50px" buttonType="detail" onClick={() => navigate('/buy')}>
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

const DescStyle = styled.div`
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
  gap: 2px;
  span {
    font-size: 20px;
  }
  .rate-number {
    margin-left: 15px;
    font-weight: ${FONTWEGHT.fw700};
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
