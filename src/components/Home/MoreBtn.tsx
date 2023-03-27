import { COLORS, FONTSIZE, FONTWEGHT } from '@src/styles/root'
import styled from 'styled-components'
import { BiPlus } from 'react-icons/bi'

interface IMoreBtn {
  type?: string
  color?: string
  bgColor?: string
  bottom?: string
  right?: string
}

const MoreBtn = ({ color = `${COLORS.black}`, bgColor, bottom, right, type }: IMoreBtn) => {
  return (
    <BtnStyle color={color} bgColor={bgColor} bottom={bottom} right={right} type={type}>
      <span>자세히 보기</span>
      <BiPlus />
    </BtnStyle>
  )
}

export default MoreBtn

const BtnStyle = styled.div<IMoreBtn>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${FONTSIZE.fz16};
  font-weight: ${FONTWEGHT.fw600};
  color: ${({ color }) => color};
  background-color: ${({ bgColor }) => bgColor};
  gap: 4px;
  padding: 12px 16px;
  border-radius: 9999px;
  position: absolute;
  bottom: ${({ bottom }) => bottom};
  right: ${({ right }) => right};
  border: 1px solid ${COLORS.cb6b6b6};

  svg {
    display: ${({ type }) => (type === 'plus' ? 'block' : 'none')};
    margin: 0;
  }

  &:hover {
    background-color: ${({ bgColor }) => bgColor === `${COLORS.white}` && `${COLORS.cf6f6f6}`};
    box-shadow: ${({ bgColor }) =>
      bgColor !== `${COLORS.white}` && '5px 4px 18px -9px rgba(0,0,0,0.37)'};
  }
`
