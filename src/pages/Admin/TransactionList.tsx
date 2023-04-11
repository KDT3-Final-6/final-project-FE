import Input from '@src/components/common/Input'
import Inner from '@src/layout/Inner'
import { COLORS, FONTSIZE, FONTWEGHT } from '@src/styles/root'
import React, { useEffect, useState } from 'react'
import { CountStyle, InputWrapStyle } from '../UserList'
import styled from 'styled-components'
import ITransaction from '@src/interfaces/transaction'
import { useDispatch } from 'react-redux'
import { hideLoading, showLoading } from '@src/reduxStore/loadingSlice'
import { getAdminTransactions } from '@src/api/transaction'
import { setModal } from '@src/reduxStore/modalSlice'
import MESSAGES from '@src/constants/messages'
import Select from '@src/components/common/Select'
import Paginate from '@src/components/common/Paginate'
import hideName from '@src/utils/hideName'

const TransactionList = () => {
  const dispatch = useDispatch()
  const [transactions, setTransactions] = useState<ITransaction>()
  const [page, setPage] = useState<number>(1)

  const selectOptions = ['결제대기', '결제완료']
  const [currentValue, setCurrentValue] = useState<string>(selectOptions[0])

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

  const changePageHandler = (event: { selected: number }) => {
    setPage(event.selected + 1)
  }

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
          borderColor={COLORS.c999}
        />
      </InputWrapStyle>
      <CountStyle>
        <span>신규주문</span>
        <span>{transactions?.totalElements}</span>
        <span>개 (수정중)</span>
      </CountStyle>
      <TransactionListStyle>
        <TransactionTable>
          <colgroup>
            <col width="16%" />
            <col width="" />
            <col width="13%" />
            <col width="5%" />
            <col width="10%" />
            <col width="20%" />
            {/* <col width="8%%" /> */}
          </colgroup>
          <Thead>
            <tr>
              <th>주문번호/시각</th>
              <th>주문상품</th>
              <th>상품금액</th>
              <th>수량</th>
              <th>
                <Select
                  options={selectOptions}
                  currentValue={currentValue}
                  setCurrentValue={setCurrentValue}
                  height="24px"
                  borderColor="transparent"
                  borderRadius="0"
                  fontSize="16px"
                  arrowImg="/images/icons/bottom-arrow1.png"
                />
              </th>
              <th>결제내역</th>
              {/* <th>관리</th> */}
            </tr>
          </Thead>
          <Tbody>
            {transactions?.content
              .filter((item) => item.orderStatus === currentValue)
              .map((transaction: any) => (
                <tr key={transaction.purchasedProductId}>
                  <td>
                    <OrderInfoStyle>
                      <span className="textBold">{`주문번호: ${transaction.productId}`}</span>
                      <span className="textGrayColor">{`${transaction.orderDate.slice(
                        0,
                        10
                      )} ${transaction.orderDate.slice(11, 16)}`}</span>
                      <span>{hideName(transaction.memberName)}</span>
                    </OrderInfoStyle>
                  </td>
                  <td>
                    <ProductStyle>
                      <img src={transaction.productThumbnail} alt="" />
                      <div>
                        <span className="textBold">{transaction.productName}</span>
                        <span className="textGrayColor">{transaction.periodOptionName}</span>
                      </div>
                    </ProductStyle>
                  </td>
                  <td className="textCenter textBold">{`${transaction.productPrice.toLocaleString()} 원`}</td>
                  <td className="textCenter textBold">{transaction.purchasedProductQuantity}</td>
                  <StatusTdStyle className="textCenter">{transaction.orderStatus}</StatusTdStyle>
                  <td>
                    <div>
                      <PaymentStyle className="textBold">
                        <span>총 결제금액</span>
                        <span>
                          {`${(
                            transaction.productPrice * transaction.purchasedProductQuantity
                          ).toLocaleString()} 원`}
                        </span>
                      </PaymentStyle>
                      <PaymentStyle className="textGrayColor">
                        <span>결제방법</span>
                        <span>{transaction.paymentMethod}</span>
                      </PaymentStyle>
                    </div>
                  </td>
                  {/* <td className="textCenter">관리</td> */}
                </tr>
              ))}
          </Tbody>
        </TransactionTable>
        <Paginate
          totalElements={transactions?.totalPages || 0}
          changePageHandler={changePageHandler}
        />
      </TransactionListStyle>
    </Inner>
  )
}

export default TransactionList

const TransactionListStyle = styled.div`
  font-size: ${FONTSIZE.fz16};

  .textGrayColor {
    color: ${COLORS.c767676};
  }

  .textBold {
    font-weight: ${FONTWEGHT.fw700};
  }

  span {
    display: block;
  }
`

const TransactionTable = styled.table`
  width: 100%;
`

const Thead = styled.thead`
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

    &.textCenter {
      text-align: center;
    }
  }
`

const OrderInfoStyle = styled.div`
  line-height: 1.3;
`

const ProductStyle = styled.div`
  position: relative;
  height: 68px;

  img {
    width: 68px;
    margin-right: 10px;
    position: absolute;
  }

  > div {
    height: 100%;
    margin-left: 78px;

    span {
      line-height: 1.2;
      &:first-of-type {
        margin-bottom: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 1;
        display: -webkit-box;
        -webkit-box-orient: vertical;
      }
    }
  }
`

const StatusTdStyle = styled.td`
  color: ${COLORS.c3ba1ff};
  font-weight: ${FONTWEGHT.fw700};
`

const PaymentStyle = styled.div`
  display: flex;
  justify-content: space-between;

  &:first-of-type {
    margin-bottom: 10px;
  }
`
