import React from 'react'
import styled from 'styled-components'

interface IImage {
  src: string
  alt: string
  width?: string
  height?: string
  isCenter?: boolean
  margin?: string
  imgMargin?: string
}

const Image = ({
  src,
  alt,
  width = '',
  height = '',
  isCenter = false,
  margin = '',
  imgMargin = '',
}: IImage) => {
  return (
    <ImageStyle width={width} height={height} isCenter={isCenter} margin={margin}>
      <ImageImgStyle src={src} alt={alt} imgMargin={imgMargin} />
    </ImageStyle>
  )
}

export default Image

const ImageStyle = styled.div<{
  width: string
  height: string
  isCenter: boolean
  margin?: string
}>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  display: ${({ isCenter }) => isCenter && 'flex'};
  margin: ${({ margin }) => margin};
`

const ImageImgStyle = styled.img<{
  imgMargin: string
}>`
  margin: ${({ imgMargin }) => imgMargin};
`
