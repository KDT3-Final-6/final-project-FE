import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import MESSAGES from '@src/constants/messages'
import PATH from '@src/constants/pathConst'
import { setModal } from '@src/reduxStore/modalSlice'
import { getCookie } from '@src/utils/cookie'

interface IAdminRoute {
  children: React.ReactNode
}

const AdminRoute = ({ children }: IAdminRoute) => {
  const accessToken = getCookie('accessToken')
  const role = getCookie('role')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  if (!accessToken || !role.includes('ROLE_ADMIN')) {
    dispatch(
      setModal({
        isOpen: true,
        text: MESSAGES.ERROR,
        onClickOK: () => {
          dispatch(setModal({ route: navigate(PATH.HOME) }))
        },
      })
    )
  }
  return accessToken && children
}

export default AdminRoute
