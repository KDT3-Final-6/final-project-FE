import React, { useRef, useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import Button from '@components/common/Button'
import styled, { css, keyframes } from 'styled-components'
import { COLORS } from '@src/styles/root'
import RadioItem from '@src/components/MyPage/RadioItem'
import { useGetOrderItemListQuery, useGetOrderListQuery } from '@src/reduxStore/api/orderApiSlice'
import Paginate from '../common/Paginate'
import useOnClickOutside from '@src/hooks/useOnClickOutside'

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
  const { data: orderItemList, isLoading } = useGetOrderItemListQuery(page)
  const ref = useRef(null)
  useOnClickOutside(ref, () => setIsModalOpen(false))

  if (isLoading) <>Loading</>

  const handleOptionChange = (name: string, id: null | number) => {
    setSelectedOption({ name, id })
  }

  const handleCloseModal = () => {
    if (!selectedOption) {
      setCurrentValue('문의유형')
      setIsModalOpen(false)
      document.body.style.overflowY = 'auto'
    } else {
      setIsModalOpen(false)
      document.body.style.overflowY = 'auto'
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

  const changePageHandler = (event: { selected: number }) => {
    setPage(event.selected + 1)
  }

  return (
    <ModalBackDrop>
      <ModalStyle ref={ref}>
        <header>
          <div>
            <p>문의 상품 선택</p>
          </div>
          <Button onClick={handleCloseModal} width="24px" height="24px" borderRadius="50%">
            <AiFillCloseCircle />
          </Button>
        </header>
        <article>
          {orderItemList?.content.map((item, index) => (
            <RadioItem
              key={item.purchasedProductId}
              id={item.purchasedProductId}
              name={item.productName}
              isChecked={selectedOption?.id === item.purchasedProductId}
              onChange={handleOptionChange}
            />
          ))}
        </article>
        <Paginate
          totalElements={orderItemList?.totalPages || 0}
          changePageHandler={changePageHandler}
        />
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
    </ModalBackDrop>
  )
}

export default SelectItemModal

const ModalBackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`

const ModalStyle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  min-height: 307px;
  max-height: 900px; //715px;
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
  ul {
    margin-top: 0;
    margin-bottom: 25px;
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
