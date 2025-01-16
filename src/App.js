import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/home/Home";

import Products from "./component/products/products";
import NavBar from "./component/NavBar/NavBar";
import ProductsDisplay from "./component/productsDisplay/productsDisplay";
import Cart from "./Cart/Cart";
import Login from "./component/LoginPage/Login";
import Register from "./component/Register/Register";
import AboutUs from "./component/AboutUs/AboutUs";
import ContactUs from "./component/ContactUs/ContactUs";
import Footer from "./component/Footer/Footer";
import { useContext } from "react";
import { ProductContext } from "./context/productContext";

function App() {
  const { isLoading } = useContext(ProductContext);

  const Loading = () => {
    return (
      <div className="d-flex justify-content-center align-items-center loading-page">
        <p className=" ">Loading...</p>
      </div>
    );
  };

  const EntireComponent = () => {
    return (
      <div className="">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:productId" element={<ProductsDisplay />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="cart" element={<Cart />} />
          <Route path="aboutUs" element={<AboutUs />} />
          <Route path="contact" element={<ContactUs />} />
        </Routes>
        <Footer />
      </div>
    );
  };
  return (
    <div className="App">{isLoading ? <Loading /> : <EntireComponent />}</div>
  );
}

export default App;
