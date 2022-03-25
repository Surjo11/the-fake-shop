import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
const Product = (props) => {
  const { product } = props;
  return (
    <div>
      <div className="product-container">
        <img src={product.picture} alt="" />
        <div className="product-info">
          <h3>Name: {product.name}</h3>
          <p>Price: {product.price}</p>
          <button className="btn-order">
            Add to Order <FontAwesomeIcon icon={faCartShopping} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
