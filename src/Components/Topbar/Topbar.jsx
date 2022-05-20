import React from "react";
import "./Topbar.scss";
import ButtonDropdown from "../ButtonDropdown/ButtonDropdown";
// import BasketButton from "../BasketButton/BasketButton";
import Button from "../../Components/Button/Button";

function LoggedInTopbar(props) {
  let productsInBasket = 0;

  return (
    <div class="topnav Topbar">
      <div className="Topbar-left-container">
        <div className="TopbarButtonContainer">
          <Button
            to="/"
            onClick={() => console.log("Logging out")}
            btnText="Home"
          />
        </div>
      </div>
      <div className="Topbar-middle-container">
        <a href="#news">News for members</a>
      </div>
      <div className="Topbar-right-container">
        <div className="TopbarButtonContainer">
          <Button
            onClick={() => console.log("Logging out")}
            btnText="Log out"
          />
        </div>
        <ButtonDropdown />
        <div className="BasketButtonContainer">
          <Button
            to="/Basket"
            onClick={() => console.log("Navigating to Basket")}
            imageSrc="/assets/images/icons/add-basket-icon.png"
            imageClass="default-img-loc"
            btnText={productsInBasket}
          />
        </div>
      </div>
    </div>
  );
}

function LoggedOutTopbar(props) {
  return (
    <div class="topnav Topbar">
      <div className="Topbar-left-container">
        <a class="active" href="#home">
          Home
        </a>
      </div>
      <div className="Topbar-middle-container">
        <a href="#news">News for guests</a>
      </div>
      <div className="Topbar-right-container">
        <a href="#about">Log in</a>
        <div className="ProductButtonContainer">
          <Button
            to="/Basket"
            onClick={() => console.log("Navigating to Basket")}
            imageSrc="/assets/images/icons/add-basket-icon.png"
            imageClass="default-img-loc"
            btnText="Add to basket!"
          />
        </div>
        {/* <BasketButton /> */}
      </div>
    </div>
  );
}

function Topbar(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <LoggedInTopbar />;
  } else {
    return <LoggedOutTopbar />;
  }
}

export default Topbar;
