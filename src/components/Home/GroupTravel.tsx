import Inner from '@src/layout/Inner'
import Section from '@src/layout/Section'
import React from 'react'
import styled from 'styled-components'
import ProductCard, {
  HashStyle,
  ImgAreaStyle,
  PriceStyle,
  TxtAreaStyle,
} from '../common/ProductCard'
import Title from '../common/Title'

const GroupTravel = () => {
  return (
    <Section>
      <Inner>
        <Title titleType="h2" fontSize="32px" title="내 취향대로 여행" marginBotton="66px" />
        <ProductListStyle>
          <ProductCard cardType="productCard" width="25%" minHeight="500px">
            <ImgAreaStyle>
              <img src="https://cdn.imweb.me/thumbnail/20220419/31ca7e26eb12a.png" alt="" />
            </ImgAreaStyle>
            <TxtAreaStyle>
              <Title
                titleType="h3"
                title="괌 4박 5일"
                fontWeight="normal"
                fontSize="22px"
                marginBotton="5px"
              />
              <HashStyle fontSize="17px">#트롤링낚시 #롯데 #패밀리스윗</HashStyle>
              <PriceStyle fontSize="26px">{`${Number(2135000).toLocaleString()}원`}</PriceStyle>
            </TxtAreaStyle>
          </ProductCard>
          <ProductCard cardType="productCard" width="25%" minHeight="500px">
            <ImgAreaStyle>
              <img src="https://cdn.imweb.me/thumbnail/20220419/31ca7e26eb12a.png" alt="" />
            </ImgAreaStyle>
            <TxtAreaStyle>
              <Title
                titleType="h3"
                title="괌 4박 5일"
                fontWeight="normal"
                fontSize="22px"
                marginBotton="5px"
              />
              <HashStyle fontSize="17px">#트롤링낚시 #롯데 #패밀리스윗</HashStyle>
              <PriceStyle fontSize="26px">{`${Number(2135000).toLocaleString()}원`}</PriceStyle>
            </TxtAreaStyle>
          </ProductCard>
          <ProductCard cardType="productCard" width="25%" minHeight="500px">
            <ImgAreaStyle>
              <img src="https://cdn.imweb.me/thumbnail/20220419/31ca7e26eb12a.png" alt="" />
            </ImgAreaStyle>
            <TxtAreaStyle>
              <Title
                titleType="h3"
                title="괌 4박 5일"
                fontWeight="normal"
                fontSize="22px"
                marginBotton="5px"
              />
              <HashStyle fontSize="17px">#트롤링낚시 #롯데 #패밀리스윗</HashStyle>
              <PriceStyle fontSize="26px">{`${Number(2135000).toLocaleString()}원`}</PriceStyle>
            </TxtAreaStyle>
          </ProductCard>
          <ProductCard cardType="productCard" width="25%" minHeight="500px">
            <ImgAreaStyle>
              <img src="https://cdn.imweb.me/thumbnail/20220419/31ca7e26eb12a.png" alt="" />
            </ImgAreaStyle>
            <TxtAreaStyle>
              <Title
                titleType="h3"
                title="괌 4박 5일"
                fontWeight="normal"
                fontSize="22px"
                marginBotton="5px"
              />
              <HashStyle fontSize="17px">#트롤링낚시 #롯데 #패밀리스윗</HashStyle>
              <PriceStyle fontSize="26px">{`${Number(2135000).toLocaleString()}원`}</PriceStyle>
            </TxtAreaStyle>
          </ProductCard>
        </ProductListStyle>
      </Inner>
    </Section>
  )
}

export default GroupTravel

const ProductListStyle = styled.ul`
  display: flex;
  gap: 13px;
`
