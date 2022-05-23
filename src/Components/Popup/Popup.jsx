import { useState } from "react";
import popupStyles from "./popup.module.css";
import PropTypes from "prop-types";
import LoginPopup from "./LoginPopup";
import SignupPopup from "./SignupPopup";
import Button from "../Button/Button";
import "./popup.scss";

const Popup = (props) => {
  let { setVisibility, visibility, userID } = props;

  // Code for inner components, LoginPopup and SignupPopup:
  const [loginVis, setLoginVis] = useState(false);
  const onLoginClick = () => {
    setLoginVis(true);
    setSignupVis(false);
  };

  const [signupVis, setSignupVis] = useState(false);
  const onSignupClick = () => {
    setSignupVis(true);
    setLoginVis(false);
  };

  // counter for number of times popup has appeared
  const [popupCount, setCount] = useState(0);

  // Overall popup specific
  let popupMsgFirst = "Welcome! Sign up or log in to get membership discounts!";
  let popupMsgSecond = "Sign up or log in to get membership discounts!";

  return (
    <div
      style={{
        visibility: visibility ? "visible" : "hidden",
        opacity: visibility ? "1" : "0",
      }}
      className={popupStyles.overlay}
    >
      <div className={popupStyles.popup}>
        <h1 style={{ display: popupCount == 0 ? "block" : "none" }}>
          {popupMsgFirst}
        </h1>
        <h1 style={{ display: popupCount >= 1 ? "block" : "none" }}>
          {popupMsgSecond}
        </h1>
        <span
          className={popupStyles.close}
          onClick={() => {
            setVisibility(false);
            setCount(popupCount + 1);
          }}
        >
          &times;
        </span>
        <div className={popupStyles.content}>{props.children}</div>
        {loginVis ? <LoginPopup title="Log in :)"></LoginPopup> : null}
        {signupVis ? (
          <SignupPopup title="Sign up :)" userID={userID}></SignupPopup>
        ) : null}

        <div className="ButtonsContainer">
          <div className="ProductButtonContainer">
            <Button onClick={onLoginClick} btnText="Log in" />
          </div>

          <div className="ProductButtonContainer">
            <Button onClick={onSignupClick} btnText="Sign up!" />
          </div>
        </div>
      </div>
    </div>
  );
};

Popup.propTypes = {
  visibility: PropTypes.bool.isRequired,
  setVisibility: PropTypes.func.isRequired,
  userID: PropTypes.string.isRequired,
};
export default Popup;
