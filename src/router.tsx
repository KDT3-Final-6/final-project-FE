import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
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
import OrderList from './pages/Mypage/OrderList'
import Cart from '@pages/Mypage/Cart'
import WishList from './pages/Mypage/WishList'
import OneOnOne from './pages/Mypage/OneOnOne'
import InfoEdit from './pages/Mypage/InfoEdit'
import MyReview from './pages/Mypage/MyReview'
import Admin from '@pages/Admin'
import ProductList from '@pages/ProductsList'
import TransactionList from '@pages/TransactionList'
import UserList from '@pages/UserList'
import PostList from '@pages/PostList'
import Group from '@pages/Product/Group'
import Theme from '@pages/Product/Theme'
import Recommend from '@pages/Product/Recommend'
import Buy from '@pages/Buy'
import Result from '@pages/Survey/Result'
import Consult from '@pages/Consult'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        path: PATH.HOME,
        element: <Home />,
      },
      { path: PATH.CONTACT, element: <Contact /> },
      {
        path: PATH.PRODUCT,
        element: <Product />,
        children: [
          { path: PATH.PRODUCT_GROUP, element: <Group /> },
          { path: PATH.PRODUCT_THEME, element: <Theme /> },
          { path: PATH.PRODUCT_RECOMMEND, element: <Recommend /> },
        ],
      },
      { path: PATH.REVIEW, element: <Review /> },
      { path: PATH.SEARCH, element: <Search /> },
      { path: PATH.LOGIN, element: <Login /> },
      { path: PATH.SIGNUP, element: <SignUp /> },
      { path: PATH.SURVEY, element: <Survey /> },
      { path: PATH.SURVEY_RESULT, element: <Result /> },
      { path: PATH.USER, element: <User /> },
      { path: PATH.PRODUCT_DETAIL, element: <ProductDetail /> },
      { path: PATH.BUY, element: <Buy /> },
      { path: PATH.CONSULT, element: <Consult /> },
      {
        path: PATH.MYPAGE,
        element: <MyPage />,
        children: [
          { path: PATH.ORDER_LIST, element: <OrderList /> },
          { path: PATH.CART, element: <Cart /> },
          { path: PATH.WISHLIST, element: <WishList /> },
          { path: PATH.ONE_ON_ONE, element: <OneOnOne /> },
          { path: PATH.INFO_EDIT, element: <InfoEdit /> },
          { path: PATH.MY_REVIEW, element: <MyReview /> },
        ],
      },
      {
        path: PATH.ADMIN,
        element: <Admin />,
        children: [
          { path: PATH.PRODUCTS_LIST, element: <ProductList /> },
          { path: PATH.TRANSACTION_LIST, element: <TransactionList /> },
          { path: PATH.USER_LIST, element: <UserList /> },
          { path: PATH.POST_LIST, element: <PostList /> },
        ],
      },
    ],
  },
])

export default router
