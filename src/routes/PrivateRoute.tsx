import MESSAGES from '@src/constants/messages'
import PATH from '@src/constants/pathConst'
import { setModal } from '@src/reduxStore/modalSlice'
import { getCookie } from '@src/utils/cookie'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

interface IPrivateRoute {
  children: React.ReactNode
}

const PrivateRoute = ({ children }: IPrivateRoute) => {
  const accessToken = getCookie('accessToken')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  if (!accessToken) {
    dispatch(
      setModal({
        isOpen: true,
        text: MESSAGES.INVALID_AUTH,
        onClickOK: () => {
          dispatch(setModal({ route: navigate(PATH.LOGIN) }))
        },
      })
    )
  }
  return accessToken && children
}

export default PrivateRoute
