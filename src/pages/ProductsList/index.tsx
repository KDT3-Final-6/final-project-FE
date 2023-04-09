import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { COLORS, FONTSIZE } from '@src/styles/root'
import Inner from '@src/layout/Inner'
import Title from '@src/components/common/Title'
import Image from '@src/components/common/Image'
import Button from '@src/components/common/Button'
import { useNavigate } from 'react-router-dom'
import { IProductDetail } from '@src/interfaces/product'
import { getAdminProducts } from '@src/api/product'
import Paginate from '@src/components/common/Paginate'
import {
  useDeleteAdminProductMutation,
  useGetAdminProductListQuery,
} from '@src/reduxStore/api/adminProductApiSlice'
import { useDispatch } from 'react-redux'
import { setModal } from '@src/reduxStore/modalSlice'

const ProductList = () => {
  const [page, setPage] = useState<number>(1)

  const { data } = useGetAdminProductListQuery(page)
  const products: IProductDetail[] = data ? data.content : []
  const totalPages: number = data ? data.totalPages : 0

  const totalElement = totalPages
  const elementLength = products.length

  const [deleteAdminProduct] = useDeleteAdminProductMutation()

  const dispatch = useDispatch()

  const changePageHandler = (event: { selected: number }) => {
    setPage(event.selected + 1)
  }

  const deletePrductHandler = (productId: number) => {
    dispatch(
      setModal({
        isOpen: true,
        text: '상품을 삭제하시겠습니까?',
        onClickOK: async () => {
          await deleteAdminProduct(productId)
          dispatch(setModal({ isOpen: false }))
        },
      })
    )
  }
  const navigate = useNavigate()
  return (
    <ContainerStyle>
      <Inner>
        <Title>
          <h1>상품 관리</h1>
        </Title>
        <input type="text" />
        <TableContainerStyle>
          <div>
            상품 <span style={{ fontWeight: 700, color: COLORS.primary }}>{elementLength}</span>개
          </div>
          <TableStyle>
            <colgroup>
              <col width="10%" />
              <col width="10%" />
              <col width="30%" />
              <col />
              <col />
              <col width="10%" />
            </colgroup>
            <thead>
              <tr>
                <td>상품 번호</td>
                <td>상품 사진</td>
                <td>상품 이름</td>
                <td>상품 금액</td>
                <td>상태</td>
                <td>관리</td>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.productId}>
                  <td>{product.productId}</td>
                  <td>
                    <Image
                      bgImage={product.productThumbnail}
                      width="123px"
                      height="93px"
                      imgBorderRadius="10px"
                    ></Image>
                  </td>
                  <td>{product.productName}</td>
                  <td>{product.productPrice.toLocaleString()}원</td>
                  <td>{product.productStatus}</td>
                  <td>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '0 10px',
                        gap: '10px',
                      }}
                    >
                      <Button
                        width="83px"
                        onClick={() => navigate(`/admin/editProduct/${product.productId}`)}
                      >
                        수정하기
                      </Button>
                      <Button width="83px" onClick={() => deletePrductHandler(product.productId)}>
                        삭제하기
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </TableStyle>
        </TableContainerStyle>
        <Paginate totalElements={totalElement} changePageHandler={changePageHandler} />
      </Inner>
    </ContainerStyle>
  )
}

const ContainerStyle = styled.div`
  background-color: ${COLORS.cf3f3f3};
  padding: 32px 0;
`

const TableContainerStyle = styled.div`
  background-color: ${COLORS.white};
  border-radius: 10px;
  padding: 20px;
`

const TableStyle = styled.table`
  margin-top: 20px;
  width: 100%;
  border: 1px solid ${COLORS.c999};
  text-align: center;
  font-size: ${FONTSIZE.fz16};
  thead {
    td {
      height: 60px;
    }
  }
  td {
    vertical-align: middle;
    border: 1px solid ${COLORS.c999};
    padding: 15px;
  }
`
export default ProductList
