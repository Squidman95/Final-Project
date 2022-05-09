import React from "react";
import "./Topbar.scss";
import ButtonDropdown from "../ButtonDropdown/ButtonDropdown";

const Topbar = (props) => {
  const isLoggedIn = props.isLoggedin;
  if (isLoggedIn) {
    return (
      <div class="topnav Topbar">
        <div className="Topbar-left-container">
          <a class="active" href="#home">
            Home
          </a>
        </div>
        <div className="Topbar-middle-container">
          <a href="#news">News</a>
        </div>
        <div className="Topbar-right-container">
          <a href="#about">Log out</a>
          <ButtonDropdown />
          <a href="#about">
            <img
              className="Topbar-right-basketimage"
              src={require("./basket-icon.png")}
            ></img>
          </a>
        </div>
      </div>
    );
  }
  return (
    <div class="topnav Topbar">
      <div className="Topbar-left-container">
        <a class="active" href="#home">
          Home
        </a>
      </div>
      <div className="Topbar-middle-container">
        <a href="#news">News</a>
      </div>
      <div className="Topbar-right-container">
        <a href="#about">Log in</a>
        <ButtonDropdown />
        <a href="#about">
          <img
            className="Topbar-right-basketimage"
            src={require("./basket-icon.png")}
          ></img>
        </a>
      </div>
    </div>
  );
};

export default Topbar;
