import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "../styles/admin.css";
import firebase from "../utils/firebase";

class CreateOfficeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      o_name: "",
      o_password: "",
      o_email: "",
      o_address: ""
    };
    this.createOffice = this.createOffice.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  createOffice() {
    console.log(this.state.address);

    var officeObject = {
      o_name: this.state.name,
      o_email: this.state.email,
      o_address: this.state.address,
      o_status: true
    };

    //here we use set because there are even number of variables
    const db = firebase.firestore();
    const officesRef = db
      .collection("offices")
      .doc(this.state.email)
      .set(officeObject)
      .then({})
      .catch({});

    return false;
  }

  onInputChange(e) {
    console.log("input changed");
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div>
        <form className="create-office-id">
          <h3>Create Organization</h3>
          <input
            type="text"
            placeholder="office name"
            name="o_name"
            value={this.props.name}
            onChange={this.onInputChange}
          />
          <input
            type="text"
            placeholder="office email"
            name="o_email"
            value={this.props.email}
            onChange={this.onInputChange}
          />
          <input
            type="text"
            placeholder="office password"
            name="o_password"
            value={this.props.password}
            onChange={this.onInputChange}
          />
          <input
            type="text"
            placeholder="office address"
            name="o_address"
            value={this.props.address}
            onChange={this.onInputChange}
          />
          <button type="button" onClick={this.createOffice}>
            create
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateOfficeForm);
