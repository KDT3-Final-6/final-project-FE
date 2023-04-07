import React, { useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import CheckItem from '@components/common/CheckItem'
import Button from '@components/common/Button'
import styled, { css, keyframes } from 'styled-components'
import { COLORS } from '@src/styles/root'
import { useForm, SubmitHandler } from 'react-hook-form'
import RadioItem from '@src/components/MyPage/RadioItem'
import { useGetOrderListQuery } from '@src/reduxStore/api/orderApiSlice'

type Option = {
  id: number
  name: string
}

interface ISelectItemModal {
  setCurrentValue: any
  setIsModalOpen: any
  selectedOption?: Option | null
  setSelectedOption?: any
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>
  setProductId: React.Dispatch<React.SetStateAction<number | null>>
}

const SelectItemModal = ({
  setIsModalOpen,
  setCurrentValue,
  selectedOption,
  setSelectedOption,
  setIsChecked,
  setProductId,
}: ISelectItemModal) => {
  const [errorsMessage, setErrorsMessage] = useState<string>('')
  const [page, setPage] = useState<number>(1)
  const { data, isLoading, isFetching } = useGetOrderListQuery(page)

  if (isLoading) <>Loading</>
  console.log('data', data)

  const handleOptionChange = (name: string, id: null | number) => {
    setSelectedOption({ name, id })
  }

  const handleCloseModal = () => {
    if (!selectedOption) {
      setCurrentValue('문의유형')
      setIsModalOpen(false)
    } else {
      setIsModalOpen(false)
    }
  }

  const handleClick = () => {
    if (!selectedOption) alert('상품문의는 문의상품 선택이 필수입니다.')
    else {
      setProductId(selectedOption.id)
      setIsModalOpen(false)
      setIsChecked(false)
    }
  }

  const getOrderList = [
    {
      orderDate: '',
      orderList: [
        {
          orderId: 325,
          productId: 1,
          purchasedProductId: 366,
          productName: 'test_000',
          productThumbnail: 'test_cfb89269cde7',
          productPrice: 30000,
          orderDate: '2023-03-28T14:06:18.300519',
          optionName: '2022-03-05 ~ 2202-03-18',
          productProductQuantity: 3,
          orderStatus: '결제완료',
          hasReview: true,
        },
      ],
      paymentMethod: '카드',
    },
    {
      orderDate: '',
      orderList: [
        {
          orderId: 326,
          productId: 2,
          purchasedProductId: 366,
          productName: 'test_111',
          productThumbnail: 'test_cfb89269cde7',
          productPrice: 30000,
          orderDate: '2023-03-28T14:06:18.300519',
          optionName: '2022-03-05 ~ 2202-03-18',
          productProductQuantity: 3,
          orderStatus: '결제완료',
          hasReview: true,
        },
      ],
      paymentMethod: '카드',
    },
    {
      orderDate: '',
      orderList: [
        {
          orderId: 327,
          productId: 3,
          purchasedProductId: 366,
          productName: 'test_222',
          productThumbnail: 'test_cfb89269cde7',
          productPrice: 30000,
          orderDate: '2023-03-28T14:06:18.300519',
          optionName: '2022-03-05 ~ 2202-03-18',
          productProductQuantity: 3,
          orderStatus: '결제완료',
          hasReview: true,
        },
      ],
      paymentMethod: '카드',
    },
  ]

  const orderList = getOrderList.map((item) => item.orderList).flat()

  return (
    <ModalStyle>
      <header>
        <div>
          <p>문의 상품 선택</p>
        </div>
        <Button onClick={handleCloseModal} width="24px" height="24px" borderRadius="50%">
          <AiFillCloseCircle />
        </Button>
      </header>
      <article>
        {orderList.map((item) => (
          <RadioItem
            key={item.productId}
            id={item.productId}
            name={item.productName}
            isChecked={selectedOption?.id === item.productId}
            onChange={handleOptionChange}
          />
        ))}
      </article>
      <footer>
        <Button
          type="submit"
          width="204px"
          height="45px"
          buttonType="borderGray"
          onClick={handleClick}
        >
          선택하기
        </Button>
      </footer>
    </ModalStyle>
  )
}

export default SelectItemModal

const ModalStyle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  min-height: 307px;
  padding: 25px;
  background-color: #f3f3f3;
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.15));
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #bebebe;
    padding-bottom: 16px;
    font-weight: 600;
    font-size: 20px;
    line-height: 31px;
    div:first-child {
      display: flex;
      align-items: center;
      gap: 32px;
    }
    button {
      border: none;
      svg {
        font-size: 24px;
      }
    }
  }
  article {
    margin-bottom: 30px;
    min-height: 144px;
    div {
      :last-child {
        border-bottom: none;
      }
    }
  }
  footer {
    display: flex;
    justify-content: end;

    button {
      :hover {
        box-shadow: ${COLORS.boxShowdow};
      }
    }
  }
`
