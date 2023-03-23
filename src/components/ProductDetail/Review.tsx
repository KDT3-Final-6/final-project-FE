import React from 'react'
import styled from 'styled-components'

type Props = {}

const Review = (props: Props) => {
  return (
    <ReviewStyle>
      <span>171</span>
      <div style={{ width: '243px', height: '116px', backgroundColor: 'grey', margin: '0 10px' }}>
        썸네일 구역
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
        <span style={{ fontWeight: 700 }}>골프 여행 짱</span>
        <div>★★★★☆</div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginLeft: 'auto',
          textAlign: 'right',
          gap: '5px',
        }}
      >
        <span>2023.03.19</span>
        <span>짱발자</span>
      </div>
    </ReviewStyle>
  )
}

const ReviewStyle = styled.li`
  display: flex;
  align-items: center;
`

export default Review
