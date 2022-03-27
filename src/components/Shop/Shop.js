import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";
import Order from "../Order/Order";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListOl } from "@fortawesome/free-solid-svg-icons";
const Shop = () => {
  const [products, setProducts] = useState([]);
  // console.log(products);

  const [orders, setOrders] = useState([]);
  // console.log(order);

  useEffect(() => {
    fetch("fakeData.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  // AddToOrder
  const handelAddToOrder = (product) => {
    // console.log(product);
    const newOrder = [...orders, product];
    // console.log(newOrder);
    setOrders(newOrder);
  };

  //Choose Random Item
  const saveOrder = [];
  const  handelRandomItem = (orders) => {
    const random = Math.floor(Math.random() * orders.length);
    saveOrder.push(orders[random]);
    setOrders(saveOrder);
  };

  // Clear Order
  const handelClearOrder = () => {
    setOrders([]);
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
        {orders.map((singleOrder) => (
          <Order key={singleOrder.id} singleOrder={singleOrder}></Order>
        ))}
        <button onClick={()=> handelRandomItem(orders)} className="choose-for-me">Choose one for me</button>
        <br />
        <button onClick={() => handelClearOrder()} className="clear-order">
          Clear Order
        </button>
      </div>
    </div>
  );
};

export default Shop;
