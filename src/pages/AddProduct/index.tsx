import ProductForm from '@src/components/Admin/ProductForm'
import Title from '@src/components/common/Title'
import Inner from '@src/layout/Inner'
import styled from 'styled-components'
import { COLORS, FONTSIZE } from '@src/styles/root'

const AddProduct = () => {
  return (
    <ContainerStyle>
      <Inner>
        <Title fontSize={FONTSIZE.fz32} margin="0 0 32px 0">
          <h1>상품 추가</h1>
        </Title>
        <ProductForm />
      </Inner>
    </ContainerStyle>
  )
}

const ContainerStyle = styled.div`
  background-color: ${COLORS.cf3f3f3};
  padding: 32px 0;
`

export default AddProduct
