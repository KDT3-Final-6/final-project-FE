import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import NotFound from './pages/NotFound'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Review from './pages/Review'
import Search from './pages/Search'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Survey from './pages/Survey'
import User from './pages/User'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '*', element: <NotFound /> },
      { path: '/cart', element: <Cart /> },
      { path: '/contact', element: <Contact /> },
      { path: '/product', element: <Product /> },
      { path: '/review', element: <Review /> },
      { path: '/search', element: <Search /> },
      { path: '/signin', element: <SignIn /> },
      { path: '/signup', element: <SignUp /> },
      { path: '/survey', element: <Survey /> },
      { path: '/user', element: <User /> },
    ],
  },
])

export default router
