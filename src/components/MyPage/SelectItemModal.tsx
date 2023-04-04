import React, { useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import CheckItem from '@components/common/CheckItem'
import Button from '@components/common/Button'
import styled, { css, keyframes } from 'styled-components'
import { COLORS } from '@src/styles/root'
import { useForm, SubmitHandler } from 'react-hook-form'

interface ISelectItemModal {
  setCurrentValue: any
  setIsModalOpen: any
  selcetedProduct: string | null
  setSelcetedProduct: any
}

const SelectItemModal = ({
  setIsModalOpen,
  setCurrentValue,
  selcetedProduct,
  setSelcetedProduct,
}: ISelectItemModal) => {
  const [errorsMessage, setErrorsMessage] = useState<string>('')

  const handleCloseModal = () => {
    if (!selcetedProduct) {
      setCurrentValue('문의유형')
      setIsModalOpen(false)
    } else {
      setIsModalOpen(false)
    }
  }

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({})

  const onValid: SubmitHandler<any> = (data) => {
    setSelcetedProduct(data.orderList)
    setIsModalOpen(false)
  }

  const onInvalid = (errors: any) => {
    const errorMessage = Object.values(errors).map((error: any) => error.message)[0]
    setErrorsMessage(errorMessage)
    alert(errorMessage)
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
    <ModalStyle onSubmit={handleSubmit(onValid, onInvalid)}>
      <header>
        <div>
          <p>문의 상품 선택</p>
          <CheckItem
            type="radio"
            id="문의 상품 선택 안함"
            labelName="주문 상품 선택 안함"
            name="orderList"
            checkType="rectType"
            register={register}
            errorMsg="문의할 상품을 선택해주세요"
          />
        </div>
        <Button onClick={handleCloseModal} width="24px" height="24px" borderRadius="50%">
          <AiFillCloseCircle />
        </Button>
      </header>
      <article>
        {orderList.map((item) => (
          <CheckItem
            key={item.productId}
            type="radio"
            id={item.productName}
            labelName={item.productName}
            name="orderList"
            checkType="rectType"
            register={register}
            errorMsg="문의할 상품을 선택해주세요"
          />
        ))}
      </article>
      <footer>
        <Button type="submit" width="204px" height="45px" buttonType="borderGray">
          선택하기
        </Button>
      </footer>
    </ModalStyle>
  )
}

export default SelectItemModal

const ModalStyle = styled.form`
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
      padding: 13px;
      border-bottom: 1px solid #bebebe;
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
