import "./products.css";
import React from "react";
import Items from "../items/Items";
import { useState, useEffect } from "react";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [isLoading, setIsLoading] = useState(false);
  const [activeButton, setActiveButton] = useState(null);

  const handleActiveButton = (buttonClick) => {
    setActiveButton(buttonClick);
  };

  const getProducts = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      setData(await response.clone().json());
      setFilter(await response.json());
    } catch (error) {
      console.log("error", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
    setActiveButton("All");
  }, []);

  const Loading = () => {
    return <div className="d-flex justify-content-center">Loading....</div>;
  };

  const filterProduct = (items) => {
    const selectItems = data.filter((item) => item.category === items);
    setFilter(selectItems);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons filter-products mb-5 pb-5 d-flex justify-content-center">
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
      </>
    );
  };
  return <div className="">{isLoading ? <Loading /> : <ShowProducts />}</div>;
};

export default Products;
