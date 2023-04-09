import Input from '@src/components/common/Input'
import Inner from '@src/layout/Inner'
import { COLORS, FONTSIZE } from '@src/styles/root'
import React, { useEffect, useState } from 'react'
import { CountStyle, InputWrapStyle } from '../UserList'
import styled from 'styled-components'
import ITransaction from '@src/interfaces/transaction'
import { useDispatch } from 'react-redux'
import { hideLoading, showLoading } from '@src/reduxStore/loadingSlice'
import { getAdminTransactions } from '@src/api/transaction'
import { setModal } from '@src/reduxStore/modalSlice'
import MESSAGES from '@src/constants/messages'

const TransactionList = () => {
  const dispatch = useDispatch()
  const [transactions, setTransactions] = useState<ITransaction>()
  const [page, setPage] = useState<number>(1)
  useEffect(() => {
    ;(async () => {
      try {
        dispatch(showLoading())
        setTransactions(await getAdminTransactions(page))
      } catch (error) {
        dispatch(
          setModal({
            isOpen: true,
            text: MESSAGES.ADMIN.TRANSACTION.error,
            onClickOK: () => {
              dispatch(setModal({ isOpen: false }))
            },
          })
        )
      } finally {
        dispatch(hideLoading())
      }
    })()
  }, [page])
  console.log(transactions)

  return (
    <Inner>
      <InputWrapStyle>
        <Input
          inputType="searchInput"
          type="text"
          width="925px"
          height="56px"
          placeholder="검색"
          borderRadius="0"
          bgColor="transparent"
          borderColor={`${COLORS.c999}`}
        />
      </InputWrapStyle>
      <CountStyle>
        <span>신규주문</span>
        <span>{transactions?.totalElements}</span>
        <span>개</span>
      </CountStyle>
      <TransactionListStyle>
        <TransactionTable>
          <colgroup>
            <col width="" />
            <col width="" />
            <col width="" />
            <col width="" />
            <col width="" />
            <col width="" />
            <col width="" />
          </colgroup>
          <Thead>
            <tr>
              <th>주문번호/시각</th>
              <th>주문상품</th>
              <th>상품금액</th>
              <th>수량</th>
              <th>상태</th>
              <th>결제내역</th>
              <th>관리</th>
            </tr>
          </Thead>
          <Tbody>
            {transactions?.content.map((transactions) => (
              <tr
                key={transactions.orderList.map((li) => li.orderId)}
                id={transactions.orderList.map((li) => li.orderId)}
              >
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            ))}
          </Tbody>
        </TransactionTable>
      </TransactionListStyle>
    </Inner>
  )
}

export default TransactionList

const TransactionListStyle = styled.div``

const TransactionTable = styled.table`
  width: 100%;
`

const Thead = styled.thead`
  font-size: ${FONTSIZE.fz16};
  color: ${COLORS.c1b1b1b};
  th {
    padding: 20px 0;
    border: 1px solid ${COLORS.c999};
  }
`

const Tbody = styled.tbody`
  td {
    border: 1px solid ${COLORS.c999};
    padding: 26px 20px;
  }
`
