import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import { useGetOrderListQuery } from '@src/reduxStore/api/orderApiSlice'
import OrderBox from '@components/MyPage/OrderBox'
import Paginate from '@src/components/common/Paginate'
import { FONTSIZE } from '@src/styles/root'

const OrderList = () => {
  const [page, setPage] = useState(1)
  const { data: orders, isLoading, isFetching } = useGetOrderListQuery(page)
  if (isLoading) <>Loading</>

  const changePageHandler = () => {}
  return (
    <>
      <Helmet>
        <title>마이페이지 구매내역</title>
      </Helmet>
      <>
        {orders && orders.content.length > 0 ? (
          orders.content.map((orderContent) => (
            <OrderBox key={orderContent.orderList[0].orderId} order={orderContent} />
          ))
        ) : (
          <NullOrderlistStyle>구매 내역이 없습니다.</NullOrderlistStyle>
        )}
      </>
      {orders && orders.content.length > 0 && (
        <Paginate totalElements={orders?.totalPages || 0} changePageHandler={changePageHandler} />
      )}
    </>
  )
}

export default OrderList

const NullOrderlistStyle = styled.div`
  display: flex;
  justify-content: center;
  font-size: ${FONTSIZE.fz24};
  margin: 50px;
`
