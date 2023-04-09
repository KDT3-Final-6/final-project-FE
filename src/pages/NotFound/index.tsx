import Lottie from 'lottie-react'
import React from 'react'
import styled from 'styled-components'
import notFoundLottie from '@src/lotties/notFoundLottie.json'
import { COLORS, FONTSIZE } from '@src/styles/root'
import Title from '@src/components/common/Title'
import Button from '@src/components/common/Button'
import { ImHome } from 'react-icons/im'
import { useNavigate } from 'react-router-dom'
import PATH from '@src/constants/pathConst'

interface Props {}

const NotFound = (props: Props) => {
  const navigate = useNavigate()
  return (
    <NotFoundStyle>
      <Lottie animationData={notFoundLottie} loop={true} />
      <Title titleType="h1" title="PAGE NOT FOUND" fontSize={FONTSIZE.fz45} />
      <Button buttonType="skyblue" onClick={() => navigate(PATH.HOME)}>
        <ImHome />
        Home
      </Button>
    </NotFoundStyle>
  )
}

export default NotFound

const NotFoundStyle = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: -50px;

  div {
    width: 600px;
    text-align: center;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;

    svg {
      margin-right: 10px;
      font-size: ${FONTSIZE.fz18};
    }
  }
`
