import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import withFirebaseAuth from "react-auth-firebase";
import firebase from "../../utils/firebase";

class SignIn extends Component {
  state = {
    email: `test@test.com`,
    password: `password`
  };
  checkStatus = true;

  constructor(props) {
    super(props);
    this.state = {};
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

    return (
      <div>
        <form className="sign-in-form" onSubmit={e => e.preventDefault()}>
          <input
            type="text"
            placeholder="Email"
            onChange={e =>
              this.setState({
                email: e.target.value
              })
            }
            value={email}
          />{" "}
          <br />
          <input
            type="password"
            placeholder="Password"
            onChange={e => this.setState({ password: e.target.value })}
            value={password}
          />{" "}
          <br />
          <button
            type="submit"
            onClick={() => signUpWithEmail(email, password)}
          >
            SignUp
          </button>
        </form>
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
