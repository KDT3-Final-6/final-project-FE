import React from 'react'
import styled from 'styled-components'

interface IImage {
  src?: string
  alt?: string
  width?: string
  height?: string
  isCenter?: boolean
  margin?: string
  bgImage?: string
  imgMargin?: string
  children?: React.ReactNode
}

const Image = ({
  src,
  alt,
  width = '',
  height = '',
  isCenter = false,
  margin = '',
  bgImage = '',
  imgMargin = '',
  children,
}: IImage) => {
  return (
    <ImageStyle width={width} height={height} isCenter={isCenter} margin={margin} bgImage={bgImage}>
      {!bgImage && <ImageImgStyle src={src} alt={alt} imgMargin={imgMargin} />}
      {children}
    </ImageStyle>
  )
}

export default Image

const ImageStyle = styled.div<{
  width: string
  height: string
  isCenter: boolean
  margin?: string
  bgImage: string
}>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  display: ${({ isCenter }) => isCenter && 'flex'};
  margin: ${({ margin }) => margin};
  background: url(${({ bgImage }) => bgImage}) no-repeat center;
  background-size: cover;
`

const ImageImgStyle = styled.img<{
  imgMargin: string
}>`
  margin: ${({ imgMargin }) => imgMargin};
`
