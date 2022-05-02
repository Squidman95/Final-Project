import React from "react";
import './Topbar.scss'

const Topbar = () => {
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
          
          <div className="Topbar-dropdown">
              <a>Options</a>
          </div>
          
          <a href="#BasketPage"><img className="Topbar-right-basketimage" src='basket-icon.png'></img></a>
      </div>
    </div>
  );
};

export default Topbar;