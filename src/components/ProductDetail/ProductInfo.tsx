import React from 'react'
import { SlArrowRight } from 'react-icons/sl'
import styled from 'styled-components'
import Option from './Option'
import { AiOutlineShareAlt, AiOutlineShoppingCart } from 'react-icons/ai'
import Button from '../common/Button'
import Title from '../common/Title'
import { FONTSIZE, FONTWEGHT } from '@src/styles/root'

type Props = {}

const ProductInfo = (props: Props) => {
  return (
    <InfoStyle>
      <div style={{ width: '50%', height: '450px', backgroundColor: 'tomato' }}>
        이미지 슬라이드
      </div>
      <DescStyle>
        <Title fontSize={FONTSIZE.fz24}>
          <h3>[실속 골프 패키지] 사이판 3박 4일 골프 여행</h3>
        </Title>
        <span style={{ fontSize: FONTSIZE.fz18 }}>여행 간단 설명</span>
        <div style={{ display: 'flex' }}>
          <div>★★★★☆</div>
          <span>4.0</span>
          <span>(83)</span>
          <SlArrowRight style={{ cursor: 'pointer' }} />
        </div>
        <div style={{ textAlign: 'right' }}>
          <span>1인</span>
          {'/'}
          <span style={{ fontWeight: FONTWEGHT.fw700, fontSize: FONTSIZE.fz32 }}>350,000원</span>
        </div>
        <div>
          <span>인원 선택</span>
          <Option />
          <Option />
          <Option />
        </div>
        <div style={{ display: 'flex', gap: '5px', justifyContent: 'center' }}>
          <Button buttonType="skyBlue" width="180px" height="50px">
            <AiOutlineShareAlt />
            공유하기
          </Button>
          <Button buttonType="skyBlue" width="180px" height="50px">
            <AiOutlineShoppingCart />
            장바구니
          </Button>
          <Button buttonType="skyBlue" width="180px" height="50px">
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
  justify-content: center;
  gap: 15px;
`

export default ProductInfo
