import React, { useState, useEffect } from 'react'
import Banner from '@src/components/Survey/Banner'
import Title from '@src/components/common/Title'
import CategoryList from '@src/components/ProductPage/CategoryList'
import Inner from '@src/layout/Inner'
import EventBanner from '@components/Home/Banner'
import { FONTSIZE } from '@src/styles/root'
import {
  getAge,
  getCompanion,
  getGender,
  getHobby,
  getReligion,
  getSeason,
  getSurvey,
} from '@src/api/survey'
import { ISurvey } from '@src/interfaces/survey'
import { IProductContent } from '@src/interfaces/product'
import Button from '@src/components/common/Button'
import { MdEditCalendar } from 'react-icons/md'
import { COLORS } from '@src/styles/root'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useGetUserInfoQuery } from '@src/reduxStore/api/userApiSlice'
import { initUserInfo } from '@src/interfaces/user'

const Result = () => {
  const [result, setResult] = useState<ISurvey>()
  const [companion, setCompanion] = useState<IProductContent[]>([])
  const [gender, setGender] = useState<IProductContent[]>([])
  const [age, setAge] = useState<IProductContent[]>([])
  const [hobby, setHobby] = useState<IProductContent[]>([])
  const [religion, setReligion] = useState<IProductContent[]>([])
  const [season, setSeason] = useState<IProductContent[]>([])
  const { data } = useGetUserInfoQuery()
  const userInfo = data ? data : initUserInfo

  useEffect(() => {
    const fetchData = async () => {
      const data = await getSurvey()
      setResult(data)
      const companion = await getCompanion()
      setCompanion(companion.content)
      const gender = await getGender()
      setGender(gender.content)
      const age = await getAge()
      setAge(age.content)
      const hobby = await getHobby()
      setHobby(hobby.content)
      const religion = await getReligion()
      setReligion(religion.content)
      const season = await getSeason()
      setSeason(season.content)
    }
    fetchData()
  }, [])

  const navigate = useNavigate()

  return (
    <div>
      <Banner />
      <Inner padding="0 0 200px 0">
        <Title margin="80px 0 0 0" fontSize={FONTSIZE.fz30}>
          <h1>{userInfo?.memberName} 님을 위해서 선별해 봤어요.</h1>
        </Title>
        {age && age.length > 0 && <CategoryList title="또래들이 많이 찾는 여행" products={age} />}
        {companion && companion.length > 0 && (
          <CategoryList
            title={`${result?.surveyCompanion}와 떠나기 좋은 여행`}
            products={companion}
          />
        )}
        {gender && gender.length > 0 && (
          <CategoryList title={`${result?.surveyGender}끼리 떠나기 좋은 여행`} products={gender} />
        )}
        <EventBanner
          image="/images/banner/event_banner-5.png"
          marginTop="65px"
          marginBottom="100px"
        />
        {hobby && hobby.length > 0 && (
          <CategoryList title={`${result?.surveyHobby}를 좋아하신다면?`} products={hobby} />
        )}
        {religion && religion.length > 0 && (
          <CategoryList title={`${result?.surveyReligion} 여행은 어떨까요?`} products={religion} />
        )}
        {season && season.length > 0 && (
          <CategoryList title={`${result?.surveySeason}에 맞는 여행`} products={season} />
        )}
        <ButtonsStyle>
          <Button
            buttonType="transparent"
            bgColor={COLORS.primary}
            color={COLORS.white}
            onClick={() => navigate('/survey')}
          >
            여행 큐레이션 다시 받기
            <MdEditCalendar />
          </Button>
        </ButtonsStyle>
      </Inner>
    </div>
  )
}

const ButtonsStyle = styled.div`
  display: flex;
  gap: 13px;
  justify-content: center;
  margin-top: 76px;

  button {
    border-radius: 50px;
    padding: 14px 24px;
    height: auto;
    display: flex;
    align-items: center;
    &:hover {
      color: ${COLORS.c090909};
      border: ${COLORS.c090909};
      background-color: transparent;
    }
    svg {
      font-size: 20px;
      margin-left: 8px;
    }
  }
`

export default Result
