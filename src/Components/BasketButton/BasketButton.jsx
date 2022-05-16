import React from "react";
import "./BasketButton.scss";

const BasketButton = (props) => {
  return (
    <div className="ButtonContainer">
      <a href="#cart">
        <img
          className="Topbar-right-basketimage"
          src="/assets/images/icons/basket-icon.png"
          alt="cart"
        ></img>
        <div id="BasketButtonCounter">0</div>
      </a>
    </div>
  );
};

export default BasketButton;
