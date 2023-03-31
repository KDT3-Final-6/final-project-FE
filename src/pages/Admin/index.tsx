import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

const index = () => {
  return (
    <ContainerStyle>
      <Outlet />
    </ContainerStyle>
  )
}

export default index

const ContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
