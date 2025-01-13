import { CartContext } from "../context/cartContext";
import "./Cart.css";
import React from "react";
import { useContext } from "react";
const Cart = () => {
  const { cartItem, addToCart, removeFromCart, getCartTotalAmount } =
    useContext(CartContext);

  return (
    <div className="container cart pt-4">
      <div className="mb-5">
        <h1>Cart Info</h1>
        <hr />
      </div>

      {cartItem?.map((e) => {
        return (
          <div className="cart-top-data" key={e.id}>
            <div className="cart-middle-data d-flex justify-context-center my-4">
              <div>
                <img className="cart-product-image" src={e?.image} alt="" />
              </div>
              <div>
                <div>
                  <h5 className="text-black-50 cart-heading">{e.title}</h5>
                  <div className="d-flex  cart-amount">
                    <p>
                      Quantity :{" "}
                      <span className=" text-danger fw-bold">{e.quantity}</span>
                    </p>
                    <p>
                      Amount :{" "}
                      <span className=" text-danger fw-bold">
                        ${Math.round(e.price * e.quantity)}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="d-flex gap-5">
                  <span
                    className="fa fa-plus increment"
                    onClick={() => addToCart(e)}
                  ></span>
                  <span
                    className="fa fa-minus decrement"
                    onClick={() => removeFromCart(e)}
                  ></span>
                </div>
              </div>
            </div>
            <hr />
          </div>
        );
      })}
      <div>
        {cartItem.length > 0 ? (
          <div>
            <div className="my-5">
              <h2>Cart Total</h2>
            </div>
            <div className="cart-total">
              <div className="d-flex  justify-content-between">
                <p>Shipping Fee:</p>
                <p>Free</p>
              </div>
              <hr />
              <div className="d-flex justify-content-between fs-5 fw-bold">
                <p>Total:</p>
                <p className="text-danger">
                  $ {Math.round(getCartTotalAmount())}
                </p>
              </div>
            </div>
            <div className="my-4">
              <button className="btn btn-outline-danger px-4 py-2 checkout-btn">
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        ) : (
          <div>
            <h3 className="text-danger">Your Cart Is Empty</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
