import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import withFirebaseAuth from "react-auth-firebase";
import firebase from "../../utils/firebase";
import { Card } from "react-bootstrap";
import Logo from "../../assets/images/logo.png";
import "../../App.css";
import SignUp from "./sign_up";
// import Bg from "../../assets/images/bg.png";
class SignIn extends Component {
  state = {
    email: `test@test.com`,
    phone: `test@test.com`,
    password: `password`
  };
  checkStatus = true;
  constructor(props) {
    super(props);
    this.state = {};
    this.signinWithPhone = this.signinWithPhone.bind(this);
  }
  signinWithPhone() {
    var phoneNo = document.getElementById("phoneInput").value;
    console.log(phoneNo);
    var phoneCaptchaa = document.getElementById("phoneCaptcha").value;
    console.log(phoneCaptchaa);
  }
  // signinWithPhone() {
  //   // firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
  //   firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
  //     .then(function (confirmationResult) {
  //       // confirmationResult can resolve with the whitelisted testVerificationCode above.
  //       return confirmationResult.confirm(testVerificationCode)
  //     }).catch(function (error) {
  //       // Error; SMS not sent
  //       // ...
  //     })}

  render() {
    const {
      signInWithEmail,
      signUpWithEmail,
      user,
      error,
      signOut
    } = this.props;
    const { email, password } = this.state;
    return (
      <div className="App">
        <h1>Smart Queue </h1>
        <h1> Management System</h1>
        <div className="signinOuter row">
          <div className="signinInner col">
            <br />
            {/* <div className="col-6 container"> */}
            <div className="">
              <h4>Email Signin</h4>
              {/* <img className="logoo" src={Logo} /> */}
              <form className="sign-in-form" onSubmit={e => e.preventDefault()}>
                <input
                  type="text"
                  placeholder="Email"
                  onChange={e => this.setState({ email: e.target.value })}
                />
                <br />
                <input
                  type="password"
                  placeholder="Password"
                  onChange={e => this.setState({ password: e.target.value })}
                />
                <br />
                {!user && (
                  <button
                    className="button-submit"
                    type="submit"
                    onClick={() => signInWithEmail(email, password)}
                  >
                    SignIn
                  </button>
                )}
              </form>
            </div>
          </div>
          <div className="signinInner col">
            <br />
            <h4>Email Signup</h4>
            <SignUp />
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}
function mapStateToProps({}) {
  return {};
}
const authConfig = {
  email: {
    verifyOnSignup: false,
    saveUserInDatabase: true
  }
};
export default withFirebaseAuth(SignIn, firebase, authConfig);
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(SignIn);
