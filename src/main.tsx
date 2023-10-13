import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from './App'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import AllProduct from './pages/AllProduct';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

const router = createBrowserRouter([
  {
    path: "/nike-clone",
    element: <App />,
    children: [
      {
        path: "/nike-clone",
        element: <Home />,
      },
      {
        path: "/nike-clone/all-product",
        element: <AllProduct />,
      },
      {
        path: "/nike-clone/cart",
        element: <Cart />,
      },
      {
        path: "/nike-clone/check-out",
        element: <Checkout />,
      }
    ]
  }
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
