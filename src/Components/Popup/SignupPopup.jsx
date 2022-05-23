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
<<<<<<< HEAD
      <label for="name">First name:</label>
      <br />
      <input class="form-control mx-auto" type="text" id="name" name="name" />
      <br />

      <label for="email">Last name:</label>
      <br />
      <input class="form-control mx-auto" type="text" id="email" name="email" />
=======
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

        <label>Re-type Password:</label>
        <br />
        <input
          type="text"
          value={passwordRe}
          onChange={(e) => setPasswordRe(e.target.value)}
        />
        <br />

        <input type="submit" />
      </form>

      {/* <label for="fname">First Name:</label>
      <br />
      <input class="form-control mx-auto" type="text" id="fname" name="fname" />
      <br />

      <label for="lname">Last Name:</label>
      <br />
      <input class="form-control mx-auto" type="text" id="lname" name="lname" />
>>>>>>> ad19753bb46d39d53e2573e51f3438e03c9145db
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
<<<<<<< HEAD
      <br />
=======
      <br /> */}
>>>>>>> ad19753bb46d39d53e2573e51f3438e03c9145db
    </div>
  );
};

SignupPopup.propTypes = {
  title: PropTypes.string.isRequired,
};
export default SignupPopup;
