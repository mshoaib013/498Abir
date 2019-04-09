import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Image from "./image/upload_image";
//import '../styles/search_result_list.css';

class Invited extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };
  }

  render() {
    return (
      <div>
        <Image />
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
)(Invited);
