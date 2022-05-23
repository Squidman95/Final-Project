import PropTypes from "prop-types";
import React, { useState } from "react";
import { login } from "../../Service/CustomerService";
const LoginPopup = (props) => {
  const [fname, setfName] = useState("");
  const [lname, setlName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userID, setUserID] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    login(fname, lname, email, password)
      .then((loginResponse) => {
        setUserID(loginResponse.userID);
        console.log("Successful login, new userID is: " + userID);
        localStorage.setItem("UserID", userID);
      })
      .catch((error) => {
        console.log("error", error);
        // alert(error);  // Display some error if login is wrong
      });

    // let loginResponse = login(fname, lname, email, password);
    // console.log("Resp: " + loginResponse);
    // if (loginResponse == null) {
    //   alert(`No user exists with that info`);
    // } else {
    //   console.log(`Update userID to: ${loginResponse.userID}`);
    // }
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
