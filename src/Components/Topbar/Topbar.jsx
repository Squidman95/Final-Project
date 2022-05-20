import React from "react";
import "./Topbar.scss";
import ButtonDropdown from "../ButtonDropdown/ButtonDropdown";
import Button from "../../Components/Button/Button";

function Topbar(props) {
  let { isLoggedIn, userId, setVisibility, productsInBasket } = props;

  return (
    <div className="topnav Topbar">
      <div className="Topbar-left-container">
        <div className="TopbarButtonContainer">
          <Button
            to="/"
            onClick={() => console.log("Going to front page")}
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
            onClick={() => isLoggedIn ? console.log("Logging out") : setVisibility(true)}
            btnText= {isLoggedIn ? "Log out" : "Log in"}
          />
        </div>
        {isLoggedIn && 
          <ButtonDropdown />
        }
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

export default Topbar;
