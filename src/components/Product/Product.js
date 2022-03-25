import React from "react";
import "./Product.css";
const Product = (props) => {
  const { product } = props;
  return (
    <div>
      <div className="product-container">
        <img src={product.picture} alt="" />
        <div className="product-info">
          <h3>Name: {product.name}</h3>
          <p>Price: {product.price}</p>
          <button className="btn-order">Add to Order</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
