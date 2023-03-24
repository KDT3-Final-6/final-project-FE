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

const GroupTravel = () => {
  return (
    <Section>
      <Inner>
        <Title titleType="h2" fontSize="32px" title="내 취향대로 여행" marginBotton="66px" />
        <ProductListStyle>
          <ProductCard cardType="cardType" imgHeight="100%" minHeight="500px">
            <Link to={PATH.PRODUCT_DETAIL}>
              <ImgAreaStyle>
                <img src="https://cdn.imweb.me/thumbnail/20220419/31ca7e26eb12a.png" alt="" />
              </ImgAreaStyle>
              <TxtAreaStyle isCardType={true}>
                <Title
                  titleType="h3"
                  title="괌 4박 5일"
                  fontWeight="normal"
                  fontSize="22px"
                  marginBotton="5px"
                />
                <HashStyle fontSize="17px" color={COLORS.hashGrey}>
                  #트롤링낚시 #롯데 #패밀리스윗
                </HashStyle>
                <PriceStyle fontSize="26px">{`${Number(2135000).toLocaleString()}원`}</PriceStyle>
              </TxtAreaStyle>
            </Link>
          </ProductCard>
          <ProductCard cardType="cardType" imgHeight="100%" minHeight="500px">
            <Link to={PATH.PRODUCT_DETAIL}>
              <ImgAreaStyle>
                <img src="https://cdn.imweb.me/thumbnail/20220419/31ca7e26eb12a.png" alt="" />
              </ImgAreaStyle>
              <TxtAreaStyle isCardType={true}>
                <Title
                  titleType="h3"
                  title="괌 4박 5일"
                  fontWeight="normal"
                  fontSize="22px"
                  marginBotton="5px"
                />
                <HashStyle fontSize="17px" color={COLORS.hashGrey}>
                  #트롤링낚시 #롯데 #패밀리스윗
                </HashStyle>
                <PriceStyle fontSize="26px">{`${Number(2135000).toLocaleString()}원`}</PriceStyle>
              </TxtAreaStyle>
            </Link>
          </ProductCard>
          <ProductCard cardType="cardType" imgHeight="100%" minHeight="500px">
            <Link to={PATH.PRODUCT_DETAIL}>
              <ImgAreaStyle>
                <img src="https://cdn.imweb.me/thumbnail/20220419/31ca7e26eb12a.png" alt="" />
              </ImgAreaStyle>
              <TxtAreaStyle isCardType={true}>
                <Title
                  titleType="h3"
                  title="괌 4박 5일"
                  fontWeight="normal"
                  fontSize="22px"
                  marginBotton="5px"
                />
                <HashStyle fontSize="17px" color={COLORS.hashGrey}>
                  #트롤링낚시 #롯데 #패밀리스윗
                </HashStyle>
                <PriceStyle fontSize="26px">{`${Number(2135000).toLocaleString()}원`}</PriceStyle>
              </TxtAreaStyle>
            </Link>
          </ProductCard>
          <ProductCard cardType="cardType" imgHeight="100%" minHeight="500px">
            <Link to={PATH.PRODUCT_DETAIL}>
              <ImgAreaStyle>
                <img src="https://cdn.imweb.me/thumbnail/20220419/31ca7e26eb12a.png" alt="" />
              </ImgAreaStyle>
              <TxtAreaStyle isCardType={true}>
                <Title
                  titleType="h3"
                  title="괌 4박 5일"
                  fontWeight="normal"
                  fontSize="22px"
                  marginBotton="5px"
                />
                <HashStyle fontSize="17px" color={COLORS.hashGrey}>
                  #트롤링낚시 #롯데 #패밀리스윗
                </HashStyle>
                <PriceStyle fontSize="26px">{`${Number(2135000).toLocaleString()}원`}</PriceStyle>
              </TxtAreaStyle>
            </Link>
          </ProductCard>
        </ProductListStyle>
      </Inner>
    </Section>
  )
}

export default GroupTravel

const ProductListStyle = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 13px;
`
