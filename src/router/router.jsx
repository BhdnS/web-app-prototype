import { createBrowserRouter } from 'react-router-dom'
import App from '../App.jsx'
import PrivateRoute from '../hof/PrivateRoute.jsx'
import AllOrders from '../pages/AllOrders.jsx'
import CreateOrder from '../pages/CreateOrder.jsx'
import ErrorPage from '../pages/ErrorPage.jsx'
import Login from '../pages/Login.jsx'
import Registration from '../pages/Registration.jsx'

const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/registration',
        element: <Registration />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/order',
        element: (
          <PrivateRoute>
            <CreateOrder />
          </PrivateRoute>
        ),
      },
      {
        path: '/orders',
        element: (
          <PrivateRoute>
            <AllOrders />
          </PrivateRoute>
        ),
      },
    ],
  },
])

export default router
