import React from "react";
import "./Order.css";
const Order = (props) => {
  const { singleOrder } = props;
  return (
    <div className="order">
      <img src={singleOrder.picture} alt="" />
      <div>
        <p>
          <strong>Name: </strong> {singleOrder.name}
        </p>
      </div>
    </div>
  );
};

export default Order;
