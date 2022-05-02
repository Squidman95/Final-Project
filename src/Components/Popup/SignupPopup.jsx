import PropTypes from "prop-types";
const SignupPopup = (props) => {
  return (
    <div>
        <h1>{props.title}</h1>
        <label for="name">Name:</label><br />
        <input
            class="form-control mx-auto"
            type="text"
            id="name"
            name="name"
        /><br />
        
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
        
        <label for="password">Re-type Password:</label><br/>
        <input
            class="form-control mx-auto"
            type="text"
            id="passwordRe"
            name="passwordRe"
        /><br/>
    </div>
  );
};
 
SignupPopup.propTypes = {
  title: PropTypes.string.isRequired
};
export default SignupPopup;