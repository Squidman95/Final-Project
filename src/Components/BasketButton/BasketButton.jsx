import React from "react";
import "./BasketButton.scss";
import { Link } from "react-router-dom";

const BasketButton = (props) => {
  return (
    <Link to={`/basket`}>
      <div className="ButtonContainer">
        <span>Cart</span>
        <div id="BasketButtonCounter">0</div>
      </div>
    </Link>
        

      // <a className="ButtonContainer" href="#cart">
      //   <span>Cart</span>
      //   <div id="BasketButtonCounter">0</div>
      // </a>
  );
};

export default BasketButton;
