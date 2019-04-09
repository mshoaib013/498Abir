import React, { Component } from "react";
import withFirebaseAuth from "react-auth-firebase";

import firebase from "../utils/firebase";
import Home from "./home";
import SignIn from "../components/auth/sign_in";
import "../styles/App.css";
import { bindActionCreators } from "redux";
import { fetchOfficeProfile } from "../actions/action_office_profile";
import { connect } from "react-redux";

// const email = "test@test.com";
// const password = "password";

class App extends Component {
  state = {
    email: `test@test.com`,
    password: `password`
  };
  checkStatus = true;
  componentDidMount() {}
  componentWillReceiveProps(nextProps) {
    console.log(nextProps.loggedInUsedr);
  }

  render() {
    const {
      signInWithEmail,
      signUpWithEmail,
      user,
      error,
      signOut
    } = this.props;

    const { email, password } = this.state;
    // if (this.props.loggedInUsedr) {
    if (user) {
      // console.log(user.email);
      // this.props.fetchOfficeProfile(user.email);
      return <Home user={user} error={error} signOut={signOut} />;
    } else {
      return <SignIn />;
    }
    // } else {
    //   return <SignIn />;
    // }
  }
}

const authConfig = {
  email: {
    verifyOnSignup: false,
    saveUserInDatabase: true
  }
};

function mapStateToProps(loggedInUsedr) {
  return { loggedInUsedr };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchOfficeProfile }, dispatch);
}
// export default withFirebaseAuth(
//   connect(mapStateToProps)(App, firebase, authConfig)
// );
// // export default App;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withFirebaseAuth(App, firebase, authConfig));
