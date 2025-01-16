import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { Facebook, Instagram, X } from "@mui/icons-material";
import { ProductContext } from "../../context/productContext";

const Footer = () => {
  const { setFilter, filterProduct, data, setActiveButton, activeButton } =
    useContext(ProductContext);
  const year = new Date().getFullYear();

  const handleActiveButton = (buttonClick) => {
    setActiveButton(buttonClick);
  };

  return (
    <div className="mt-5 bg-dark text-white pt-5 p-3 footer ">
      <div className="container d-flex justify-content-between gap-2 row m-auto">
        <div className="mb-3 col">
          <h5 className="mb-4 ">CUSTOMER CARE</h5>
          <div>
            <p>Contact us</p>
            <p>Call: 07054930908</p>
            <p>FAQs</p>
            <p>Track your order</p>
          </div>
        </div>
        <div className="mb-3 col">
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
        <div className="mb-3 col">
          <h5 className="mb-4 ">SHOP</h5>
          <div className="">
            <Link
              className={`text-decoration-none text-white  ${
                activeButton === "All" ? "active" : ""
              }`}
              onClick={() => {
                setFilter(data);
                handleActiveButton("All");
              }}
            >
              <p>All</p>
            </Link>
            <Link
              className={`text-decoration-none text-white ${
                activeButton === "Jewelery" ? "active" : ""
              }`}
              onClick={() => {
                filterProduct("jewelery");
                handleActiveButton("Jewelery");
              }}
            >
              <p>Jewelery</p>
            </Link>
            <Link
              className={`text-decoration-none text-white ${
                activeButton === "Electronic" ? "active" : ""
              }`}
              onClick={() => {
                filterProduct("electronics");
                handleActiveButton("Electronic");
              }}
            >
              <p>Electronic</p>
            </Link>
            <Link
              className={`text-decoration-none text-white ${
                activeButton === "Men's clothing" ? "active" : ""
              }`}
              onClick={() => {
                filterProduct("men's clothing");
                handleActiveButton("Men's clothing");
              }}
            >
              <p>Men's clothing</p>
            </Link>
            <Link
              className={`text-decoration-none text-white  ${
                activeButton === "Women's clothing" ? "active" : ""
              }`}
              onClick={() => {
                filterProduct("women's clothing");
                handleActiveButton("Women's clothing");
              }}
            >
              <p>Women's clothing</p>
            </Link>
          </div>
        </div>
        <div className="mb-3 footer-connect-with-us col">
          <h5 className="mb-4 ">CONNECT WITH US</h5>
          <div>
            <p className="m-0 fs-6 fw-bold">Visit us @</p>
            <p>
              40 Idowina Street <br /> Off Upper Mission <br /> Benin City, Edo,
              Nigeria.
            </p>
            <div className="d-flex gap-2 mb-3">
              <Link
                className="text-white"
                to="https://x.com/OdiaseAkhere?t=Ym1s4PbNYBdcRNdLhb39Yw&s=08"
              >
                <span>
                  <X className="footer-icon" color="inherit" />
                </span>
              </Link>
              <Link to="https://www.instagram.com/odiase.paul?igsh=ZGUzMzM3NWJiOQ==">
                <span>
                  <Instagram className="footer-icon" color="error" />
                </span>
              </Link>
              <Link to="https://www.facebook.com/odiase.paul?mibextid=ZbWKwL">
                <span>
                  <Facebook className="footer-icon" color="info" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="d-flex justify-content-center mt-5 footer-reserved-right">
        <p> Copyright © {year} - All Right Reserved | PAKH</p>
      </div>
    </div>
  );
};

export default Footer;
