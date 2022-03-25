import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";
import Order from "../Order/Order";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListOl } from "@fortawesome/free-solid-svg-icons";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [order, setOrder] = useState([]);
  useEffect(() => {
    fetch("fakeData.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  const handelAddToOrder = (product) => {
    const newOrder = [...order, product];
    setOrder(newOrder);
  };
  return (
    <div className="shop-order-container">
      <div className="shop-container">
        {products.map((product) => (
          <Product
            handelAddToOrder={handelAddToOrder}
            key={product.id}
            product={product}
          ></Product>
        ))}
      </div>
      <div className="order-container">
        <h2>
          Order Summary <FontAwesomeIcon icon={faListOl} />
        </h2>
        {order.map((singleOrder) => (
          <Order key={singleOrder.id} singleOrder={singleOrder}></Order>
        ))}
      </div>
    </div>
  );
};

export default Shop;
