import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../utils/firebase/firebase.utils";
import { setDoc, doc } from "firebase/firestore";
const defaultField = {
  userName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Register = () => {
  const [formField, setFormField] = useState(defaultField);
  const { userName, email, password, confirmPassword } = formField;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;

      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          userName: userName,
        });
      }
      console.log(user);
      toast.success("User registered successfully!", {
        position: "top-center",
      });
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormField({ ...formField, [name]: value });
  };
  return (
    <div className="register-page">
      <div className="inner-register-page m-auto align-items-center p-4 shadow bg-white">
        <h1 className="mb-4">Sign Up</h1>
        <div></div>
        <form className="d-grid " action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              className="w-100 ps-2"
              id="username"
              placeholder="User Name"
              type="text"
              required
              value={userName}
              name="userName"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
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
          <div className="mb-3">
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
          <div className="mb-3">
            <input
              className="w-100 ps-2"
              id="confirm-password"
              placeholder="Confirm Password"
              type="password"
              required
              value={confirmPassword}
              name="confirmPassword"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <button className="btn btn-danger w-50">Sign Up</button>
          </div>
          <div className=" have-an-account">
            <p className="">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-danger fw-bold text-decoration-none"
              >
                Login
              </Link>
            </p>
          </div>
          <div className="d-flex gap-2 signup-agree">
            <input
              className=""
              type="checkbox"
              name=""
              id="checkbox"
              required
            />

            <p className="mt-3">
              By continuing, i agree to the terms of use & privacy policy.
            </p>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
