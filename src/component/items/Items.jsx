import "./Items.css";
import { Link } from "react-router-dom";
const Items = ({ image, price, title, button, product, id }) => {
  return (
    <div className="item shadow rounded p-3 py-4 ">
      <div className="item-image-div">
        <img
          className="mb-3 item-image"
          src={image}
          onClick={window.scrollTo(0, 0)}
          alt=""
        />
      </div>
      <div className="item-description-div">
        <p className="d-flex item-heading justify-content-center my-2">
          {title} ...
        </p>
        <div className="item-prices">
          <p className="item-price-new d-flex text-danger justify-content-center my-2">
            ${price}
          </p>
        </div>
        <div className="d-flex justify-content-center my-2">
          <Link
            to={`/products/${product}`}
            className="btn btn-outline-dark item-button btn-sm"
          >
            {button}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Items;
