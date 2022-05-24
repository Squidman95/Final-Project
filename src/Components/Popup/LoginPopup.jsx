import PropTypes from "prop-types";
const LoginPopup = (props) => {
  let {
    // fname,
    // lname,
    // email,
    // password,
    // setfName,
    // setlName,
    // setEmail,
    // setPassword,
    loginInformation,
    setLoginInformation,
  } = props;

  return (
    <div>
      <h1>{props.title}</h1>
      <label>First Name:</label>
      <input
        type="text"
        value={loginInformation.fname}
        onClick = {(e) => {console.log('a')}}
        onChange={(e) => setLoginInformation({...loginInformation, fname: e.target.value})}
      />
      <label>Last Name:</label>
      <input
        type="text"
        value={loginInformation.lname}
        onChange={(e) => setLoginInformation({...loginInformation, lname: e.target.value})}
      />
      <label>Email:</label>
      <input
        type="text"
        value={loginInformation.email}
        onChange={(e) => setLoginInformation({...loginInformation, email: e.target.value})}
      />

      <label>Password:</label>
      <input
        type="text"
        value={loginInformation.password}
        onChange={(e) => setLoginInformation({...loginInformation, password: e.target.value})}
      />
    </div>
  );
};

LoginPopup.propTypes = {
  title: PropTypes.string.isRequired,
};
export default LoginPopup;
