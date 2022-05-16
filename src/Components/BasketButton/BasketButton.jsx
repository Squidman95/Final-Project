import React from "react";
import "./BasketButton.scss";

const BasketButton = (props) => {
  return (
      <a className="ButtonContainer" href="#cart">
        <span>Cart</span>
        <div id="BasketButtonCounter">0</div>
      </a>
  );
};

export default BasketButton;
