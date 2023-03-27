import { FONTSIZE, FONTWEGHT } from '@src/styles/root'
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
        <Tab>상품 후기(83)</Tab>
      </Link>
      <Link to="#related">
        <Tab>연관 상품</Tab>
      </Link>
    </MoveTabStyle>
  )
}

const MoveTabStyle = styled.div`
  height: 50px;
  margin-top: 50px;
  display: flex;
  gap: 118px;
  font-weight: ${FONTWEGHT.fw500};
  font-size: ${FONTSIZE.fz26};
`

const Tab = styled.span`
  cursor: pointer;
  font-size: ${FONTSIZE.fz25};
  font-weight: ${FONTWEGHT.fw500};
`

export default MoveTab
