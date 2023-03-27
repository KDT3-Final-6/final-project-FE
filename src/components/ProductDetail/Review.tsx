import { COLORS, FONTSIZE, FONTWEGHT } from '@src/styles/root'
import React from 'react'
import styled from 'styled-components'
import StarRateWrapGet from '../common/StarRateWrapGet'

type Props = {}

const Review = (props: Props) => {
  return (
    <ReviewStyle>
      <ReviewInfoStyle>
        <span>Jakyung</span>
        <div style={{ display: 'flex', gap: '5px' }}>
          <StarRateWrapGet AVR_RATE={100} />
          <span>5.0</span>
        </div>
      </ReviewInfoStyle>
      <ReviewDetailStyle>
        <q>
          하와이에서 가장 아름다운 골프 플레이스로 정글에서 게임을 즐기는 느낌의 이색적인 코스
          최고!!
        </q>
        <button>자세히 보기 {'>'}</button>
      </ReviewDetailStyle>
    </ReviewStyle>
  )
}

const ReviewStyle = styled.li`
  width: 380px;
  height: 298px;
  display: flex;
  align-items: center;
  border-radius: 12px;
  flex-direction: column;
  border: 1px solid ${COLORS.cd9d9d9};
  &:hover {
    background-color: ${COLORS.c3ba1ff};
    color: ${COLORS.white};
    button {
      color: ${COLORS.white};
    }
  }
`

const ReviewInfoStyle = styled.div`
  padding: 20px 30px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 25%;
  font-size: ${FONTSIZE.fz24};
  border-bottom: 1px solid ${COLORS.cd9d9d9};
`

const ReviewDetailStyle = styled.div`
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  q {
    font-size: ${FONTSIZE.fz24};
    line-height: 36px;
  }
  button {
    font-size: ${FONTSIZE.fz20};
    text-align: right;
  }
`

export default Review
