import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

type Props = {}

const MoveTab = (props: Props) => {
  const navigate = useNavigate()
  return (
    <MoveTabBox>
      <Tab onClick={() => navigate('#detail')}>상품 상세</Tab>
      <Tab onClick={() => navigate('#review')}>상품 후기 (1)</Tab>
      <Tab onClick={() => navigate('#related')}>연관 상품</Tab>
    </MoveTabBox>
  )
}

const MoveTabBox = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 20px;
`

const Tab = styled.span`
  cursor: pointer;
  font-size: 25px;
  font-weight: 500;
`

export default MoveTab
