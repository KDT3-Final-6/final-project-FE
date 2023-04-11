import { getAdminTransactions } from '@src/api/transaction'
import TransactionCon from '@src/components/Admin/TransactionCon'
import Input from '@src/components/common/Input'
import Paginate from '@src/components/common/Paginate'
import Select from '@src/components/common/Select'
import MESSAGES from '@src/constants/messages'
import { ITransactionList } from '@src/interfaces/transaction'
import Inner from '@src/layout/Inner'
import { hideLoading, showLoading } from '@src/reduxStore/loadingSlice'
import { setModal } from '@src/reduxStore/modalSlice'
import { COLORS, FONTSIZE, FONTWEGHT } from '@src/styles/root'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

const Transaction = () => {
  const dispatch = useDispatch()
  const [page, setPage] = useState<number>(1)

  const [transactions, setTransactions] = useState<ITransactionList>({
    content: [],
    totalPages: 0,
    totalElements: 0,
    pageNumber: 0,
    size: 0,
  })

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

  // const { data: transactions, isLoading, error } = useGetTransactionsQuery(page)
  // if (isLoading) <>Loading</>
  // if (error) {
  //   setModal({
  //     isOpen: true,
  //     text: MESSAGES.ADMIN.TRANSACTION.error,
  //     onClickOK: () => setModal({ isOpen: false }),
  //   })
  // }
  const selectOptions = ['결제대기', '결제완료']
  const [currentValue, setCurrentValue] = useState<string>(selectOptions[0])

  const changePageHandler = (event: { selected: number }) => {
    setPage(event.selected + 1)
  }

  return (
    <>
      {/* {error &&
        setModal({
          isOpen: true,
          text: MESSAGES.ADMIN.TRANSACTION.error,
          onClickOK: () => setModal({ isOpen: false }),
        })} */}
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
          <span>개</span>
        </CountStyle>
        <TransactionListStyle>
          <TransactionTable>
            <colgroup>
              <col width="15%" />
              <col width="" />
              <col width="13%" />
              <col width="5%" />
              <col width="" />
              <col width="20%" />
              <col width="10%" />
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
                <th>관리</th>
              </tr>
            </Thead>
            <Tbody>
              {transactions?.content
                .filter((item) => item.orderStatus === currentValue)
                .map((transaction) => (
                  <TransactionCon key={transaction.purchasedProductId} transaction={transaction} />
                ))}
            </Tbody>
          </TransactionTable>
          <Paginate
            totalElements={transactions?.totalPages || 0}
            changePageHandler={changePageHandler}
          />
        </TransactionListStyle>
      </Inner>
    </>
  )
}

export default Transaction

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

export const InputWrapStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 101px;
  padding-bottom: 80px;
`

export const CountStyle = styled.div`
  width: 1180px;
  display: flex;
  align-items: center;
  font-size: ${FONTSIZE.fz16};
  line-height: ${FONTSIZE.fz19};
  padding-bottom: 24px;
  padding-top: 80px;
  span:nth-child(2) {
    margin-left: 5px;
    color: ${COLORS.primary};
    font-weight: ${FONTWEGHT.fw600};
  }
`
