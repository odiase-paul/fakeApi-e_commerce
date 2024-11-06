import { CartContext } from "../context/cartContext";
import "./Cart.css";
import React from "react";
import { useContext } from "react";
const Cart = () => {
  const { data, cartItem } = useContext(CartContext);
  console.log("cartItem", cartItem);
  return (
    <div>
      {data.map((e) => {
        if (cartItem[e.id] > 0) {
          return (
            <div key={e.id}>
              <h1>{e.image}</h1>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default Cart;
