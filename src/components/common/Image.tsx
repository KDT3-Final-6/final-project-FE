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
  imgBorderRadius?: string
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
  imgBorderRadius = '',
  children,
}: IImage) => {
  return (
    <ImageStyle width={width} height={height} isCenter={isCenter} margin={margin} bgImage={bgImage}>
      {!bgImage && (
        <ImageImgStyle
          src={src}
          alt={alt}
          imgMargin={imgMargin}
          imgBorderRadius={imgBorderRadius}
        />
      )}
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
  imgBorderRadius: string
}>`
  margin: ${({ imgMargin }) => imgMargin};
  border-radius: ${({ imgBorderRadius }) => imgBorderRadius};
`
