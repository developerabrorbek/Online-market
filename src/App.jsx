import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contacts from "./pages/Contacts";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Products from "./pages/Products";
import ServiceRequirements from "./pages/Service-requirements";
import SingleProduct from "./pages/Single-product";

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route element={<Home/>} path="/"/>
        <Route element={<Contacts/>} path="/contacts"/>
        <Route element={<Order/>} path="/ordering"/>
        <Route element={<Products/>} path="/products"/>
        <Route element={<ServiceRequirements/>} path="/service-requirements"/>
        <Route element={<SingleProduct/>} path="/single-product/:id"/>
        <Route element={<Error/>} path="*"/>
      </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
