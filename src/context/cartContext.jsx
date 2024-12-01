import { createContext, useState, useEffect } from "react";
import { auth, db } from "../utils/firebase/firebase.utils";
import { doc, getDoc, setDoc } from "firebase/firestore";

export const CartContext = createContext(null);

export const CartContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [userDetails, setUserDetails] = useState(null);
  const [cartItem, setCartItem] = useState(
    localStorage.getItem("cartItem")
      ? JSON.parse(localStorage.getItem("cartItem"))
      : []
  );

  //fetch products

  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setData(data);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  //fetchUserData

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const docRef = doc(db, "Users", user?.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserDetails(docSnap.data());
        }
      } else {
        console.log("user is logged out");
      }
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  //logout

  const handleLogout = async () => {
    try {
      await auth.signOut();
      window.location.href = "/login";
      console.log("user logged out");
    } catch (error) {
      console.error("Error logging out", error.message);
    }
  };

  //addToCart

  const addToCart = (item) => {
    const isItemInCart = cartItem.find((e) => e.id === item.id);

    if (isItemInCart) {
      setCartItem(
        cartItem.map((e) =>
          e.id === item.id ? { ...e, quantity: e.quantity + 1 } : e
        )
      );
    } else {
      setCartItem([...cartItem, { ...item, quantity: 1 }]);
    }
  };

  //RemoveFromCart

  const removeFromCart = (item) => {
    const isItemInCart = cartItem.find((e) => e.id === item.id);

    if (isItemInCart.quantity === 1) {
      setCartItem(cartItem.filter((e) => e.id !== item.id));
    } else {
      setCartItem(
        cartItem.map((e) =>
          e.id === item.id ? { ...e, quantity: e.quantity - 1 } : e
        )
      );
    }
  };

  //getCartTotal

  const getCartTotalAmount = () => {
    return cartItem.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(cartItem));
  }, [cartItem]);
  useEffect(() => {
    const cartItem = localStorage.getItem("cartItem");
    if (cartItem) {
      setCartItem(JSON.parse(cartItem));
    }
  }, []);

  const value = {
    handleLogout,
    userDetails,
    data,
    cartItem,
    addToCart,
    removeFromCart,
    getCartTotalAmount,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
