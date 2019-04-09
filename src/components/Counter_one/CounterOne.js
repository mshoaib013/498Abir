import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Table, Tabs, Tab, Card } from "react-bootstrap";
import Image from "../../assets/images/avatar.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  fetchOfficeProfile,
  editOfficeProfile
} from "../../actions/action_office_profile";
import _ from "lodash";
// import Visitor_add from "./Visitor_add";
// font awesome******
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faSignOutAlt,
  faSearch,
  faGreaterThan
} from "@fortawesome/free-solid-svg-icons";
library.add(faUser, faEnvelope, faSignOutAlt, faSearch, faGreaterThan);
var searchObj = { start: null, end: null, value: "" };
var loadStatus = 0;
var date1;
var date2;
var date3;
class CounterOne extends Component {
  constructor() {
    super();
    this.state = {
      o_mail: "",
      coOneTime: "",
      coOneTotal: "",
      coThreeTime: "",
      coThreeTotal: ""
    };
    this.serviceOne = this.serviceOne.bind(this);
    // this.newBuilding = "";
    // this.onInputChange = this.onInputChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.isSelected = this.isSelected.bind(this);
    // this.addMore = this.addMore.bind(this);
    // this.getGuardPhone = this.getGuardPhone.bind(this);
  }
  fieldVal = {
    o_mail: "",
    coOneTime: 60,
    coOneTotal: 22,
    coThreeTime: 60,
    coThreeTotal: 10
  };
  serviceOne() {
    if (date1 != null) {
      date2 = (new Date() - date1) / 1000 / 60;
      console.log(date2, "zzz");
      date1 = new Date();
    } else {
      date1 = new Date();
    }
    if (this.props.office_data.coOneTotal > 0) {
      if (date2 != null) {
        this.props.editOfficeProfile(
          this.props.loggedInUsedr.o_mail,
          {
            coOneTotal: this.props.office_data.coOneTotal - 1,
            coOneTime: date2
          },
          this.props.fetchOfficeProfile(this.props.loggedInUsedr.o_mail)
        );
      } else {
        this.props.editOfficeProfile(
          this.props.loggedInUsedr.o_mail,
          {
            coOneTotal: this.props.office_data.coOneTotal - 1
          },
          this.props.fetchOfficeProfile(this.props.loggedInUsedr.o_mail)
        );
      }
    } else {
      alert("No More");
    }
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
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     startDate: new Date()
  //   };
  // }
  componentDidMount() {
    console.log("mounted and data is", this.props.office_data);
    if (this.props.office_data.o_mail != null) {
      this.props.fetchOfficeProfile(this.props.loggedInUsedr.o_mail);
      // this.props.fetchGuardPhoneData(this.props.loggedInUsedr.o_mail);
      this.fieldVal.o_mail = this.props.office_data.o_mail;
      this.fieldVal.coOneTime = this.props.office_data.coOneTime;
      this.fieldVal.coOneTotal = this.props.office_data.coOneTotal;
      this.fieldVal.coThreeTime = this.props.office_data.coThreeTime;
      this.fieldVal.coThreeTotal = this.props.office_data.coThreeTotal;
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
  render() {
    // console.log(this.props.data)
    return (
      <Card className="cdrdView">
        <div className="container">
          <h1 className="">Counter One</h1>
          <br />
          <h2 className="">Last Service Time</h2>
          <h2 className="">{this.props.office_data.coOneTime} minute</h2>
          <br />
          <h2 className="">Counter Total</h2>
          <h2 className="">{this.props.office_data.coOneTotal}</h2>
          <br />
          <button onClick={this.serviceOne} className="btn btn-success">
            Service
          </button>
        </div>
      </Card>
    );
  }
}

function mapStateToProps({ office_data, loggedInUsedr, guard_phone }) {
  return { office_data, loggedInUsedr, guard_phone };
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
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterOne);
