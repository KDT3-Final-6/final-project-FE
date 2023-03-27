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
  imgMargin: string
  imgPosition: string
  imgTop: string
  imgLeft: string
  imgTransform: string
}>`
  margin: ${({ imgMargin }) => imgMargin};
  height: 100%;
  position: ${({ imgPosition }) => imgPosition};
  top: ${({ imgTop }) => imgTop};
  left: ${({ imgLeft }) => imgLeft};
  transform: ${({ imgTransform }) => imgTransform};
`
