import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from './App'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import AllProduct from './pages/AllProduct';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import NotFound from './pages/NotFound';
import ProductDetail from './pages/ProductDetail';

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
        path: "/nike-clone/checkout",
        element: <Checkout />,
      },
      {
        path: "/nike-clone/product-detail/:productID",
        element: <ProductDetail />,
      },
      // {
      //   path: "/*",
      //   element: <NotFound />,
      // }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
