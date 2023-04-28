import Inner from '@src/layout/Inner'
import { COLORS, FONTSIZE } from '@src/styles/root'
import { useState } from 'react'
import styled from 'styled-components'
import { HiOutlineRefresh } from 'react-icons/hi'
import { MdEditCalendar } from 'react-icons/md'
import { useGetCurationListQuery } from '@src/reduxStore/api/curationApiSlice'
import {
  CurationValue,
  seasonOptions,
  countryOptions,
  themeOptions,
} from '@components/Home/Curation'
import { Swiper, SwiperSlide } from 'swiper/react'
import Title from '@src/components/common/Title'
import CurationSelectBtn from '../CurationSelectBtn'
import Button from '@src/components/common/Button'
import MProductCard from './MProductCard'

// Import Swiper styles
import 'swiper/css' //basic
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'

const MCuration = () => {
  const [page, setPage] = useState<number>(1)
  const [seasonValue, setSeasonValue] = useState(seasonOptions[0])
  const [countryValue, setCountryValue] = useState(countryOptions[0])
  const [themeValue, setThemeValue] = useState(themeOptions[0])
  const [isShow, setIsShow] = useState(false)

  const [curationValue, setCurationValue] = useState<CurationValue>({
    season: null,
    district: null,
    theme: null,
  })
  const { season, district, theme } = curationValue

  const { data: curationList, isLoading } = useGetCurationListQuery(
    { season, district, theme, page },
    {
      refetchOnMountOrArgChange: true,
      skip: season === null || district === null || theme === null,
    }
  )

  if (isLoading) <>Loading</>
  const curations = curationList && curationList.content
  const hasProducts = curations && curations.length > 0

  const handleRefresh = () => {
    setIsShow(false)
    setCurationValue({ season: null, district: null, theme: null })
  }

  const handleCurationRequest = () => {
    setIsShow(true)
    setCurationValue({
      season: seasonValue.value,
      district: countryValue.value,
      theme: themeValue.value,
    })
  }
  return (
    <ContainerStyle isShow={isShow} hasProducts={hasProducts}>
      <Inner width="90%">
        <Title
          titleType="h2"
          title="어디로 여행을 떠날까요?"
          fontSize={FONTSIZE.fz30}
          margin="0 0 80px"
        />
      </Inner>
      <SelectBoxStyle>
        <Inner width="90%">
          <SelectRowStyle>
            <FirstTextStyle borderRadius="6px 0px 0px 6px">나는</FirstTextStyle>
            <CurationSelectBtn
              options={seasonOptions}
              currentValue={seasonValue}
              setCurrentValue={setSeasonValue}
              fontSize="20px"
              borderRadius="0px 6px 6px 0px"
              width="100%"
              marginLeft="0"
            />
          </SelectRowStyle>
          <SelectRowStyle>
            <CurationSelectBtn
              options={countryOptions}
              currentValue={countryValue}
              setCurrentValue={setCountryValue}
              fontSize="20px"
              borderRadius="6px 0px 0px 6px"
              width="100%"
              marginLeft="0"
            />
            <SecondTextStyle borderRadius="0px 6px 6px 0px">에서</SecondTextStyle>
          </SelectRowStyle>
          <SelectRowStyle>
            <CurationSelectBtn
              options={themeOptions}
              currentValue={themeValue}
              setCurrentValue={setThemeValue}
              fontSize="20px"
              borderRadius="6px 0px 0px 6px"
              width="100%"
              marginLeft="0"
            />
            <ThirdTextStyle borderRadius="0px 6px 6px 0px">여행을 하고 싶어요.</ThirdTextStyle>
          </SelectRowStyle>
          <ButtonsStyle>
            <Button
              buttonType="borderGray"
              bgColor={COLORS.white}
              color={COLORS.c1b1b1b}
              onClick={handleRefresh}
            >
              다른 여행 찾기
              <HiOutlineRefresh />
            </Button>
            <Button
              buttonType="transparent"
              bgColor={COLORS.primary}
              color={COLORS.white}
              onClick={handleCurationRequest}
            >
              여행 큐레이션 받기
              <MdEditCalendar />
            </Button>
          </ButtonsStyle>
        </Inner>
      </SelectBoxStyle>
      {isShow ? (
        <>
          {hasProducts ? (
            <ProductListSwiperStyle slidesPerView={'auto'} spaceBetween={16}>
              {curations.map((product) => (
                <CurationSlideStyle key={product.productId}>
                  <MProductCard key={product.productId} item={product} cardType="" />
                </CurationSlideStyle>
              ))}
            </ProductListSwiperStyle>
          ) : (
            <NoItemsStyle>해당 상품이 존재하지 않습니다.</NoItemsStyle>
          )}
        </>
      ) : (
        <></>
      )}
    </ContainerStyle>
  )
}

export default MCuration

const ContainerStyle = styled.div<{ isShow: boolean; hasProducts: boolean | undefined }>`
  min-width: 320px;
  padding-top: 33px;
  padding-bottom: ${({ isShow, hasProducts }) => (isShow && hasProducts ? '320px' : '35px')};
`

const SelectBoxStyle = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(59, 161, 255, 0.08);
  padding-top: 33px;
  padding-bottom: 99px;
  margin-top: -60px;
`

const SelectRowStyle = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  font-size: 18px;
  line-height: 150%;
  height: 50px;
  margin-bottom: 13px;
`

const FirstTextStyle = styled.span<{ borderRadius: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 87px;
  height: 100%;
  background: #c5dff9;
  border-radius: ${({ borderRadius }) => borderRadius};
`

const SecondTextStyle = styled.span<{ borderRadius: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 87px;
  height: 100%;
  background: #c5dff9;
  border-radius: ${({ borderRadius }) => borderRadius};
`

const ThirdTextStyle = styled.span<{ borderRadius: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 166px;
  height: 100%;
  background: #c5dff9;
  border-radius: ${({ borderRadius }) => borderRadius};
`

const ButtonsStyle = styled.div`
  display: flex;
  justify-content: center;
  gap: 4px;
  width: 100%;
  height: 44px;
  padding-top: 17px;
  margin-bottom: 30px;

  button {
    padding: 14px 15px 14px 20px;
    border-radius: 999px;
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    svg {
      font-size: 14px;
      margin-left: 8px;
    }
    :hover {
      box-shadow: ${COLORS.boxShowdow};
    }
  }
`

const ProductListSwiperStyle = styled(Swiper)`
  position: relative;
  left: 5%;
  top: -70px; //-330px;
  height: 360px;
`

const CurationSlideStyle = styled(SwiperSlide)`
  width: 264px;
  height: 360px;
  border-radius: 12px;
  background-color: white;
`

const NoItemsStyle = styled.div`
  position: absolute;
  top: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 1.25rem;
`
