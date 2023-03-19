import React from 'react'
import { SlArrowRight } from 'react-icons/sl'
import styled from 'styled-components'
import Option from './Option'

type Props = {}

const ProductInfo = (props: Props) => {
  return (
    <InfoBox>
      <div style={{ width: '50%', height: '450px', backgroundColor: 'tomato' }}>
        이미지 슬라이드
      </div>
      <DescBox>
        <span style={{ fontSize: '26px', fontWeight: '700' }}>
          [실속 골프 패키지] 사이판 3박 4일 골프 여행
        </span>
        <span style={{ fontSize: '18px' }}>여행 간단 설명</span>
        <div style={{ display: 'flex' }}>
          <div>★★★★☆</div>
          <span>4.0</span>
          <span>(83)</span>
          <SlArrowRight style={{ cursor: 'pointer' }} />
        </div>
        <div style={{ textAlign: 'right' }}>
          <span>1인</span>
          {'/'}
          <span style={{ fontWeight: 700, fontSize: '32px' }}>350,000원</span>
        </div>
        <div>
          <span>인원 선택</span>
          <Option />
          <Option />
          <Option />
        </div>
        <div>
          <button>공유하기</button>
          <button>장바구니</button>
          <button>구매하기</button>
        </div>
      </DescBox>
    </InfoBox>
  )
}

const InfoBox = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`

const DescBox = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`

export default ProductInfo
