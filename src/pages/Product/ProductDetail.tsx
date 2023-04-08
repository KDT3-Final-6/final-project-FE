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
import { getProductDetail, getReviewsForProduct } from '@src/api/product'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { IProductDetail, initProductDetail } from '@src/interfaces/product'
import CurrentProduct from '@src/components/ProductDetail/CurrentProduct'

const ProductDetail = () => {
  const [productDetail, setProductDetail] = useState<IProductDetail>(initProductDetail)
  const [optionIndex, setOptionIndex] = useState<number>(0)
  const [reviews, setReviews] = useState<number>(0)
  const { pathname } = useLocation()
  const productId = Number(pathname.slice(9))

  useEffect(() => {
    const fetchData = async () => {
      const detail = await getProductDetail(productId)
      const reviewData = await getReviewsForProduct(productId)
      setProductDetail(detail)
      setReviews(reviewData.totalElements)

      /** 최근 본 상품에 넣을 아이템  */
      const newCurrentItem = {
        productId,
        productName: detail.productName,
        productPrice: detail.productPrice,
        productThumbnail: detail.productThumbnail,
      }
      setCurrent(newCurrentItem)
    }
    fetchData()
  }, [])

  /** 최근 본 상품 불러오기 */
  const currentList = JSON.parse(localStorage.getItem('cart')!)

  /** 최근 본 상품 중복 확인 */
  const duplicationItemCheck = () => {
    for (const item of currentList) {
      if (item.productId === productId) {
        return true
      }
    }
  }

  /** 최근 본 상품 넣기 */
  const setCurrent = (newCurrentItem: Object) => {
    if (currentList && duplicationItemCheck()) {
      localStorage.setItem('cart', JSON.stringify([...currentList]))
    } else if (currentList) {
      localStorage.setItem('cart', JSON.stringify([...currentList, newCurrentItem]))
    } else {
      localStorage.setItem('cart', JSON.stringify([newCurrentItem]))
    }
  }

  return (
    <Inner padding="32px 0">
      <Helmet>
        {/* 브라우저 탭에 보여줄 수 있는 title 정의하는 훅 (=HTML의 head영역) */}
        <title>{productDetail.productName}</title>
      </Helmet>
      <CategoryStyle>
        홈 {'>'} {productDetail.productCategories[2]?.categoryName}
      </CategoryStyle>
      <ProductInfo
        productDetail={productDetail}
        pathname={pathname}
        setOptionIndex={setOptionIndex}
        optionIndex={optionIndex}
      />
      <MoveTab reviews={reviews} />
      <hr />
      <Detail productDetail={productDetail} optionIndex={optionIndex} />
      <TravelReview productId={productId} />
      <Title fontSize={FONTSIZE.fz26} fontWeight={FONTWEGHT.fw500} margin="80px 0 50px 0">
        <h3 id="related">연관 상품</h3>
      </Title>
      <RelatedProduct productId={productId} />
      <Title fontSize={FONTSIZE.fz26} fontWeight={FONTWEGHT.fw500} margin="80px 0 50px 0">
        <h3 id="review">최근 본 상품</h3>
      </Title>
      <CurrentProduct currentList={currentList} />
    </Inner>
  )
}

const CategoryStyle = styled.div`
  font-size: ${FONTSIZE.fz16};
  color: ${COLORS.c767676};
  margin-bottom: 17px;
`

export default ProductDetail
