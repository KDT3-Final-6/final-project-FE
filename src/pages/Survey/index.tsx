import React, { useState } from 'react'
import Image from '@src/components/common/Image'
import styled from 'styled-components'
import { COLORS, FONTSIZE, FONTWEGHT } from '@src/styles/root'
import Inner from '@src/layout/Inner'
import Button from '@src/components/common/Button'
import Item from '@src/components/Survey/Item'
import Banner from '@src/components/Survey/Banner'

interface Props {}

const surveyItems = {
  age: [
    { id: 1, name: '2030', imgSrc: 'age-1.jpg' },
    { id: 2, name: '4050', imgSrc: 'age-2.jpg' },
    { id: 3, name: '6070', imgSrc: 'age-3.jpg' },
    { id: 4, name: '그 외', imgSrc: 'age-4.jpg' },
  ],
  gender: [
    { id: 5, name: '여자', imgSrc: 'woman.jpg' },
    { id: 6, name: '남자', imgSrc: 'man.jpg' },
  ],
  companion: [
    { id: 7, name: '부부', imgSrc: 'couple.jpg' },
    { id: 8, name: '친구', imgSrc: 'friends.jpg' },
    { id: 9, name: '동호회', imgSrc: 'team.jpg' },
    { id: 10, name: '직장동료', imgSrc: 'company.jpg' },
    { id: 11, name: '가족', imgSrc: 'family.jpg' },
    { id: 12, name: '그 외', imgSrc: 'etc.jpg' },
  ],
  religion: [
    { id: 13, name: '불교', imgSrc: 'buddism.jpg' },
    { id: 14, name: '기독교', imgSrc: 'catholic.jpg' },
    { id: 15, name: '그 외', imgSrc: 'judaism.jpg' },
    { id: 16, name: '무교', imgSrc: 'none-rel.jpg' },
  ],
  theme: [
    { id: 17, name: '쇼핑', imgSrc: 'shopping.jpg' },
    { id: 18, name: '와인', imgSrc: 'wine.jpg' },
    { id: 19, name: '문화탐방', imgSrc: 'culture.jpg' },
    { id: 20, name: '성지순례', imgSrc: 'judaism.jpg' },
    { id: 21, name: '봉사활동', imgSrc: 'volunteer.jpg' },
    { id: 22, name: '트레킹', imgSrc: 'tracking.jpg' },
    { id: 23, name: '골프', imgSrc: 'golf.jpg' },
    { id: 24, name: '그 외', imgSrc: 'hobby.jpg' },
  ],
  season: [
    { id: 25, name: '봄', imgSrc: 'spring.jpg' },
    { id: 26, name: '여름', imgSrc: 'summer.jpg' },
    { id: 27, name: '가을', imgSrc: 'autumn.jpg' },
    { id: 28, name: '겨울', imgSrc: 'winter.jpg' },
  ],
}

const Survey = (props: Props) => {
  const [survey, setSurvey] = useState(0)
  return (
    <div style={{ marginBottom: '100px' }}>
      <Banner />
      <section>
        <Inner>
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
            />
          )}
          {survey === 1 && (
            <Item
              question={surveyItems.gender}
              title="당신은 남자인가요, 여자인가요?"
              setSurvey={setSurvey}
              survey={survey}
            />
          )}
          {survey === 2 && (
            <Item
              question={surveyItems.companion}
              title="여행을 함께하는 동행자의 유형은?"
              setSurvey={setSurvey}
              survey={survey}
            />
          )}
          {survey === 3 && (
            <Item
              question={surveyItems.religion}
              title="당신의 종교는?"
              setSurvey={setSurvey}
              survey={survey}
            />
          )}
          {survey === 4 && (
            <Item
              question={surveyItems.theme}
              title="당신의 취미는?"
              setSurvey={setSurvey}
              survey={survey}
            />
          )}
          {survey === 5 && (
            <Item
              question={surveyItems.season}
              title="여행을 떠나고 싶은 시기는?"
              setSurvey={setSurvey}
              survey={survey}
            />
          )}
          {survey === 6 && <div>결과 보러 가기</div>}
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
