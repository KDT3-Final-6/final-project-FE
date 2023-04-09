import Inner from '@src/layout/Inner'
import { COLORS, FONTSIZE, FONTWEGHT } from '@src/styles/root'
import styled from 'styled-components'
import Image from '../common/Image'
import MoreBtn from './MoreBtn'

interface IBanner {
  image?: string
  marginTop?: string
  marginBottom?: string
  type?: number
}

const Banner = ({ type, image, marginTop, marginBottom }: IBanner) => {
  return (
    <Inner>
      <BannerStyle marginTop={marginTop} marginBottom={marginBottom}>
        <Image src={image} />
        <MoreBtn color={COLORS.black} bgColor={COLORS.white} bottom="23px" right="22px" />
      </BannerStyle>
    </Inner>
  )
}

export default Banner

const BannerStyle = styled.div<IBanner>`
  position: relative;
  width: 100%;
  height: 249px;
  margin-bottom: ${({ marginBottom }) => marginBottom};
  margin-top: ${({ marginTop }) => marginTop};
  img {
    width: 100%;
    height: 100%;
  }
`

const TagGroupStyle = styled.div`
  position: absolute;
  top: 109px;
  left: 45px;
  display: flex;
  gap: 12px;
  div {
    padding: 7.5px 12px;
    background-color: ${COLORS.white};
    color: ${COLORS.c919F79};
    font-weight: ${FONTWEGHT.fw600};
    border-radius: 32px;
  }
`

const ExclusiveBannerStyle = styled.div`
  color: ${COLORS.white};
  font-weight: ${FONTWEGHT.fw600};
  p {
    &:first-child {
      position: absolute;
      top: 48px;
      left: 63px;
      font-size: ${FONTSIZE.fz45};
    }
    &:nth-child(2) {
      position: absolute;
      top: 114px;
      left: 67px;
      font-size: ${FONTSIZE.fz28};
    }
  }
`

const SpringBannerStyle = styled.div`
  p {
    top: 38px;
    left: 45px;
    font-size: ${FONTSIZE.fz45};
    color: ${COLORS.c394128};
  }
`
