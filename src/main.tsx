import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './router'
import { RouterProvider } from 'react-router-dom'
import { CookiesProvider } from 'react-cookie'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <CookiesProvider>
    <RouterProvider router={router} />
  </CookiesProvider>
)
