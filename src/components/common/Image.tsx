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
  border?: string
  onClick?: () => void
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
  border = '',
  onClick,
}: IImage) => {
  return (
    <ImageStyle
      width={width}
      height={height}
      isCenter={isCenter}
      margin={margin}
      bgImage={bgImage}
      imgBorderRadius={imgBorderRadius}
      border={border}
      onClick={onClick}
    >
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
  imgBorderRadius: string
  border: string
}>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  display: ${({ isCenter }) => isCenter && 'flex'};
  margin: ${({ margin }) => margin};
  background: url(${({ bgImage }) => bgImage}) no-repeat center;
  background-size: cover;
  border-radius: ${({ imgBorderRadius }) => imgBorderRadius};
  border: ${({ border }) => border};
`

const ImageImgStyle = styled.img<{
  imgMargin: string
  imgBorderRadius: string
}>`
  margin: ${({ imgMargin }) => imgMargin};
  border-radius: ${({ imgBorderRadius }) => imgBorderRadius};
`
