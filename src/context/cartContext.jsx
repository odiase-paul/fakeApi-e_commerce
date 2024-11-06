import { createContext, useState, useEffect } from "react";

export const CartContext = createContext(null);

export const CartContextProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i < data.length + 1; i++) {
      cart[i] = 0;
    }
    return cart;
  };
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);

  const [cartItem, setCartItem] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removeFromCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  //   const getTotalCartAmount = () => {
  //     let totalAmount = 0;
  //     for (const item in cartItem) {
  //       if (cartItem[item] > 0) {
  //         let itemInfo = data.find((product) => product.id === Number(item));
  //         totalAmount += itemInfo.new_price * cartItem[item];
  //       }
  //     }
  //     return totalAmount;
  //   };
  const getTotalCartItem = () => {
    let totalItem = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        totalItem += cartItem[item];
      }
    }
    return totalItem;
  };
  console.log(getTotalCartItem());

  const value = {
    data,
    cartItem,
    addToCart,
    removeFromCart,
    getTotalCartItem,
    // getTotalCartAmount,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
