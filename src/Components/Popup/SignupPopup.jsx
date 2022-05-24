import PropTypes from "prop-types";
const SignupPopup = (props) => {
  let { loginInformation, setLoginInformation } = props;

  return (
    <div className="popupInputContainer">
      <h1>{props.title}</h1>
      <label>First Name:</label>
      <input
        type="text"
        value={loginInformation.fname}
        onChange={(e) =>
          setLoginInformation({ ...loginInformation, fname: e.target.value })
        }
      />
      <label>Last Name:</label>
      <input
        type="text"
        value={loginInformation.lname}
        onChange={(e) =>
          setLoginInformation({ ...loginInformation, lname: e.target.value })
        }
      />
      <label>Email:</label>
      <input
        type="text"
        value={loginInformation.email}
        onChange={(e) =>
          setLoginInformation({ ...loginInformation, email: e.target.value })
        }
      />

      <label>Password:</label>
      <input
        type="text"
        value={loginInformation.password}
        onChange={(e) =>
          setLoginInformation({ ...loginInformation, password: e.target.value })
        }
      />

      <label>Re-type Password:</label>
      <input
        type="text"
        value={loginInformation.passwordRe}
        onChange={(e) =>
          setLoginInformation({
            ...loginInformation,
            passwordRe: e.target.value,
          })
        }
      />
    </div>
  );
};

SignupPopup.propTypes = {
  title: PropTypes.string.isRequired,
};
export default SignupPopup;
