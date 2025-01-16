import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext(null);

export const ProductContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [isLoading, setIsLoading] = useState(false);
  const [activeButton, setActiveButton] = useState(null);

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

  const filterProduct = (items) => {
    const selectItems = data.filter((item) => item.category === items);
    setFilter(selectItems);
  };
  const value = {
    data,
    filter,
    setFilter,
    isLoading,
    activeButton,
    setActiveButton,
    filterProduct,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
