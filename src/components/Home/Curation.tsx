import Inner from '@src/layout/Inner'
import Section from '@src/layout/Section'
import { COLORS, FONTSIZE } from '@src/styles/root'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Button from '../common/Button'
import CardTypeItem from '../common/CardTypeItem'
import Title from '../common/Title'
import { HiOutlineRefresh } from 'react-icons/hi'
import { MdEditCalendar } from 'react-icons/md'
import { getProducts } from '@src/api/product'
import { useNavigate } from 'react-router-dom'
import { IProductContent } from '@src/interfaces/product'
import CurationSelectBtn from './CurationSelectBtn'
import { useGetCurationListQuery } from '@src/reduxStore/api/curationApiSlice'

interface CurationValue {
  season: string | null
  district: string | null
  theme: string | null
}

const seasonOptions = [
  {
    id: 1,
    icon: '/images/icons/지금.png',
    value: '지금',
    arrow: '/images/icons/bottom-arrow.png',
  },
  {
    id: 2,
    icon: '/images/icons/봄에.png',
    value: '봄에',
  },
  {
    id: 3,
    icon: '/images/icons/여름에.png',
    value: '여름에',
  },
  { id: 4, icon: '/images/icons/가을에.png', value: '가을에' },
  {
    id: 5,
    icon: '/images/icons/겨울에.png',
    value: '겨울에',
  },
]

const countryOptions = [
  {
    id: 1,
    icon: '/images/icons/동남아.png',
    value: '동남아',
    arrow: '/images/icons/bottom-arrow.png',
  },
  {
    id: 2,
    icon: '/images/icons/아시아.png',
    value: '아시아',
  },
  {
    id: 3,
    icon: '/images/icons/아메리카.png',
    value: '아메리카',
  },
  { id: 4, icon: '/images/icons/아프리카.png', value: '아프리카' },
  { id: 5, icon: '/images/icons/중동.png', value: '중동' },
  { id: 6, icon: '/images/icons/유럽.png', value: '유럽' },
]

const themeOptions = [
  {
    id: 1,
    icon: '/images/icons/문화탐방.png',
    value: '와인',
    arrow: '/images/icons/bottom-arrow.png',
  },
  {
    id: 2,
    icon: '/images/icons/문화탐방.png',
    value: '문화탐방',
  },
  {
    id: 3,
    icon: '/images/icons/성지순례.png',
    value: '성지순례',
  },
  {
    id: 4,
    icon: '/images/icons/봉사활동.png',
    value: '봉사활동',
  },
  {
    id: 5,
    icon: '/images/icons/트레킹.png',
    value: '트레킹',
  },
  {
    id: 6,
    icon: '/images/icons/골프.png',
    value: '골프',
  },
  {
    id: 7,
    icon: '/images/icons/쇼핑.png',
    value: '쇼핑',
  },
]

const Curation = () => {
  const [products, setProducts] = useState<IProductContent[]>([])
  const [page, setPage] = useState<number>(1)
  const [seasonValue, setSeasonValue] = useState(seasonOptions[0])
  const [countryValue, setCountryValue] = useState(countryOptions[0])
  const [themeValue, setThemeValue] = useState(themeOptions[0])

  const [curationValue, setCurationValue] = useState<CurationValue>({
    season: null,
    district: null,
    theme: null,
  })
  const { season, district, theme } = curationValue

  const { data: curationList, isLoading } = useGetCurationListQuery(
    { season, district, theme, page },
    { refetchOnMountOrArgChange: true }
  )

  if (isLoading) <>Loading</>
  const curations = curationList && curationList.content
  const hasProducts = curations && curations.length > 0
  console.log('curationList', curationList)

  return (
    <Section>
      <Inner>
        <Title
          titleType="h2"
          title="어디로 여행을 떠날까요?"
          fontSize={FONTSIZE.fz32}
          margin="0 0 80px"
        />
      </Inner>
      <SelectBoxStyle>
        <Inner>
          <CurationBoxStyle>
            <FirstSpan>나는</FirstSpan>
            <CurationSelectBtn
              options={seasonOptions}
              currentValue={seasonValue}
              setCurrentValue={setSeasonValue}
              fontSize="30px"
              borderRadius="5px"
            />
            <CurationSelectBtn
              options={countryOptions}
              currentValue={countryValue}
              setCurrentValue={setCountryValue}
              fontSize="30px"
              borderRadius="5px"
            />
            <SecondSpan>에서</SecondSpan>
            <CurationSelectBtn
              options={themeOptions}
              currentValue={themeValue}
              setCurrentValue={setThemeValue}
              fontSize="30px"
              borderRadius="5px"
            />
            <ThirdSpan>여행을 하고 싶어요.</ThirdSpan>
          </CurationBoxStyle>

          <ButtonsStyle>
            <Button buttonType="borderGray" color={COLORS.c1b1b1b}>
              다른 여행 찾기
              <HiOutlineRefresh />
            </Button>
            <Button
              buttonType="transparent"
              bgColor={COLORS.primary}
              color={COLORS.white}
              onClick={() =>
                setCurationValue({
                  season: seasonValue.value,
                  district: countryValue.value,
                  theme: themeValue.value,
                })
              }
            >
              여행 큐레이션 받기
              <MdEditCalendar />
            </Button>
          </ButtonsStyle>
          <ProductListStyle>
            {hasProducts ? (
              <>
                {curations.map((product) => (
                  <CardTypeItem
                    key={product.productId}
                    item={product}
                    cardType="cardType"
                    imgWidth="100%"
                    priceBottom="30px"
                    priceColor={COLORS.c1b1b1b}
                  />
                ))}
              </>
            ) : (
              <></>
            )}
          </ProductListStyle>
        </Inner>
      </SelectBoxStyle>
      {/* <PreferBannerStyle>
          <Title
            titleType="h2"
            title="내 취향에 맞는 여행을 더 자세히 알아보고 싶다면?"
            fontSize="26px"
          />
          <Button buttonType="transparent" onClick={() => navigate('/survey')}>
            자세한 여행 큐레이션 받기
          </Button>
        </PreferBannerStyle> */}
    </Section>
  )
}

export default Curation

const ProductListStyle = styled.ul`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  gap: 29px;
  margin-bottom: 50px;
`

const SelectBoxStyle = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(59, 161, 255, 0.08);
  padding: 80px 0;
  font-weight: 500;
  font-size: 28px;
  line-height: 150%;
`

const FirstSpan = styled.span``
const SecondSpan = styled.span`
  margin-left: 22px;
  margin-right: 2px;
`
const ThirdSpan = styled.span`
  margin-left: 22px;
`

const CurationBoxStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 28px 0;
  width: 100%;
  height: 107px;
  background: #c5dff9;
  box-shadow: 0px 13.0578px 28.7272px rgba(0, 0, 0, 0.08);
  margin-bottom: 73px;
  ${FirstSpan},${SecondSpan},${ThirdSpan} {
    font-weight: 500;
    font-size: 28px;
    line-height: 150%;
  }
`

const ButtonsStyle = styled.div`
  display: flex;
  gap: 13px;
  justify-content: center;
  margin-bottom: 76px;

  button {
    border-radius: 50px;
    padding: 14px 24px;
    height: auto;
    display: flex;
    align-items: center;
    svg {
      font-size: 20px;
      margin-left: 8px;
    }
  }
`

const PreferBannerStyle = styled.div`
  border: 1px solid ${COLORS.c1b1b1b};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 42px 0;

  button {
    border-radius: 50px;
    background-color: ${COLORS.primary};
    padding: 14px 24px;
    color: ${COLORS.white};
    height: auto;
    margin-left: 30px;
  }
`
