import PATH from '@src/constants/pathConst'
import Inner from '@src/layout/Inner'
import Section from '@src/layout/Section'
import COLORS from '@src/styles/root'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ProductCard, {
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
          <ProductCard cardType="cardType" imgWidth="100%" minHeight="500px">
            <Link to={PATH.PRODUCT_DETAIL} target="_blank">
              <ImgAreaStyle>
                <img src="https://cdn.imweb.me/thumbnail/20220422/e2416c9e52bf5.jpg" alt="" />
              </ImgAreaStyle>
              <TxtAreaStyle isCardType={true}>
                <Title
                  titleType="h3"
                  title="어른스러움의 프랑스 보르도 와인로드 10일"
                  fontWeight="normal"
                  fontSize="24px"
                  marginBotton="5px"
                />
                <HashStyle fontSize="19px" color={COLORS.hashGrey}>
                  #프랑스 #보르도 #생테밀리옹 #메독 #꼬냑 #라로셀 #투르 #르망 #몽생미셀 #파리
                  #고성호텔 #몽생미셀 #와인 #샴페인 #와이너리 #스파클링 와인
                </HashStyle>
                <PriceStyle fontSize="29px">{`${Number(7490000).toLocaleString()}원`}</PriceStyle>
              </TxtAreaStyle>
            </Link>
          </ProductCard>
          <ProductCard cardType="cardType" imgWidth="100%" minHeight="500px">
            <Link to={PATH.PRODUCT_DETAIL} target="_blank">
              <ImgAreaStyle>
                <img src="https://cdn.imweb.me/thumbnail/20220422/e2416c9e52bf5.jpg" alt="" />
              </ImgAreaStyle>
              <TxtAreaStyle isCardType={true}>
                <Title
                  titleType="h3"
                  title="어른스러움의 프랑스 보르도 와인로드 10일"
                  fontWeight="normal"
                  fontSize="24px"
                  marginBotton="5px"
                />
                <HashStyle fontSize="19px" color={COLORS.hashGrey}>
                  #프랑스 #보르도 #생테밀리옹 #메독 #꼬냑 #라로셀 #투르 #르망 #몽생미셀 #파리
                  #고성호텔 #몽생미셀 #와인 #샴페인 #와이너리 #스파클링 와인
                </HashStyle>
                <PriceStyle fontSize="29px">{`${Number(7490000).toLocaleString()}원`}</PriceStyle>
              </TxtAreaStyle>
            </Link>
          </ProductCard>
          <ProductCard cardType="cardType" imgWidth="100%" minHeight="500px">
            <Link to={PATH.PRODUCT_DETAIL} target="_blank">
              <ImgAreaStyle>
                <img src="https://cdn.imweb.me/thumbnail/20220422/e2416c9e52bf5.jpg" alt="" />
              </ImgAreaStyle>
              <TxtAreaStyle isCardType={true}>
                <Title
                  titleType="h3"
                  title="어른스러움의 프랑스 보르도 와인로드 10일"
                  fontWeight="normal"
                  fontSize="24px"
                  marginBotton="5px"
                />
                <HashStyle fontSize="19px" color={COLORS.hashGrey}>
                  #프랑스 #보르도 #생테밀리옹 #메독 #꼬냑 #라로셀 #투르 #르망 #몽생미셀 #파리
                  #고성호텔 #몽생미셀 #와인 #샴페인 #와이너리 #스파클링 와인
                </HashStyle>
                <PriceStyle fontSize="29px">{`${Number(7490000).toLocaleString()}원`}</PriceStyle>
              </TxtAreaStyle>
            </Link>
          </ProductCard>
        </ProductListStyle>
      </Inner>
    </Section>
  )
}

export default Curation

const ProductListStyle = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 29px;
`
