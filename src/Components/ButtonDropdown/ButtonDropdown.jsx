import React from "react";
import "./ButtonDropdown.scss";

const ButtonDropdown = (props) => {
  return (
    <div className="dropdown">
      <button className="dropbtn">Options</button>
      <div className="dropdown-content">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
      </div>
    </div>
  );
};

export default ButtonDropdown;
