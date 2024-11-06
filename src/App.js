import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/home/Home";
import ShowProduct from "./component/ShowProduct/ShowProduct";
import Products from "./component/products/products";
import NavBar from "./component/NavBar/NavBar";
import ProductsDisplay from "./component/productsDisplay/productsDisplay";
import Cart from "./Cart/Cart";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductsDisplay />} />
        <Route path="features" element={<ShowProduct />} />
        <Route path="features" element={<ShowProduct />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
