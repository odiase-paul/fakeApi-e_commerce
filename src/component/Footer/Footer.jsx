import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="mt-5 bg-dark text-white py-5 footer">
      <div className="container d-flex justify-content-between">
        <div className="mb-3">
          <h5 className="mb-4 "> CUSTOMER CARE</h5>
          <div>
            <p>Contact us</p>
            <p>Call: 07054930908</p>
            <p>FAQ</p>
            <p>Track your order</p>
          </div>
        </div>
        <div className="">
          <h5 className="mb-4 ">OUR COMPANY</h5>
          <div className="d-flex flex-column gap-3">
            <Link className="text-white text-decoration-none" to="/">
              Products
            </Link>

            <Link className="text-white text-decoration-none" to="aboutUs">
              About
            </Link>
            <Link className="text-white text-decoration-none" to="contact">
              Contact
            </Link>
          </div>
        </div>
        <div className="">
          <h5 className="mb-4 ">SHOP</h5>
        </div>
        <div className="">
          <h5 className="mb-4 ">CONNECT WITH US</h5>
        </div>
      </div>
    </div>
  );
};

export default Footer;
