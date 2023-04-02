import Detail from '@src/components/ProductDetail/Detail'
import MoveTab from '@src/components/ProductDetail/MoveTab'
import ProductInfo from '@src/components/ProductDetail/ProductInfo'
import TravelReview from '@src/components/ProductDetail/TravelReview'
import { FONTSIZE, COLORS, FONTWEGHT } from '@src/styles/root'
import Inner from '@src/layout/Inner'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import Title from '@src/components/common/Title'
import RelatedProduct from '@src/components/ProductDetail/RelatedProduct'
import { getProductDetail } from '@src/api/product'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { IProductDetail, initProductDetail } from '@src/interfaces/product'

const ProductDetail = () => {
  const [productDetail, setProductDetail] = useState<IProductDetail>(initProductDetail)
  const location = useLocation()
  const { pathname } = location
  const productId = Number(pathname.slice(9))

  useEffect(() => {
    const fetchData = async () => {
      const detail = await getProductDetail(productId)
      setProductDetail(detail)
    }
    fetchData()
  }, [])
  console.log(productDetail)
  return (
    <Inner padding="32px 0">
      <Helmet>
        {/* 브라우저 탭에 보여줄 수 있는 title 정의하는 훅 (=HTML의 head영역) */}
        <title>{productDetail.productName}</title>
      </Helmet>
      <CategoryStyle>
        {/* 추후에 카테고리 불러오면 수정 예정 */}홈 {'>'}{' '}
        {productDetail.productCategories[2].categoryName} {'>'}{' '}
        {productDetail.productCategories[2].child!.categoryName}
      </CategoryStyle>
      <ProductInfo productDetail={productDetail} pathname={pathname} />
      <MoveTab />
      <hr />
      <Detail productDetail={productDetail} />
      <TravelReview productId={productId} />
      <Title fontSize={FONTSIZE.fz26} fontWeight={FONTWEGHT.fw500} margin="80px 0 50px 0">
        <h3 id="related">연관 상품</h3>
      </Title>
      <RelatedProduct />
      <Title fontSize={FONTSIZE.fz26} fontWeight={FONTWEGHT.fw500} margin="80px 0 50px 0">
        <h3 id="review">내가 봤던 상품</h3>
      </Title>
      <RelatedProduct />
    </Inner>
  )
}

const CategoryStyle = styled.div`
  font-size: ${FONTSIZE.fz16};
  color: ${COLORS.c767676};
  margin-bottom: 17px;
`

export default ProductDetail
