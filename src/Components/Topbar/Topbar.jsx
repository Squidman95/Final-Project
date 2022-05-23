import React from "react";
import "./Topbar.scss";
import ButtonDropdown from "../ButtonDropdown/ButtonDropdown";
import Button from "../../Components/Button/Button";

function Topbar(props) {
  let {
    setLogin,
    isLoggedIn,
    setVisibility,
    visibility,
    setTopbarText,
    topbarText,
  } = props;

  let productsInBasket = 0;

  return (
    <div className="topnav Topbar">
      <div className="Topbar-left-container Topbar-container">
        <div className="TopbarButtonContainer">
          <Button
            to="/"
            onClick={() => console.log("Going to front page")}
            btnText="Home"
          />
        </div>
      </div>

      <div className="Topbar-middle-container Topbar-container">
        <p>{topbarText}</p>
      </div>

      <div className="Topbar-right-container Topbar-container">
        <div className="TopbarButtonContainer">
          <Button
            onClick={
              () => {
                if (isLoggedIn) {
                  setLogin(false);
                  setTopbarText("Happy Shopping!");
                } else {
                  setVisibility(!visibility);
                }
              }
              // isLoggedIn ? setLogin(false) : setVisibility(!visibility)
            }
            btnText={isLoggedIn ? "Log out" : "Log in"}
          />
        </div>

        {isLoggedIn && <ButtonDropdown />}
        <div className="TopbarButtonContainer">
          <Button
            to="/Basket"
            onClick={() => console.log("Navigating to Basket")}
            imageSrc="/assets/images/icons/basket-icon.png"
            imageClass="default-img-loc"
            btnText={productsInBasket}
          />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
