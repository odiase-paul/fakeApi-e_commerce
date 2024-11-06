import "./products.css";
import React from "react";
import Items from "../items/Items";
import { useState, useEffect } from "react";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let component = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (component) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        // console.log(filter);
      }
      return () => {
        component = false;
      };
    };
    getProducts();
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
        <div className="buttons mb-5 pb-5 d-flex justify-content-center">
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => setFilter(data)}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("men's clothing")}
          >
            Men's clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("women's clothing")}
          >
            Women's clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("jewelery")}
          >
            Jewelery
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("electronics")}
          >
            Electronic
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
  return <div className="">{loading ? <Loading /> : <ShowProducts />}</div>;
};

export default Products;
