import { FONTSIZE, FONTWEGHT } from '@src/styles/root'
import React from 'react'
import styled from 'styled-components'
import { HashLink } from 'react-router-hash-link'

interface Props {
  reviews: number
}

const MoveTab = ({ reviews }: Props) => {
  return (
    <MoveTabStyle>
      <HashLink smooth to="#detail">
        <Tab>상품 상세</Tab>
      </HashLink>
      <HashLink smooth to="#review">
        <Tab>상품 후기({reviews})</Tab>
      </HashLink>
      <HashLink smooth to="#related">
        <Tab>연관 상품</Tab>
      </HashLink>
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
