import React from "react";
import "./Topbar.scss";
import ButtonDropdown from "../ButtonDropdown/ButtonDropdown";

const Topbar = (props) => {
  return (
    <div className="Topbar">
      <div className="Topbar-left-container">
          <a href="#FrontPage">Home</a>
      </div>
      <div className="Topbar-middle-container">
          <p>Hello us</p>

      </div>
      <div className="Topbar-right-container">
          <a>Log out</a>
          
          <ButtonDropdown />
          
          <a href="#BasketPage"><img className="Topbar-right-basketimage" src={require('./basket-icon.png')}></img></a>
      </div>
    </div>
  );
};

export default Topbar;