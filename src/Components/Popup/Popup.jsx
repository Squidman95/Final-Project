import { useEffect, useState } from "react";
import popupStyles from "./popup.module.css";
import PropTypes from "prop-types";
import LoginPopup from "./LoginPopup";
import SignupPopup from "./SignupPopup";
const Popup = (props) => {

  let {
    setVisibility,
    visibility
  } = props;

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

  // Overall popup specific
  let popupMsg = "Log in to get membership discounts!";

  return (
    <div
      style={{
        visibility: visibility ? "visible" : "hidden",
        opacity: visibility ? "1" : "0",
      }}
      className={popupStyles.overlay}
    >
      <div className={popupStyles.popup}>
        <h1>{loginVis || signupVis ? null : popupMsg}</h1>
        <span className={popupStyles.close} onClick={() => {setVisibility(false)}}>
          &times;
        </span>
        <div className={popupStyles.content}>{props.children}</div>
          {loginVis ? <LoginPopup title="Log in :)"></LoginPopup> : null}
          {signupVis ? <SignupPopup title="Sign up :)"></SignupPopup> : null}
        <button onClick={onLoginClick}>Log in!</button>
        <button onClick={onSignupClick}>Sign up!</button>
      </div>
    </div>
  );
};

Popup.propTypes = {
  visibility: PropTypes.bool.isRequired,
  setVisibility: PropTypes.func.isRequired,
};
export default Popup;
