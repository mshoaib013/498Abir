import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ReactDOM from "react-dom";
import "../../styles/addInput.css";
import _ from "lodash";
import firebase from "../../utils/firebase";
import {
  fetchOfficeProfile,
  editOfficeProfile
} from "../../actions/action_office_profile";
// import { delete_table_row } from "../../actions/action_table_row_delete_status";
// import { fetchGuardPhoneData } from "../../actions/index";
import { OFFICES } from "../../constants/db_ref_constants";
// import Guard_Phone_Show from "./guard_phone_show";
import { Table, Card } from "react-bootstrap";
import "../../styles/office.css";
var loadStatus = 0;
class Office extends React.Component {
  constructor() {
    super();
    this.state = {
      o_mail: "",
      coFiveTime: 60,
      coFiveTotal: 0,
      coFourTime: 60,
      coFourTotal: 0,
      coOneTime: 60,
      coOneTotal: 0,
      coThreeTime: 60,
      coThreeTotal: 0,
      coTwoTime: 60,
      coTwoTotal: 0
    };
    this.getQROne = this.getQROne.bind(this);
    // this.newBuilding = "";
    // this.onInputChange = this.onInputChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.isSelected = this.isSelected.bind(this);
    // this.addMore = this.addMore.bind(this);
    // this.getGuardPhone = this.getGuardPhone.bind(this);
  }
  guardPhone = "";
  fieldVal = {
    o_mail: "",
    coFiveTime: 60,
    coFiveTotal: 0,
    coFourTime: 60,
    coFourTotal: 0,
    coOneTime: 60,
    coOneTotal: 0,
    coThreeTime: 60,
    coThreeTotal: 0,
    coTwoTime: 60,
    coTwoTotal: 0
  };

  componentDidMount() {
    console.log("mounted and data is", this.props.office_data);
    if (this.props.office_data.o_mail != null) {
      // this.props.fetchOfficeProfile(this.props.loggedInUsedr.o_mail);
      // this.props.fetchGuardPhoneData(this.props.loggedInUsedr.o_mail);
      this.fieldVal.o_mail = this.props.office_data.o_mail;
      this.fieldVal.coOneTime = this.props.office_data.coOneTime;
      this.fieldVal.coOneTotal = this.props.office_data.coOneTotal;
      this.fieldVal.coThreeTime = this.props.office_data.coThreeTime;
      this.fieldVal.coThreeTotal = this.props.office_data.coThreeTotal;
      this.fieldVal.coTwoTime = this.props.office_data.coTwoTime;
      this.fieldVal.coTwoTotal = this.props.office_data.coTwoTotal;
      this.fieldVal.coFourTime = this.props.office_data.coFourTime;
      this.fieldVal.coFourTotal = this.props.office_data.coFourTotal;
      this.fieldVal.coFiveTime = this.props.office_data.coFiveTime;
      this.fieldVal.coFiveTotal = this.props.office_data.coFiveTotal;
      this.setState({ ...this.setState });
    }
  }
  // eslint-disable-next-line no-dupe-class-members
  componentWillReceiveProps(a) {
    console.log("found from component did mount", a.office_data);
    if (a.office_data.o_mail != null) {
      this.fieldVal.o_mail = this.props.office_data.o_mail;
      this.fieldVal.coOneTime = this.props.office_data.coOneTime;
      this.fieldVal.coOneTotal = this.props.office_data.coOneTotal;
      this.fieldVal.coThreeTime = this.props.office_data.coThreeTime;
      this.fieldVal.coThreeTotal = this.props.office_data.coThreeTotal;

      this.fieldVal.coTwoTime = this.props.office_data.coTwoTime;
      this.fieldVal.coTwoTotal = this.props.office_data.coTwoTotal;
      this.fieldVal.coFourTime = this.props.office_data.coFourTime;
      this.fieldVal.coFourTotal = this.props.office_data.coFourTotal;
      this.fieldVal.coFiveTime = this.props.office_data.coFiveTime;
      this.fieldVal.coFiveTotal = this.props.office_data.coFiveTotal;

      this.setState({ ...this.setState });
    }
    console.log(this.fieldVal);
    if (a.loggedInUsedr.o_mail != null) {
      //console.log(a.loggedInUsedr.o_mail, loadStatus);
      if (loadStatus <= 1) {
        this.props.fetchOfficeProfile(this.props.loggedInUsedr.o_mail);
        // this.props.fetchGuardPhoneData(this.props.loggedInUsedr.o_mail);
        loadStatus++;
      }
    }
  }
  getQROne() {
    return (
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      this.props.loggedInUsedr.o_mail +
      "coOneTotal"
    );
  }
  render() {
    return (
      <Card className="cdrdView">
        <Card.Header>
          <h3 className="rokkhiCol">Office Profile</h3>
        </Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <div className="officeProfileDesi">
              <div
                id="officeUpdateAlert"
                style={{ display: "none" }}
                className="alert alert-success"
              >
                <h4>Successfully Updated Office Data</h4>
              </div>
              <hr />
              <div className="App">
                <br />
              </div>
              <div className="row">
                <h5 className="col">Office Email</h5>
                <h5 className="col">{this.props.loggedInUsedr.o_mail}</h5>
              </div>
              <div className="row">
                <h5 className="col">Counter One Avg Time</h5>
                <h5 className="col">{this.props.office_data.coOneTime}</h5>
                {/* <button onClick={this.serviceOne} className="btn btn-success">Service</button> */}
              </div>
              <div className="row">
                <h5 className="col">Counter One Total</h5>
                <h5 className="col">{this.props.office_data.coOneTotal}</h5>
              </div>
              <div className="row">
                <h5 className="col">Counter Two Avg Time</h5>
                <h5 className="col">{this.props.office_data.coTwoTime}</h5>
                {/* <button onClick={this.serviceOne} className="btn btn-success">Service</button> */}
              </div>
              <div className="row">
                <h5 className="col">Counter Two Total</h5>
                <h5 className="col">{this.props.office_data.coTwoTotal}</h5>
              </div>
              <div className="row">
                <h5 className="col">Counter Three Avg Time</h5>
                <h5 className="col">{this.props.office_data.coThreeTime}</h5>
                {/* <button onClick={this.serviceOne} className="btn btn-success">Service</button> */}
              </div>
              <div className="row">
                <h5 className="col">Counter Three Total</h5>
                <h5 className="col">{this.props.office_data.coThreeTotal}</h5>
              </div>
              <div className="row">
                <h5 className="col">Counter Four Avg Time</h5>
                <h5 className="col">{this.props.office_data.coFourTime}</h5>
                {/* <button onClick={this.serviceOne} className="btn btn-success">Service</button> */}
              </div>
              <div className="row">
                <h5 className="col">Counter Four Total</h5>
                <h5 className="col">{this.props.office_data.coFourTotal}</h5>
              </div>
              <div className="row">
                <h5 className="col">Counter Five Avg Time</h5>
                <h5 className="col">{this.props.office_data.coFiveTime}</h5>
                {/* <button onClick={this.serviceOne} className="btn btn-success">
                  Service
                </button> */}
              </div>
              <div className="row">
                <h5 className="col">Counter Five Total</h5>
                <h5 className="col">{this.props.office_data.coFiveTotal}</h5>
              </div>
              <div className="row ">
                <h5 className="col">Counter One QR</h5>
                <img
                  className="qr1"
                  src={
                    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
                    this.props.loggedInUsedr.o_mail +
                    "=coOneTotal"
                  }
                  alt="Loading"
                />
                <br />
                <button
                  onClick={() => {
                    window.print();
                  }}
                >
                  Print
                </button>
              </div>
              <div className="row ">
                <h5 className="col">Counter Two QR</h5>
                <img
                  className="qr2"
                  src={
                    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
                    this.props.loggedInUsedr.o_mail +
                    "=coTwoTotal"
                  }
                  alt="Loading"
                />
                <br />
                <button
                  onClick={() => {
                    window.print();
                  }}
                >
                  Print
                </button>
              </div>
              <div className="row ">
                <h5 className="col">Counter Three QR</h5>
                <img
                  className="qr3"
                  src={
                    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
                    this.props.loggedInUsedr.o_mail +
                    "=coThreeTotal"
                  }
                  alt="Loading"
                />
                <br />
                <button
                  onClick={() => {
                    window.print();
                  }}
                >
                  Print
                </button>
              </div>
              <div className="row ">
                <h5 className="col">Counter Four QR</h5>
                <img
                  className="qr4"
                  src={
                    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
                    this.props.loggedInUsedr.o_mail +
                    "=coFourTotal"
                  }
                  alt="Loading"
                />
                <br />
                <button
                  onClick={() => {
                    window.print();
                  }}
                >
                  Print
                </button>
              </div>
              <div className="row ">
                <h5 className="col">Counter Five QR</h5>
                <img
                  className="qr5"
                  src={
                    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
                    this.props.loggedInUsedr.o_mail +
                    "=coFiveTotal"
                  }
                  alt="Loading"
                />
                <br />
                <button
                  onClick={() => {
                    window.print();
                  }}
                >
                  Print
                </button>
              </div>
            </div>
          </blockquote>
        </Card.Body>
      </Card>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchOfficeProfile,
      editOfficeProfile
    },
    dispatch
  );
}
function mapStateToProps({ office_data, loggedInUsedr, guard_phone }) {
  return { office_data, loggedInUsedr, guard_phone };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Office);
