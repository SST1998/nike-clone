import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from './App'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';

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
        element: <Home />,
      },
      {
        path: "/nike-clone/cart",
        element: <Home />,
      },
      {
        path: "/nike-clone/check-out",
        element: <Home />,
      }
    ]
  }
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
