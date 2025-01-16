import "./products.css";
import React, { useContext } from "react";
import Items from "../items/Items";

import { ProductContext } from "../../context/productContext";

const Products = () => {
  const {
    filter,
    isLoading,
    data,
    setFilter,
    activeButton,
    setActiveButton,
    filterProduct,
  } = useContext(ProductContext);

  const handleActiveButton = (buttonClick) => {
    setActiveButton(buttonClick);
  };

  const Loading = () => {
    return <div className="d-flex justify-content-center">Loading....</div>;
  };

  const ShowProducts = () => {
    return (
      <>
        <div>
          <div className="buttons filter-products mb-3 pb-5 d-flex justify-content-center">
            <button
              className={`btn btn-outline-dark me-2  ${
                activeButton === "All" ? "active" : ""
              }`}
              onClick={() => {
                setFilter(data);
                handleActiveButton("All");
              }}
            >
              All
            </button>

            <button
              className={`btn btn-outline-dark me-2 ${
                activeButton === "Jewelery" ? "active" : ""
              }`}
              onClick={() => {
                filterProduct("jewelery");
                handleActiveButton("Jewelery");
              }}
            >
              Jewelery
            </button>
            <button
              className={`btn btn-outline-dark me-2 ${
                activeButton === "Electronic" ? "active" : ""
              }`}
              onClick={() => {
                filterProduct("electronics");
                handleActiveButton("Electronic");
              }}
            >
              Electronic
            </button>
            <button
              className={`btn btn-outline-dark me-2 ${
                activeButton === "Men's clothing" ? "active" : ""
              }`}
              onClick={() => {
                filterProduct("men's clothing");
                handleActiveButton("Men's clothing");
              }}
            >
              Men's clothing
            </button>
            <button
              className={`btn btn-outline-dark me-2 ${
                activeButton === "Women's clothing" ? "active" : ""
              }`}
              onClick={() => {
                filterProduct("women's clothing");
                handleActiveButton("Women's clothing");
              }}
            >
              Women's clothing
            </button>
          </div>

          <div className="items-display">
            {filter &&
              filter.map((items, i) => {
                return (
                  <Items
                    key={i}
                    image={items.image}
                    title={items.title.substring(0, 12)}
                    price={items.price}
                    button={"Buy Now"}
                    product={items.id}
                  />
                );
              })}
          </div>
        </div>
      </>
    );
  };
  return <div>{isLoading ? <Loading /> : <ShowProducts />}</div>;
};

export default Products;
