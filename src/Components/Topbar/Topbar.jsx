import React from "react";
import "./Topbar.scss";
import ButtonDropdown from "../ButtonDropdown/ButtonDropdown";
// import BasketButton from "../BasketButton/BasketButton";
import Button from "../../Components/Button/Button";

let productsInBasket = 0;
function LoggedInTopbar(props) {
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
        <div className="TopbarButtonContainer">
          <Button
            to="/"
            onClick={() => console.log("Logging out")}
            btnText="Home"
          />
        </div>
      </div>
      <div className="Topbar-middle-container">
        <a href="#news">News for guests</a>
      </div>
      <div className="Topbar-right-container">
        <div className="TopbarButtonContainer">
          <Button onClick={() => console.log("Logging out")} btnText="Log in" />
        </div>
        <div className="BasketButtonContainer">
          <Button
            to="/Basket"
            onClick={() => console.log("Navigating to Basket")}
            imageSrc="/assets/images/icons/add-basket-icon.png"
            imageClass="default-img-loc"
            btnText={productsInBasket}
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
