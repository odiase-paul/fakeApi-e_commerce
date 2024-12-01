import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA8yj5BAXQ9ExHumfM7iAvzjT9ycWqvCB8",
  authDomain: "fake-api-93991.firebaseapp.com",
  projectId: "fake-api-93991",
  storageBucket: "fake-api-93991.firebasestorage.app",
  messagingSenderId: "526367443701",
  appId: "1:526367443701:web:88dec96ed8c7366b1593bc",
  measurementId: "G-211PE8DQMB",
};

export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
export const auth = getAuth();

// const provider = new GoogleAuthProvider();
// provider.setCustomParameters({ prompt: "select_account" });

// export const signInWithGoogleEmailAndPassword = () =>
//   signInWithEmailAndPassword(auth, provider);
