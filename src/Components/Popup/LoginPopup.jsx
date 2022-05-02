import PropTypes from "prop-types";
const LoginPopup = (props) => {
  return (
    <div>
        <h1>{props.title}</h1>
        <label for="email">Email:</label><br />
        <input
            class="form-control mx-auto"
            type="text"
            id="email"
            name="email"
        /><br />
        
        <label for="password">Password:</label><br/>
        <input
            class="form-control mx-auto"
            type="text"
            id="password"
            name="password"
        /><br/>
    </div>
  );
};
 
LoginPopup.propTypes = {
  title: PropTypes.string.isRequired
};
export default LoginPopup;