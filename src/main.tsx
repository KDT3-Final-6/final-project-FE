import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './router'
import { RouterProvider } from 'react-router-dom'
import { CookiesProvider } from 'react-cookie'
import { Provider } from 'react-redux'
import store from './reduxStore/store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <CookiesProvider>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </CookiesProvider>
)
