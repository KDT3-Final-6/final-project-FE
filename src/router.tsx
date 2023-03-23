import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Review from './pages/Review'
import Search from './pages/Search'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Survey from './pages/Survey'
import User from './pages/User'
import PATH from './constants/pathConst'
import ProductDetail from './pages/Product/ProductDetail'
import MyPage from './pages/Mypage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: PATH.HOME, element: <Home /> },
      { path: PATH.CART, element: <Cart /> },
      { path: PATH.CONTACT, element: <Contact /> },
      { path: PATH.PRODUCT, element: <Product /> },
      { path: PATH.REVIEW, element: <Review /> },
      { path: PATH.SEARCH, element: <Search /> },
      { path: PATH.LOGIN, element: <Login /> },
      { path: PATH.SIGNUP, element: <SignUp /> },
      { path: PATH.SURVEY, element: <Survey /> },
      { path: PATH.USER, element: <User /> },
      { path: PATH.PRODUCT_DETAIL, element: <ProductDetail /> },
      { path: PATH.MYPAGE, element: <MyPage /> },
    ],
  },
])

export default router
