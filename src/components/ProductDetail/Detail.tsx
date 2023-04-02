import { IProductDetail } from '@src/interfaces/product'
import { COLORS } from '@src/styles/root'
import React from 'react'
import styled from 'styled-components'
import Image from '../common/Image'

interface Props {
  productDetail: IProductDetail
}

const Detail = ({ productDetail }: Props) => {
  return (
    <DetailStyle id="detail">
      <ReservationStyle>
        <div>
          <span>여행 상세 일정: 3박 4일</span>
          <span>제주 항공</span>
        </div>
        <ReservationDescStyle>
          <span>일정</span>
          <span>출발: 2023.04.02(일) 07:25 2023.04.02(일) 11:00 7C4407총 04시간 35분 소요</span>
          <span>도착 : 2023.04.05(수) 13:00 2023.04.05(수) 18:55 7C4408총 04시간 55분 소요</span>
        </ReservationDescStyle>
        <ReservationDescStyle>
          <span>여행 도시</span>
          <span>하와이</span>
        </ReservationDescStyle>
        <ReservationDescStyle>
          <span>예약 현황</span>
          <span>예약 4석</span>
          <span>좌석: 8석(최소 출발: 2명)</span>
        </ReservationDescStyle>
      </ReservationStyle>
      {productDetail.productImages.map((image, index) => (
        <Image src={image} alt={String(index)}></Image>
      ))}
    </DetailStyle>
  )
}

const DetailStyle = styled.div`
  margin: 40px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  font-size: 20px;
`

const ReservationStyle = styled.div`
  width: 100%;
  border-radius: 10px;
  border: 1px solid ${COLORS.black};
  height: 382px;
  padding: 27px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  div:first-child {
    span {
      font-weight: 700;
    }
  }
`

const ReservationDescStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  span:first-child {
    font-weight: 700;
  }
`

export default Detail
