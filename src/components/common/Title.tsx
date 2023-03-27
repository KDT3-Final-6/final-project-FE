import { COLORS, FONTSIZE, FONTWEGHT } from '@src/styles/root'
import React from 'react'
import styled from 'styled-components'

interface ITitle {
  fontSize?: string
  fontWeight?: string
  margin?: string
  color?: string
  textAlign?: string
  children: React.ReactNode
}

const Title = ({
  fontSize = FONTSIZE.fz25,
  fontWeight = FONTWEGHT.fw700,
  margin = '',
  color = COLORS.c1b1b1b,
  textAlign = 'left',
  children,
}: ITitle) => {
  return (
    <TitleStyle
      fontSize={fontSize}
      fontWeight={fontWeight}
      margin={margin}
      color={color}
      textAlign={textAlign}
    >
      {children}
    </TitleStyle>
  )
}

export default Title

const TitleStyle = styled.div<{
  fontSize: string
  fontWeight: string
  margin: string
  color: string
  textAlign: string
}>`
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  margin: ${({ margin }) => margin};
  color: ${({ color }) => color};
  text-align: ${({ textAlign }) => textAlign};
`

const HightlightSpanStyle = styled.span<{
  fontSize?: string
  fontWeight?: string
  spanMargin?: string
}>`
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ color }) => color};
  margin: ${({ spanMargin }) => spanMargin};
  display: inline-block;
`

export { HightlightSpanStyle }
