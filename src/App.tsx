
import {
  BrowserRouter,
  HashRouter,
  Route,
  Routes,
} from "react-router-dom";
import './App.css'
import Home from "./pages/Home"
import { AppLayout } from "./layout/AppLayout"
import NotFound from "./pages/NotFound";
import ProductDetail from "./pages/ProductDetail";
import AllProduct from "./pages/AllProduct";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

export const App = () => {
  return (
    <>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-product" element={<AllProduct />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/product-detail">
            <Route path=":productID" element={<ProductDetail />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AppLayout>
    </>
  )
}
