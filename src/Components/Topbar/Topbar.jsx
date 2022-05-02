import React from "react";
import "./Topbar.scss";
import ButtonDropdown from "../ButtonDropdown/ButtonDropdown";

/*const Topbar = (props) => {
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
*/
const Topbar = (props) => {
  return (
    <div class="topnav Topbar">
      <div className="Topbar-left-container">
        <a class="active" href="#home">Home</a>
      </div>
      <div className="Topbar-middle-container">
        <a href="#news">News</a>
      </div>
      <div className="Topbar-right-container">
        <a href="#about">Log in</a>
        <ButtonDropdown/>
        <a href="#about"><img className="Topbar-right-basketimage" src={require('./basket-icon.png')}></img></a>
      </div>
    </div>
  );
};

export default Topbar;