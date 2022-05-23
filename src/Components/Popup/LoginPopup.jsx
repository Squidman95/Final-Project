import PropTypes from "prop-types";
import React, { useState } from "react";
import { login } from "../../Service/CustomerService";
const LoginPopup = (props) => {
  // let { isLoggedIn } = props;
  let { setLogin, setVisibility, visibility } = props;

  const [fname, setfName] = useState("");
  const [lname, setlName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userID, setUserID] = useState("");

  const handleSubmit = (event) => {
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
  };

  return (
    <div>
      <h1>{props.title}</h1>
      <form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <br />
        <input
          type="text"
          value={fname}
          onChange={(e) => setfName(e.target.value)}
        />
        <br />
        <label>Last Name:</label>
        <br />
        <input
          type="text"
          value={lname}
          onChange={(e) => setlName(e.target.value)}
        />
        <br />
        <label>Email:</label>
        <br />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />

        <label>Password:</label>
        <br />
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />

        <input type="submit" />
      </form>
    </div>
  );
};

LoginPopup.propTypes = {
  title: PropTypes.string.isRequired,
};
export default LoginPopup;
