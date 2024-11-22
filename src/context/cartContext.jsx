import { createContext, useState, useEffect } from "react";

export const CartContext = createContext(null);

export const CartContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [cartItem, setCartItem] = useState({});

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      const initialCart = {};
      data.forEach((item, index) => {
        initialCart[index] = 0;
      });
      setCartItem(initialCart);
    }
  }, [data]);

  const addToCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItem((prev) => {
      if (prev[itemId] > 0) {
        return { ...prev, [itemId]: prev[itemId] - 1 };
      }
      return prev;
    });
  };

  const getTotalCartItem = () => {
    return Object.values(cartItem).reduce((total, count) => total + count, 0);
  };

  const value = {
    data,
    cartItem,
    addToCart,
    removeFromCart,
    getTotalCartItem,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
