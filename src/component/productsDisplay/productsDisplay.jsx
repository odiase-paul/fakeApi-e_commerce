import React, { useContext } from "react";
import "./ProductsDisplay.css";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";

const ProductsDisplay = () => {
  const { addToCart, data } = useContext(CartContext);
  const { productId } = useParams();
  const itemsDisplay = data.find((product) => product.id === Number(productId));

  return (
    <div className="container d-flex justify-content-center show-product-container my-5 ">
      <div className="     ">
        <img className="large-image" src={itemsDisplay.image} alt="" />
      </div>
      <div className="">
        <h4 className="text-uppercase text-black-50 fs-5">
          {itemsDisplay.category}
        </h4>
        <h1 className=" mt-4 fs-2">{itemsDisplay.title}</h1>
        <p className="lead fw-bold mt-3">
          Rating {itemsDisplay.rating && itemsDisplay.rating.rate}
          <span className="fa fa-star color-gold ms-2"></span>
        </p>
        <h3 className="fs-4 text-danger fw-bold my-3">${itemsDisplay.price}</h3>
        <p className="lead product-display-description">
          {itemsDisplay.description}
        </p>
        <button
          className="btn btn-outline-dark px-4 py-2"
          onClick={() => addToCart(itemsDisplay)}
        >
          Add to Cart
        </button>
        <Link to="/cart" className="btn btn-dark ms-2 px-3 py-2">
          Go to Cart
        </Link>
      </div>
    </div>
  );
};

export default ProductsDisplay;
