import Inner from '@src/layout/Inner'
import Section from '@src/layout/Section'
import COLORS from '@src/styles/root'
import React from 'react'
import styled from 'styled-components'
import ProductCard, {
  CategoryStyle,
  HashStyle,
  ImgAreaStyle,
  PriceStyle,
  TxtAreaStyle,
} from '../common/ProductCard'
import Title from '../common/Title'

const Curation = () => {
  return (
    <Section>
      <Inner>
        <Title titleType="h2" fontSize="32px" title="어디로 여행을 떠날까요?" marginBotton="66px" />
        <ProductListStyle>
          <ProductCard cardType="productCard" width="33.3333%" minHeight="500px">
            <ImgAreaStyle>
              <img src="https://cdn.imweb.me/thumbnail/20220422/e2416c9e52bf5.jpg" alt="" />
            </ImgAreaStyle>
            <TxtAreaStyle>
              <CategoryStyle>와인러버</CategoryStyle>
              <Title
                titleType="h3"
                title="어른스러움의 프랑스 보르도 와인로드 10일"
                fontWeight="normal"
                fontSize="24px"
                marginBotton="5px"
              />
              <HashStyle fontSize="19px">
                #프랑스 #보르도 #생테밀리옹 #메독 #꼬냑 #라로셀 #투르 #르망 #몽생미셀 #파리
                #고성호텔 #몽생미셀 #와인 #샴페인 #와이너리 #스파클링 와인
              </HashStyle>
              <PriceStyle fontSize="29px">{`${Number(7490000).toLocaleString()}원`}</PriceStyle>
            </TxtAreaStyle>
          </ProductCard>
          <ProductCard cardType="productCard" width="33.3333%" minHeight="500px">
            <ImgAreaStyle>
              <img src="https://cdn.imweb.me/thumbnail/20220422/e2416c9e52bf5.jpg" alt="" />
            </ImgAreaStyle>
            <TxtAreaStyle>
              <CategoryStyle>와인러버</CategoryStyle>
              <Title
                titleType="h3"
                title="어른스러움의 프랑스 보르도 와인로드 10일"
                fontWeight="normal"
                fontSize="24px"
                marginBotton="5px"
              />
              <HashStyle fontSize="19px">
                #프랑스 #보르도 #생테밀리옹 #메독 #꼬냑 #라로셀 #투르 #르망 #몽생미셀 #파리
                #고성호텔 #몽생미셀 #와인 #샴페인 #와이너리 #스파클링 와인
              </HashStyle>
              <PriceStyle fontSize="29px">{`${Number(7490000).toLocaleString()}원`}</PriceStyle>
            </TxtAreaStyle>
          </ProductCard>
          <ProductCard cardType="productCard" width="33.3333%" minHeight="500px">
            <ImgAreaStyle>
              <img src="https://cdn.imweb.me/thumbnail/20220422/e2416c9e52bf5.jpg" alt="" />
            </ImgAreaStyle>
            <TxtAreaStyle>
              <CategoryStyle>와인러버</CategoryStyle>
              <Title
                titleType="h3"
                title="어른스러움의 프랑스 보르도 와인로드 10일"
                fontWeight="normal"
                fontSize="24px"
                marginBotton="5px"
              />
              <HashStyle fontSize="19px">
                #프랑스 #보르도 #생테밀리옹 #메독 #꼬냑 #라로셀 #투르 #르망 #몽생미셀 #파리
                #고성호텔 #몽생미셀 #와인 #샴페인 #와이너리 #스파클링 와인
              </HashStyle>
              <PriceStyle fontSize="29px">{`${Number(7490000).toLocaleString()}원`}</PriceStyle>
            </TxtAreaStyle>
          </ProductCard>
        </ProductListStyle>
      </Inner>
    </Section>
  )
}

export default Curation

const ProductListStyle = styled.ul`
  display: flex;
  gap: 29px;
`
