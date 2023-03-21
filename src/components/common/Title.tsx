import React from 'react'
import styled from 'styled-components'

interface Prop {
  titleType: string
  title: string
  fontSize?: string
}

const Title = ({ titleType, title, fontSize = '25px' }: Prop) => {
  return (
    <TitleStyle titleType={titleType} fontSize={fontSize}>
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
}>`
  font-size: ${({ fontSize }) => fontSize};
  font-weight: 700;
`
