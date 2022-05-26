import React from "react";
import "./Topbar.scss";
import Button from "../../Components/Button/Button";

function Topbar(props) {
  let {
    setLogin,
    isLoggedIn,
    setVisibility,
    visibility,
    setTopbarText,
    topbarText,
    basket,
  } = props;

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
        <div
          className={`TopbarButtonContainer ${
            !isLoggedIn ? `TopbarLoginButtonContainer` : ``
          }`}
        >
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
            }
            btnText={isLoggedIn ? "Log out" : "Log in"}
          />
        </div>

        <div className="TopbarButtonContainer">
          <Button
            to="/Basket"
            onClick={() => console.log("Navigating to Basket")}
            imageSrc="/assets/images/icons/basket-icon.png"
            imageClass="default-img-loc"
            btnText={basket.length}
          />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
