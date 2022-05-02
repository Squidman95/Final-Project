import React from "react";
import "./ButtonDropdown.scss";

const ButtonDropdown = () => {
    return (
        <div class="dropdown">
            <button class="dropbtn">Dropdown</button>
            <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
            </div>
        </div>
    )
}

export default ButtonDropdown