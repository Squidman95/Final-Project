import PropTypes from "prop-types";
import React, { useState } from "react";
const SignupPopup = (props) => {
  let { userId } = props;
  console.log(`userId: ${userId}`);

  const [fname, setfName] = useState("");
  const [lname, setlName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRe, setPasswordRe] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== passwordRe) {
      alert(`Passwords do not match`);
    } else {
      console.log(
        `Send info to backend:\nFirst Name: ${fname}\nLast Name: ${lname}\nEmail: ${email}\nPassword: ${password}\nPassword Re: ${passwordRe}`
      );
    }
  };

  return (
    <div>
      <h1>{props.title}</h1>
      <label for="name">First name:</label>
      <br />
      <input class="form-control mx-auto" type="text" id="name" name="name" />
      <br />

      <label for="email">Last name:</label>
      <br />
      <input class="form-control mx-auto" type="text" id="email" name="email" />
      <br />

      <label for="email">Email:</label>
      <br />
      <input class="form-control mx-auto" type="text" id="email" name="email" />
      <br />

      <label for="password">Password:</label>
      <br />
      <input
        class="form-control mx-auto"
        type="text"
        id="password"
        name="password"
      />
      <br />

      <label for="password">Re-type Password:</label>
      <br />
      <input
        class="form-control mx-auto"
        type="text"
        id="passwordRe"
        name="passwordRe"
      />
      <br />
    </div>
  );
};

SignupPopup.propTypes = {
  title: PropTypes.string.isRequired,
};
export default SignupPopup;
