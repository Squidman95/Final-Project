import { useEffect, useState } from "react";
import popupStyles from "./popup.module.css";
import PropTypes from "prop-types";
import LoginPopup from "./LoginPopup";
import SignupPopup from "./SignupPopup";
const Popup = (props) => {
// Code for inner components, LoginPopup and SignupPopup:

    const [loginVis, setLoginVis] = useState(false);
    const onLoginClick = () => {
        setLoginVis(true);
        setSignupVis(false);
    }

    const [signupVis, setSignupVis] = useState(false);
    const onSignupClick = () => {
        setSignupVis(true);
        setLoginVis(false);
    }

// Overall popup specific
    const [show, setShow] = useState(false);
 
     const closeHandler = (e) => {
        setShow(false);
        props.onClose(true);
  };
 
  useEffect(() => {
    setShow(props.show);
  }, [props.show]);
 
  return (
    <div
      style={{
        // visibility: show ? "hidden" : "visible",
        visibility: show ? "hidden" : "visible",
        opacity: show ? "0" : "1"
      }}
      className={popupStyles.overlay}
    >
      <div className={popupStyles.popup}>
        <h1>{loginVis || signupVis ? null : props.title}</h1>
        <span className={popupStyles.close} onClick={closeHandler}>
          &times;
        </span>
        <div className={popupStyles.content}>{props.children}</div>
        {
            loginVis ? <LoginPopup title="Log in :)"></LoginPopup>
            : null
        }
        {
            signupVis ? <SignupPopup title="Sign up :)"></SignupPopup>
            : null
        }
        <button onClick={onLoginClick}>Log in!</button>
        <button onClick={onSignupClick}>Sign up!</button>
      </div>
    </div>
  );
};
 
Popup.propTypes = {
  title: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};
export default Popup;