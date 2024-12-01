import React, { useState } from "react";
import "./Login.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../utils/firebase/firebase.utils";
import { toast, ToastContainer } from "react-toastify";

const defaultField = {
  email: "",
  password: "",
};

const Login = () => {
  const [formField, setFormField] = useState(defaultField);
  const { email, password } = formField;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("User logged in successfully!", {
        position: "top-center",
      });
      window.location.href = "/products";
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormField({ ...formField, [name]: value });
  };

  // firebase

  return (
    <div className="login-page">
      <div className="inner-register-page m-auto align-items-center p-4 shadow bg-white">
        <h1 className="mb-4">Login</h1>
        <div></div>
        <form className="d-grid" action="" onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              className="w-100 ps-2"
              id="email"
              placeholder="Email"
              type="email"
              required
              value={email}
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <input
              className="w-100 ps-2"
              id="password"
              placeholder="Password"
              type="password"
              required
              value={password}
              name="password"
              onChange={handleChange}
            />
          </div>

          <div className="">
            <button type="submit" className="btn btn-danger w-50">
              Login
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
