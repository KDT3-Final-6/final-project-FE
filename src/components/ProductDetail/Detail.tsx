import React from 'react'
import styled from 'styled-components'

type Props = {}

const Detail = (props: Props) => {
  return (
    <DetailStyle id="detail">
      <img src="/images/product_detail/01_01_하와이와이키키_골프팩_7일.jpg" alt="1" />
      <img src="/images/product_detail/01_02_하와이와이키키_골프팩_7일.jpg" alt="2" />
    </DetailStyle>
  )
}

const DetailStyle = styled.div`
  margin: 40px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default Detail
