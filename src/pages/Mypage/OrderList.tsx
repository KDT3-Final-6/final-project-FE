import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import Pagination from '@src/components/common/Pagination'
import { IOrder } from '@src/interfaces/order'
import BarTypeItem from '@src/components/common/BarTypeItem'
import { COLORS } from '@src/styles/root'
import { useGetOrderListQuery } from '@src/reduxStore/api/orderApiSlice'
import OrderBox from './OrderBox'
import Paginate from '@src/components/common/Paginate'

const OrderList = () => {
  const [page, setPage] = useState(1)
  const { data: orders, isLoading, isFetching } = useGetOrderListQuery(page)
  if (isLoading) <>Loading</>

  console.log('orders', orders)
  const changePageHandler = () => {}
  return (
    <>
      <Helmet>
        <title>마이페이지 구매내역</title>
      </Helmet>
      <>
        {orders &&
          orders.content.map((orderContent) => (
            <OrderBox key={orderContent.orderList[0].orderId} order={orderContent} />
          ))}
      </>
      <Paginate totalElements={orders?.totalPages || 0} changePageHandler={changePageHandler} />
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
