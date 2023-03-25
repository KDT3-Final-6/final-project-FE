import { COLORS, FONTSIZE, FONTWEGHT } from '@src/styles/root'
import React from 'react'
import styled from 'styled-components'

interface ITitle {
  titleType: string
  title: string
  fontSize?: string
  fontWeight?: string
  marginBotton?: string
  color?: string
}

const Title = ({
  titleType,
  title,
  fontSize = FONTSIZE.fz25,
  fontWeight = FONTWEGHT.fw700,
  marginBotton = '',
  color = COLORS.c1b1b1b,
}: ITitle) => {
  return (
    <TitleStyle
      titleType={titleType}
      fontSize={fontSize}
      fontWeight={fontWeight}
      marginBotton={marginBotton}
      color={color}
    >
      {titleType === 'h1' && <h1>{title}</h1>}
      {titleType === 'h2' && <h2>{title}</h2>}
      {titleType === 'h3' && <h3>{title}</h3>}
      {titleType === 'h4' && <h4>{title}</h4>}
    </TitleStyle>
  )
}

export default Title

const TitleStyle = styled.div<{
  titleType: string
  fontSize: string
  fontWeight: string
  marginBotton: string
  color: string
}>`
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  margin-bottom: ${({ marginBotton }) => marginBotton};
  color: ${({ color }) => color};
`
