import { Link } from "react-router-dom";
import "./NavBar.css";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
const NavBar = () => {
  const { getTotalCartItem } = useContext(CartContext);
  return (
    <div className="navigation-bar">
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">
            PAKH
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav fs-5 fw-normal mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="contact">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="d-flex column-gap-3">
              <Link to="/login" className=" btn btn-outline-dark btn-sm">
                <span className="fa fa-sign-in me-1"></span> Login
              </Link>
              <Link to="/register" className=" btn btn-outline-dark btn-sm">
                <span className="fa fa-user-plus me-1"></span> Register
              </Link>
              <Link to="/cart" className="btn btn-outline-dark btn-sm">
                <span className="fa fa-shopping-cart me-1"></span> Cart (
                {getTotalCartItem()})
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
