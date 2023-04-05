import { IProductDetail, initProductOption } from '@src/interfaces/product'
import { COLORS } from '@src/styles/root'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Image from '../common/Image'

interface Props {
  productDetail: IProductDetail
  optionId: string
}

const Detail = ({ productDetail, optionId }: Props) => {
  const [optionList, setOptionList] = useState(productDetail?.periodOptions[0])
  useEffect(() => {
    setOptionList(productDetail.periodOptions[Number(optionId)])
  }, [optionId])
  console.log(optionList)
  return (
    <DetailStyle id="detail">
      <ReservationStyle>
        <div>
          <span>
            여행 상세 일정: {optionList?.period - 1}박 {optionList?.period}일{' '}
          </span>
        </div>
        <ReservationDescStyle>
          <span>일정</span>
          <span>
            출발: {optionList?.startDate} {optionList?.startDetail}
          </span>
          <span>
            도착 : {optionList?.endDate} {optionList?.endDetail}
          </span>
        </ReservationDescStyle>
        <ReservationDescStyle>
          <span>예약 현황</span>
          <span>예약 {optionList?.soldQuantity}석</span>
        </ReservationDescStyle>
      </ReservationStyle>
      {productDetail.productImages.map((image, index) => (
        <Image src={image} alt={String(index)} key={index}></Image>
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
  height: 250px;
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
