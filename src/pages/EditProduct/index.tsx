import Title from '@src/components/common/Title'
import Inner from '@src/layout/Inner'
import { COLORS, FONTSIZE } from '@src/styles/root'
import ProductForm from '@src/components/Admin/ProductForm'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { IProductDetail, initProductDetail } from '@src/interfaces/product'
import { getAdminProductDetail } from '@src/api/product'
import Option from './Option'

const index = () => {
  const [productDetail, setProductDetail] = useState<IProductDetail>(initProductDetail)
  const { pathname } = useLocation()
  const productId = Number(pathname.slice(19))
  useEffect(() => {
    const fetchData = async () => {
      const data = await getAdminProductDetail(productId)
      setProductDetail(data)
    }
    fetchData()
  }, [])
  return (
    <ContainerStyle>
      <Inner>
        <Title fontSize={FONTSIZE.fz32} margin="0 0 32px 0">
          <h1>상품 수정</h1>
        </Title>
        <ProductForm product={productDetail} productId={productId} />
        <Option product={productDetail} />
      </Inner>
    </ContainerStyle>
  )
}

const ContainerStyle = styled.div`
  background-color: ${COLORS.cf3f3f3};
  padding: 32px 0;
`

export default index
