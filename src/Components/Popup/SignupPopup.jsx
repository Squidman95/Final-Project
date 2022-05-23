import PropTypes from "prop-types";
const SignupPopup = (props) => {
  let {
    fname,
    lname,
    email,
    password,
    passwordRe,
    setfName,
    setlName,
    setEmail,
    setPassword,
    setPasswordRe,
  } = props;

  return (
    <div>
      <h1>{props.title}</h1>
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
    </div>
  );
};

SignupPopup.propTypes = {
  title: PropTypes.string.isRequired,
};
export default SignupPopup;
