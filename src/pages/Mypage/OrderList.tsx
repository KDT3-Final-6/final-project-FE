import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import Pagination from '@src/components/common/Pagination'
import { IOrder } from '@src/interfaces/order'
import BarTypeItem from '@src/components/common/BarTypeItem'

const OrderList = () => {
  const orders: IOrder[] = [
    {
      id: '1',
      title: '[실속 골프패키지] 사이판 3박4일 골프 여행',
      image: 'https://cdn.imweb.me/thumbnail/20221129/eabe0173c1ff0.png',
      payment: true,
      discription: '3일은 골프를 하루는 호캉스를 즐킬 수 있는 3월 특가 실속 골프 패키지',
      travelDate: '출발: 2023. 04. 02(일) / 도착: 2023. 04. 05(수)',
      review: false,
      price: 350000,
    },
    {
      id: '2',
      title: '[실속 골프패키지] 사이판 3박4일 골프 여행',
      image: 'https://cdn.imweb.me/thumbnail/20221129/eabe0173c1ff0.png',
      payment: false,
      discription: '3일은 골프를 하루는 호캉스를 즐킬 수 있는 3월 특가 실속 골프 패키지',
      travelDate: '출발: 2023. 04. 02(일) / 도착: 2023. 04. 05(수)',
      review: true,
      price: 350000,
    },
    {
      id: '3',
      title: '[실속 골프패키지] 사이판 3박4일 골프 여행',
      image: 'https://cdn.imweb.me/thumbnail/20221129/eabe0173c1ff0.png',
      payment: false,
      discription: '3일은 골프를 하루는 호캉스를 즐킬 수 있는 3월 특가 실속 골프 패키지',
      travelDate: '출발: 2023. 04. 02(일) / 도착: 2023. 04. 05(수)',
      review: true,
      price: 350000,
    },
    {
      id: '4',
      title: '[실속 골프패키지] 사이판 3박4일 골프 여행',
      image: 'https://cdn.imweb.me/thumbnail/20221129/eabe0173c1ff0.png',
      payment: false,
      discription: '3일은 골프를 하루는 호캉스를 즐킬 수 있는 3월 특가 실속 골프 패키지',
      travelDate: '출발: 2023. 04. 02(일) / 도착: 2023. 04. 05(수)',
      review: true,
      price: 350000,
    },
  ]

  return (
    <>
      <Helmet>
        <title>마이페이지 구매내역</title>
      </Helmet>
      <OrderListStyle>
        {orders.map((order) => (
          <BarTypeItem key={order.id} cardType="barType" item={order}></BarTypeItem>
        ))}
      </OrderListStyle>
      <Pagination />
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
