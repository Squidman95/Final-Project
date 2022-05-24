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
      <input
        type="text"
        value={fname}
        onChange={(e) => setfName(e.target.value)}
      />
      <label>Last Name:</label>
      <input
        type="text"
        value={lname}
        onChange={(e) => setlName(e.target.value)}
      />
      <label>Email:</label>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Password:</label>
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <label>Re-type Password:</label>
      <input
        type="text"
        value={passwordRe}
        onChange={(e) => setPasswordRe(e.target.value)}
      />
    </div>
  );
};

SignupPopup.propTypes = {
  title: PropTypes.string.isRequired,
};
export default SignupPopup;
