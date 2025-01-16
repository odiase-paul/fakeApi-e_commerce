import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CartContextProvider } from "./context/cartContext";
import { ProductContextProvider } from "./context/productContext";

const isDevelopment = process.env.NODE_ENV === "development";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  isDevelopment ? (
    <BrowserRouter>
      <ProductContextProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </ProductContextProvider>
    </BrowserRouter>
  ) : (
    <React.StrictMode>
      <BrowserRouter>
        <ProductContextProvider>
          <CartContextProvider>
            <App />
          </CartContextProvider>
        </ProductContextProvider>
      </BrowserRouter>
    </React.StrictMode>
  )
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
