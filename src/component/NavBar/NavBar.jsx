import { Link } from "react-router-dom";
import "./NavBar.css";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/cartContext";

const NavBar = () => {
  const { cartItem, userDetails, handleLogout } = useContext(CartContext);
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (buttonClick) => {
    setActiveButton(buttonClick);
  };
  useEffect(() => {
    setActiveButton("Products");
  }, []);
  return (
    <div className="navigation-bar ">
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container">
          <Link className="navbar-brand pakh fw-bold" to="/">
            PAKH
          </Link>
          <button
            className="navbar-toggler navbar-toggle-size"
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
                <Link
                  className={`nav-link ${
                    activeButton === "Products" ? "text-danger" : ""
                  }`}
                  onClick={() => handleClick("Products")}
                  aria-current="page"
                  to="/"
                >
                  Products
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    activeButton === "Abouts" ? "text-danger" : ""
                  }`}
                  onClick={() => handleClick("Abouts")}
                  to="aboutUs"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    activeButton === "Contact" ? "text-danger" : ""
                  }`}
                  onClick={() => handleClick("Contact")}
                  to="contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <div className="d-flex column-gap-3">
              {userDetails ? (
                <Link
                  className=" btn btn-outline-dark btn-sm"
                  onClick={handleLogout}
                >
                  <span className="fa fa-sign-in me-1"></span> Logout
                </Link>
              ) : (
                <Link to="/login" className=" btn btn-outline-dark btn-sm">
                  <span className="fa fa-user-plus me-1"></span> Login
                </Link>
              )}

              <Link to="/cart" className="btn btn-outline-dark btn-sm">
                <span className="fa fa-shopping-cart me-1"></span> Cart (
                <span className="text-danger fw-bold">
                  {" "}
                  {cartItem?.length}{" "}
                </span>
                )
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
