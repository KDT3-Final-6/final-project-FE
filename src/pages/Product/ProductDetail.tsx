import Detail from '@src/components/ProductDetail/Detail'
import MoveTab from '@src/components/ProductDetail/MoveTab'
import ProductInfo from '@src/components/ProductDetail/ProductInfo'
import Review from '@src/components/ProductDetail/Review'
import { FONTSIZE, COLORS, FONTWEGHT } from '@src/styles/root'
import Inner from '@src/layout/Inner'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import Title from '@src/components/common/Title'

type Props = {}

const ProductDetail = (props: Props) => {
  return (
    <Inner padding="32px 0">
      <Helmet>
        {/* 브라우저 탭에 보여줄 수 있는 title 정의하는 훅 (=HTML의 head영역) */}
        <title>
          홈 {'>'} 테마별 여행 {'>'} 골프
        </title>
      </Helmet>
      <CategoryStyle>
        {/* 추후에 카테고리 불러오면 수정 예정 */}홈 {'>'} 테마별 여행 {'>'} 골프
      </CategoryStyle>
      <ProductInfo />
      <MoveTab />
      <hr />
      <Detail />
      <Title fontSize={FONTSIZE.fz26} fontWeight={FONTWEGHT.fw700} margin="50px 0">
        <h3 id="review">상품 후기(83)</h3>
      </Title>
      <ul style={{ display: 'flex', gap: '22px' }}>
        <Review />
        <Review />
        <Review />
      </ul>
      <Title fontSize={FONTSIZE.fz26} fontWeight={FONTWEGHT.fw700} margin="50px 0">
        <h3 id="related">연관 상품</h3>
      </Title>
      <Title fontSize={FONTSIZE.fz26} fontWeight={FONTWEGHT.fw700} margin="50px 0">
        <h3 id="review">내가 봤던 상품</h3>
      </Title>
    </Inner>
  )
}

const CategoryStyle = styled.div`
  font-size: ${FONTSIZE.fz16};
  color: ${COLORS.c767676};
  margin-bottom: 17px;
`

export default ProductDetail
