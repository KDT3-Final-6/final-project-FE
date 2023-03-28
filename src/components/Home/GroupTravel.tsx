import { IProduct } from '@src/interfaces/product'
import Inner from '@src/layout/Inner'
import Section from '@src/layout/Section'
import { COLORS, FONTSIZE, FONTWEGHT } from '@src/styles/root'
import React from 'react'
import styled from 'styled-components'
import CardTypeItem from '../common/CardTypeItem'
import CheckItem from '../common/CheckItem'
import Title from '../common/Title'

const GroupTravel = () => {
  const products: IProduct[] = [
    {
      id: 1,
      title: '괌 4박 5일',
      image: 'https://cdn.imweb.me/thumbnail/20220419/31ca7e26eb12a.png',
      hashs: ['트롤링낚시', '롯데', '패밀리스윗'],
      price: 2135000,
      heart: true,
    },
    {
      id: 2,
      title: '괌 4박 5일',
      image: 'https://cdn.imweb.me/thumbnail/20220419/31ca7e26eb12a.png',
      hashs: ['트롤링낚시', '롯데', '패밀리스윗'],
      price: 2135000,
      heart: true,
    },
    {
      id: 3,
      title: '괌 4박 5일',
      image: 'https://cdn.imweb.me/thumbnail/20220419/31ca7e26eb12a.png',
      hashs: ['트롤링낚시', '롯데', '패밀리스윗'],
      price: 2135000,
      heart: false,
    },
    {
      id: 4,
      title: '괌 4박 5일',
      image: 'https://cdn.imweb.me/thumbnail/20220419/31ca7e26eb12a.png',
      hashs: ['트롤링낚시', '롯데', '패밀리스윗'],
      price: 2135000,
      heart: false,
    },
  ]
  return (
    <Section>
      <Inner>
        <Title titleType="h2" title="그룹별 여행" fontSize={FONTSIZE.fz32} margin="0 0 66px" />
        <TabStyle>
          <div>
            <GroupStyle>
              <Title titleType="h3" title="그룹" fontSize="26px" fontWeight={FONTWEGHT.fw600} />
              <WrapStyle>
                <CheckItem
                  checkType="tabType"
                  type="radio"
                  id="5070"
                  name="group"
                  labelName="5070끼리"
                  width="138px"
                />
                <CheckItem
                  checkType="tabType"
                  type="radio"
                  id="males"
                  name="group"
                  labelName="남자끼리"
                  width="122px"
                />
                <CheckItem
                  checkType="tabType"
                  type="radio"
                  id="females"
                  name="group"
                  labelName="여자끼리"
                  width="122px"
                />
                <CheckItem
                  checkType="tabType"
                  type="radio"
                  id="family"
                  name="group"
                  labelName="가족끼리"
                  width="122px"
                />
                <CheckItem
                  checkType="tabType"
                  type="radio"
                  id="anybody"
                  name="group"
                  labelName="누구든지"
                  width="122px"
                />
              </WrapStyle>
            </GroupStyle>
            <ConceptStyle>
              <Title titleType="h3" title="컨셉" fontSize="26px" fontWeight={FONTWEGHT.fw600} />
              <WrapStyle>
                <CheckItem
                  checkType="tabType"
                  type="checkbox"
                  id="shopping"
                  labelName="쇼핑"
                  width="82px"
                />
                <CheckItem
                  checkType="tabType"
                  type="checkbox"
                  id="wine"
                  labelName="와인"
                  width="82px"
                />
                <CheckItem
                  checkType="tabType"
                  type="checkbox"
                  id="culture"
                  labelName="문화탐방"
                  width="122px"
                />
                <CheckItem
                  checkType="tabType"
                  type="checkbox"
                  id="amen"
                  labelName="성지순례"
                  width="122px"
                />
                <CheckItem
                  checkType="tabType"
                  type="checkbox"
                  id="volunteer"
                  labelName="봉사활동"
                  width="122px"
                />
                <CheckItem
                  checkType="tabType"
                  type="checkbox"
                  id="tracking"
                  labelName="트레킹"
                  width="102px"
                />
                <CheckItem
                  checkType="tabType"
                  type="checkbox"
                  id="golf"
                  labelName="골프"
                  width="82px"
                />
              </WrapStyle>
            </ConceptStyle>
          </div>
        </TabStyle>
        <ProductListStyle>
          {products.map((product) => (
            <CardTypeItem
              key={product.id}
              item={product}
              cardType="cardType"
              imgHeight="100%"
              height="460px"
              priceBottom="30px"
              priceColor={COLORS.c1b1b1b}
            />
          ))}
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

const TabStyle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 76px;

  > div {
    margin: 0 auto;
  }
`

const GroupStyle = styled.div`
  display: flex;

  h3 {
    height: 57px;
    display: flex;
    align-items: center;
  }

  label {
    width: 100%;
    font-size: ${FONTSIZE.fz19};
    font-weight: ${FONTWEGHT.fw500};
    color: ${COLORS.c7c7c7c};
  }
`

const WrapStyle = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  flex-wrap: wrap;
  padding-bottom: 10px;
  padding-left: 40px;
  margin-left: 40px;
  border-left: 1px solid ${COLORS.cd9d9d9};
`

const ConceptStyle = styled(GroupStyle)`
  ${WrapStyle} {
    padding-top: 10px;
    padding-bottom: 0;
  }
  h3 {
    margin-top: 10px;
  }
`
