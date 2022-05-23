import { useState } from "react";
import popupStyles from "./popup.module.css";
import PropTypes from "prop-types";
import LoginPopup from "./LoginPopup";
import SignupPopup from "./SignupPopup";
import Button from "../Button/Button";
import "./popup.scss";
import { login, createCustomer } from "../../Service/CustomerService";

const Popup = (props) => {
  let { setVisibility, visibility, userID, setUserID, setLogin, headerText } =
    props;

  const [loginVis, setLoginVis] = useState(false);
  // Code for inner components, LoginPopup and SignupPopup:
  const [fname, setfName] = useState("");
  const [lname, setlName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRe, setPasswordRe] = useState("");

  const onLoginClick = (event) => {
    if (loginVis) {
      event.preventDefault();
      login(fname, lname, email, password)
        .then((response) => response)
        .then((result) => {
          console.log(result);
          if (result.err) {
            alert(result.err);
          } else {
            setUserID(result.userID);
            localStorage.setItem("UserID", result.userID);
            console.log("Successful login, new userID is: " + result.userID);
            setLogin(true);
            localStorage.setItem("LoginStatus", "true");
            setVisibility(false);
          }
        })
        .catch((error) => {
          console.log("error", error);
        });
    } else {
      setLoginVis(true);
      setSignupVis(false);
    }
  };

  const [signupVis, setSignupVis] = useState(false);
  const onSignupClick = (event) => {
    if (signupVis) {
      event.preventDefault();
      if (password !== passwordRe) {
        alert(`Passwords do not match`);
      } else {
        createCustomer(userID, fname, lname, email, password);
        setLogin(true);
        localStorage.setItem("LoginStatus", "true");
        setVisibility(false);
      }
    } else {
      setSignupVis(true);
      setLoginVis(false);
    }
  };

  const [popupCount, setCount] = useState(0);

  return (
    <div
      style={{
        visibility: visibility ? "visible" : "hidden",
        opacity: visibility ? "1" : "0",
      }}
      className={popupStyles.overlay}
    >
      <div className={popupStyles.popup}>
        <h1>{headerText}</h1>

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
        {loginVis ? (
          <LoginPopup
            title="Log in :)"
            setLogin={setLogin}
            setfName={setfName}
            setlName={setlName}
            setEmail={setEmail}
            setPassword={setPassword}
            fname={fname}
            lname={lname}
            email={email}
            password={password}
            setVisibility={setVisibility}
            visibility={visibility}
          ></LoginPopup>
        ) : null}
        {signupVis ? (
          <SignupPopup
            title="Sign up :)"
            userID={userID}
            setLogin={setLogin}
            setfName={setfName}
            setlName={setlName}
            setEmail={setEmail}
            setPassword={setPassword}
            setPasswordRe={setPasswordRe}
            fname={fname}
            lname={lname}
            email={email}
            password={password}
            passwordRe={passwordRe}
            setVisibility={setVisibility}
            visibility={visibility}
          ></SignupPopup>
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
};
export default Popup;
