import { createContext, useState, useEffect } from "react";
import { auth, db } from "../utils/firebase/firebase.utils";
import {
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";

export const CartContext = createContext(null);

export const CartContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [userDetails, setUserDetails] = useState(null);
  const [cartItem, setCartItem] = useState([]);

  const [stateUser, setStateUser] = useState(null);
  useEffect(() => {
    const user = auth.onAuthStateChanged(setStateUser);
    return () => user();
  }, []);

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
      console.log("user logged out", userDetails);
    } catch (error) {
      console.error("Error logging out", error.message);
    }
  };

  //firestoreCartItem

  useEffect(() => {
    if (stateUser) {
      const fetchCart = async () => {
        const docRef = doc(db, "carts", stateUser.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setCartItem(docSnap.data().items);
        } else {
          await setDoc(docRef, { items: [] });
        }
      };
      fetchCart();
    } else {
      setCartItem([]);
    }
  }, [userDetails]);

  //addToCart

  const addToCart = async (item) => {
    if (stateUser) {
      const docRef = doc(db, "carts", stateUser.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const cartData = docSnap.data();
        const existingItem = cartData.items?.find((e) => e.id === item.id);
        if (existingItem) {
          const updateItem = cartData.items.map((product) =>
            product.id === item.id
              ? { ...product, quantity: product.quantity + 1 }
              : product
          );
          await updateDoc(docRef, { items: updateItem });
          setCartItem(updateItem);
        } else {
          const newItem = { ...item, quantity: 1 };
          await updateDoc(docRef, { items: arrayUnion(newItem) });
          setCartItem((prev) => [...prev, newItem]);
        }
      } else {
        const newItem = { ...item, quantity: 1 };
        await setDoc(docRef, { items: [newItem] });
        setCartItem([newItem]);
      }
    }
  };

  //RemoveFromCart

  const removeFromCart = async (item) => {
    if (stateUser) {
      const docRef = doc(db, "carts", stateUser.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const cartData = docSnap.data();
        const decreaseItem = cartData.items.find((e) => e.id === item.id);
        if (decreaseItem && decreaseItem.quantity > 1) {
          const updateItem = cartData.items.map((e) =>
            e.id === item.id ? { ...e, quantity: e.quantity - 1 } : e
          );

          await updateDoc(docRef, { items: updateItem });
          setCartItem(updateItem);
        } else {
          await updateDoc(docRef, { items: arrayRemove(decreaseItem) });
          setCartItem((prev) => prev.filter((e) => e.id !== item.id));
        }
      }
    }
  };

  //getCartTotal

  const getCartTotalAmount = () => {
    return cartItem.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

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
