import React from 'react'
import styled from 'styled-components'

interface IImage {
  src: string
  alt: string
  width?: string
  height?: string
  isCenter?: boolean
  margin?: string
  imgWidth?: string
  imgMargin?: string
  imgPosition?: string
  imgTop?: string
  imgLeft?: string
  imgTransform?: string
  children?: React.ReactNode
}

const Image = ({
  src,
  alt,
  width = '',
  height = '',
  isCenter = false,
  margin = '',
  imgWidth = '',
  imgMargin = '',
  imgPosition = 'static',
  imgTop = '',
  imgLeft = '',
  imgTransform = '',
  children,
}: IImage) => {
  return (
    <ImageStyle width={width} height={height} isCenter={isCenter} margin={margin}>
      <ImageImgStyle
        src={src}
        alt={alt}
        imgWidth={imgWidth}
        imgMargin={imgMargin}
        imgPosition={imgPosition}
        imgTop={imgTop}
        imgLeft={imgLeft}
        imgTransform={imgTransform}
      />
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
}>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  display: ${({ isCenter }) => isCenter && 'flex'};
  margin: ${({ margin }) => margin};
`

const ImageImgStyle = styled.img<{
  imgWidth: string
  imgMargin: string
  imgPosition: string
  imgTop: string
  imgLeft: string
  imgTransform: string
}>`
  margin: ${({ imgMargin }) => imgMargin};
  width: ${({ imgWidth }) => imgWidth};
  position: ${({ imgPosition }) => imgPosition};
  top: ${({ imgTop }) => imgTop};
  left: ${({ imgLeft }) => imgLeft};
  transform: ${({ imgTransform }) => imgTransform};
`
