import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <div>
      <h1 className="header">
        The Fake Shop <FontAwesomeIcon icon={faLaptop} />
      </h1>
      <h2 className="">Welcome to our Fake Shop</h2>
      <h3>Choose Your Desire Laptop</h3>
    </div>
  );
};

export default Header;
