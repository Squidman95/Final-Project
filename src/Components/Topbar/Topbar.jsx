import React from "react";
import "./Topbar.scss";
import ButtonDropdown from "../ButtonDropdown/ButtonDropdown";

function LoggedInTopbar(props) {
  return (
    <div class="topnav Topbar">
      <div className="Topbar-left-container">
        <a class="active" href="#home">
          Home
        </a>
      </div>
      <div className="Topbar-middle-container">
        <a href="#news">News for members</a>
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

function Topbar(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <LoggedInTopbar />;
  } else {
  return <LoggedOutTopbar />;
  }
}

export default Topbar;
