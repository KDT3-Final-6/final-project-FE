import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Cart from '@pages/Mypage/Cart'
import Admin from '@pages/Admin'
import ProductList from '@pages/ProductsList'
import TransactionList from '@src/pages/Admin/TransactionList'
import UserList from '@pages/UserList'
import PostList from '@pages/PostList'
import Group from '@pages/Product/Group'
import Theme from '@pages/Product/Theme'
import Recommend from '@pages/Product/Recommend'
import Buy from '@pages/Buy'
import Result from '@pages/Survey/Result'
import AddProduct from '@pages/AddProduct'
import Consult from '@pages/Consult'
import EditProduct from '@pages/EditProduct'
import App from '@src/App'
import NotFound from '@src/pages/NotFound'
import PATH from '@src/constants/pathConst'
import Home from '@src/pages/Home'
import Product from '@src/pages/Product'
import District from '@src/pages/Product/District'
import Search from '@src/pages/Search'
import Login from '@src/pages/Login'
import SignUp from '@src/pages/SignUp'
import Survey from '@src/pages/Survey'
import ProductDetail from '@src/pages/Product/ProductDetail'
import MyPage from '@src/pages/Mypage'
import OrderList from '@src/pages/Mypage/OrderList'
import WishList from '@src/pages/Mypage/WishList'
import OneOnOne from '@src/pages/Mypage/OneOnOne'
import InfoEdit from '@src/pages/Mypage/InfoEdit'
import MyReview from '@src/pages/Mypage/MyReview'
import CheckPassword from '@src/pages/Mypage/CheckPassword'
import PrivateRoute from './PrivateRoute'
import AdminRoute from './AdminRoute'

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
      {
        path: PATH.PRODUCT,
        element: <Product />,
        children: [
          { path: PATH.PRODUCT_GROUP, element: <Group /> },
          { path: PATH.PRODUCT_THEME, element: <Theme /> },
          { path: PATH.PRODUCT_RECOMMEND, element: <Recommend /> },
          { path: PATH.PRODUCT_DISTRICT, element: <District /> },
        ],
      },
      { path: PATH.SEARCH, element: <Search /> },
      { path: PATH.LOGIN, element: <Login /> },
      { path: PATH.SIGNUP, element: <SignUp /> },
      {
        path: PATH.SURVEY,
        element: (
          <PrivateRoute>
            <Survey />
          </PrivateRoute>
        ),
      },
      {
        path: PATH.SURVEY_RESULT,
        element: (
          <PrivateRoute>
            <Result />
          </PrivateRoute>
        ),
      },
      { path: PATH.PRODUCT_DETAIL, element: <ProductDetail /> },
      {
        path: PATH.BUY,
        element: (
          <PrivateRoute>
            <Buy />
          </PrivateRoute>
        ),
      },
      { path: PATH.CONSULT, element: <Consult /> },
      {
        path: PATH.MYPAGE,
        element: (
          <PrivateRoute>
            <MyPage />
          </PrivateRoute>
        ),
        children: [
          { path: PATH.MYPAGE, element: <OrderList /> },
          { path: PATH.ORDER_LIST, element: <OrderList /> },
          { path: PATH.CART, element: <Cart /> },
          { path: PATH.WISHLIST, element: <WishList /> },
          { path: PATH.ONE_ON_ONE, element: <OneOnOne /> },
          { path: PATH.INFO_EDIT, element: <InfoEdit /> },
          { path: PATH.MY_REVIEW, element: <MyReview /> },
          { path: PATH.CHECKPASSWORD, element: <CheckPassword /> },
        ],
      },
      {
        path: PATH.ADMIN,
        element: (
          <AdminRoute>
            <Admin />
          </AdminRoute>
        ),
        children: [
          { path: PATH.ADMIN, element: <ProductList /> },
          { index: true, path: PATH.PRODUCTS_LIST, element: <ProductList /> },
          { path: PATH.ADD_PRODUCT, element: <AddProduct /> },
          { path: PATH.TRANSACTION_LIST, element: <TransactionList /> },
          { path: PATH.USER_LIST, element: <UserList /> },
          { path: PATH.POST_LIST, element: <PostList /> },
          { path: PATH.EDIT_PRODUCT, element: <EditProduct /> },
        ],
      },
    ],
  },
])

export default router
