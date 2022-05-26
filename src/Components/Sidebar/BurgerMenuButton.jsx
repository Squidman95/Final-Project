import React from "react";
import "./BurgerMenuButton.scss";

function BurgerMenuButton(props) {
    let {
        changeSidebarState
    } = props;

    return (
        <div className="BurgerMenuButton">
            <input type="checkbox" name="" id="hamburger" onChange={() => changeSidebarState()} />
            <div className="BurgerMenuButton-lines">
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
            </div>
        </div>
    )
}

export default BurgerMenuButton