import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const MoveTab = () => {
  return (
    <MoveTabStyle>
      <Link to="#detail">
        <Tab>상품 상세</Tab>
      </Link>
      <Link to="#review">
        <Tab>상품 후기</Tab>
      </Link>
      <Link to="#related">
        <Tab>연관 상품</Tab>
      </Link>
    </MoveTabStyle>
  )
}

const MoveTabStyle = styled.div`
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
