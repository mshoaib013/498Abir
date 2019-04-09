import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "../styles/admin.css";
import firebase from "../utils/firebase";
import CreateOfficeForm from "./create_office_form";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <CreateOfficeForm />
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
)(Admin);
