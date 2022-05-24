import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import LoginPopup from "./LoginPopup";
import SignupPopup from "./SignupPopup";
import Button from "../Button/Button";
import "./popup.scss";
import { login, createCustomer } from "../../Service/CustomerService";

const Popup = (props) => {
  let {
    setVisibility,
    visibility,
    userID,
    setUserID,
    setLogin,
    setTopbarText,
    headerText,
    updateBasket,
  } = props;

  const [loginVis, setLoginVis] = useState(false);

  const [loginInformation, setLoginInformation] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    passwordRe: "",
  });

  const onLoginClick = (event) => {
    if (loginVis) {
      if (ValidateEmail(loginInformation.email)) {
        event.preventDefault();
        login(
          loginInformation.fname,
          loginInformation.lname,
          loginInformation.email,
          loginInformation.password
        )
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
              setTopbarText(
                `Hello again ${loginInformation.fname}! Hope you're having a great day!`
              );
              updateBasket(result.userID);
              setVisibility(false);
            }
          })
          .catch((error) => {
            console.log("error", error);
          });
      }
    } else {
      setLoginVis(true);
      setSignupVis(false);
    }
  };

  function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    alert("You have entered an invalid email address!");
    return false;
  }

  const [signupVis, setSignupVis] = useState(false);
  const onSignupClick = (event) => {
    if (signupVis) {
      event.preventDefault();
      if (loginInformation.password !== loginInformation.passwordRe) {
        alert(`Passwords do not match`);
      }
      if (ValidateEmail(loginInformation.email)) {
        createCustomer(
          userID,
          loginInformation.fname,
          loginInformation.lname,
          loginInformation.email,
          loginInformation.password
        );
        setLogin(true);
        localStorage.setItem("LoginStatus", "true");
        setTopbarText(
          `Hello ${loginInformation.fname}! Thank you for signing up!`
        );
        setVisibility(false);
      }
    } else {
      setSignupVis(true);
      setLoginVis(false);
    }
  };

  return (
    <div
      style={{
        visibility: visibility ? "visible" : "hidden",
        opacity: visibility ? "1" : "0",
      }}
      className="overlay"
    >
      <div className="popup">
        <h1>{headerText}</h1>
        {/* <h1>{headerText}</h1> */}

        <span
          className="close"
          onClick={() => {
            setVisibility(false);
          }}
        >
          &times;
        </span>
        <div className="content">{props.children}</div>
        {loginVis && (
          <LoginPopup
            title="Log in :)"
            setLogin={setLogin}
            loginInformation={loginInformation}
            setLoginInformation={setLoginInformation}
            setVisibility={setVisibility}
            visibility={visibility}
          />
        )}
        {signupVis && (
          <SignupPopup
            title="Sign up :)"
            userID={userID}
            setLogin={setLogin}
            loginInformation={loginInformation}
            setLoginInformation={setLoginInformation}
            setVisibility={setVisibility}
            visibility={visibility}
          />
        )}

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
