import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListOl } from "@fortawesome/free-solid-svg-icons";
const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("fakeData.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="shop-order-container">
      <div className="shop-container">
        {products.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
      <div className="order-container">
        <h2>
          Order Summary <FontAwesomeIcon icon={faListOl} />
        </h2>
      </div>
    </div>
  );
};

export default Shop;
