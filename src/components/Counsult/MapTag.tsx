import { COLORS, FONTSIZE } from '@src/styles/root'
import React from 'react'
import styled from 'styled-components'

interface IMagTag {
  bgColor: string
  lineNumber: number
  name: string
  meter: number
}

const MapTag = ({ bgColor, lineNumber, name, meter }: IMagTag) => {
  return (
    <MapTagStyle>
      <LeftBoxStyle bgColor={bgColor}>
        <span>{lineNumber}호선</span>
        <span>{name}</span>
      </LeftBoxStyle>
      <RightBoxStyle>
        <span>5번</span>
        <span>출구에서 {meter}m</span>
      </RightBoxStyle>
    </MapTagStyle>
  )
}

export default MapTag

const LeftBoxStyle = styled.div<{ bgColor: string }>`
  span:first-child {
    text-align: center;
    width: 47px;
    height: 100%;
    background-color: ${({ bgColor }) => bgColor};
    color: ${COLORS.white};
    padding: 8px 6px;
    font-size: ${FONTSIZE.fz14};
  }
  span:last-child {
    font-size: ${FONTSIZE.fz16};
  }
`
const RightBoxStyle = styled.div`
  span:first-child {
    width: 37px;
    height: 100%;
    background-color: #fbea4e;
    padding: 8px 6px;
    font-size: ${FONTSIZE.fz14};
    text-align: center;
  }
  span:last-child {
    font-size: ${FONTSIZE.fz16};
  }
`

const MapTagStyle = styled.div`
  display: flex;
  width: 299px;
  height: 29px;
  /* font-size: ${FONTSIZE.fz14}; */
  ${LeftBoxStyle}, ${RightBoxStyle} {
    width: 50%;
    display: flex;
    align-items: center;
    gap: 9px;
  }
`
