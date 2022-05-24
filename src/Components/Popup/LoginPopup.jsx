import PropTypes from "prop-types";
const LoginPopup = (props) => {
  let {
    fname,
    lname,
    email,
    password,
    setfName,
    setlName,
    setEmail,
    setPassword,
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
    </div>
  );
};

LoginPopup.propTypes = {
  title: PropTypes.string.isRequired,
};
export default LoginPopup;
