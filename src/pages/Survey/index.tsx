import React, { useState } from 'react'
import styled from 'styled-components'
import { COLORS, FONTSIZE, FONTWEGHT } from '@src/styles/root'
import Inner from '@src/layout/Inner'
import Item from '@src/components/Survey/Item'
import Banner from '@src/components/Survey/Banner'
import surveyItems from '@src/constants/surveyItems'
import { useForm, FieldValues } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { postSurvey } from '@src/api/survey'
import { useNavigate } from 'react-router-dom'

const Survey = () => {
  const navigate = useNavigate()
  const [survey, setSurvey] = useState(0)

  const schema = yup.object().shape({
    surveyGroup: yup.string(),
    surveyGender: yup.string(),
    surveyCompanion: yup.string(),
    surveyReligion: yup.string(),
    surveyHobby: yup.string(),
    surveySeason: yup.string(),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = async (data: FieldValues) => {
    await postSurvey(data)
    navigate('/result')
  }

  return (
    <div style={{ marginBottom: '100px' }}>
      <Banner />
      <section>
        <Inner>
          <form onSubmit={handleSubmit(onSubmit)}>
            {survey < 6 && (
              <CourseStyle>
                <span>
                  {6 - survey - 1}개 문항이 더 남았어요! ({survey + 1}/6)
                </span>
                <ProgressBarStyle>
                  <StateBarStyle survey={survey}></StateBarStyle>
                </ProgressBarStyle>
              </CourseStyle>
            )}
            {survey === 0 && (
              <Item
                question={surveyItems.age}
                title="당신의 연령대는?"
                setSurvey={setSurvey}
                survey={survey}
                register={register}
                handleSubmit={handleSubmit}
                onSubmit={onSubmit}
                type="surveyGroup"
              />
            )}
            {survey === 1 && (
              <Item
                question={surveyItems.gender}
                title="당신은 남자인가요, 여자인가요?"
                setSurvey={setSurvey}
                survey={survey}
                register={register}
                handleSubmit={handleSubmit}
                onSubmit={onSubmit}
                type="surveyGender"
              />
            )}
            {survey === 2 && (
              <Item
                question={surveyItems.companion}
                title="여행을 함께하는 동행자의 유형은?"
                setSurvey={setSurvey}
                survey={survey}
                register={register}
                handleSubmit={handleSubmit}
                onSubmit={onSubmit}
                type="surveyCompanion"
              />
            )}
            {survey === 3 && (
              <Item
                question={surveyItems.religion}
                title="당신의 종교는?"
                setSurvey={setSurvey}
                survey={survey}
                register={register}
                handleSubmit={handleSubmit}
                onSubmit={onSubmit}
                type="surveyReligion"
              />
            )}
            {survey === 4 && (
              <Item
                question={surveyItems.theme}
                title="당신의 취미는?"
                setSurvey={setSurvey}
                survey={survey}
                register={register}
                handleSubmit={handleSubmit}
                onSubmit={onSubmit}
                type="surveyHobby"
              />
            )}
            {survey === 5 && (
              <Item
                question={surveyItems.season}
                title="여행을 떠나고 싶은 시기는?"
                setSurvey={setSurvey}
                survey={survey}
                register={register}
                handleSubmit={handleSubmit}
                onSubmit={onSubmit}
                type="surveySeason"
              />
            )}
          </form>
        </Inner>
      </section>
    </div>
  )
}

const CourseStyle = styled.div`
  margin: 117px auto 77px auto;
  width: 669px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 17px;
  span {
    font-size: ${FONTSIZE.fz20};
  }
`

const ProgressBarStyle = styled.div`
  width: 669px;
  height: 18px;
  border-radius: 20px;
  background-color: ${COLORS.cededed};
`

const StateBarStyle = styled.div<{ survey: number }>`
  width: ${({ survey }) => ((survey + 1) / 6) * 100}%;
  height: 100%;
  border-radius: 20px;
  background-color: ${COLORS.primary};
`

export default Survey
