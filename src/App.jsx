import { memo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Basket from "./pages/Basket";
import Contacts from "./pages/Contacts";
import Error from "./pages/Error";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import Order from "./pages/Ordering";
import Ordered from "./pages/Ordered";
import Products from "./pages/Products";
import ServiceRequirements from "./pages/Service-requirements";
import SingleProduct from "./pages/Single-product";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Contacts />} path="/contacts" />
          <Route element={<Order />} path="/ordering" />
          <Route element={<Ordered/>} path="/ordered"/>
          <Route element={<Favorites/>} path="/selected"/>
          <Route element={<Products />} path="/products/:category" />
          <Route
            element={<ServiceRequirements />}
            path="/service-requirements"
          />
          <Route element={<Basket/>} path="/basket"/>
          <Route element={<SingleProduct />} path="/single-product/:id" />
          <Route element={<Error />} path="*" />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default memo(App);
