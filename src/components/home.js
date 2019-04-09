import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "../styles/home.css";
import withAuthFirebase from "react-auth-firebase";
import firebase from "../utils/firebase";
import NavBar from "./navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from "../constants/routes";
// import Visitor_form from "./visitors/Visitor_form";
// import AdminPage from "./admin";
// import InvitedPage from "./invited";
// import Employees from "./Employee_new/Employee";
// import Guard_form from "./Guards/Guard_form";

import { saveUserData } from "../actions/index";
import { fetchOfficeProfile } from "../actions/action_office_profile";
// import Recent_Visitor_form from "./recent_visitors/Recent_Visitor_form";
// import Recent_Visitor_form from "./Recent_visitor_new/Visitor_form";
// import Notice_form from "./Notice_Board/Notice_form";
import Office_profile from "./office_profile/office_profile";
// import Invitee_form from "./Invitees/Invitee_form";
// import Parcel_form from "./Parcels/Parcel_form";
// import EmployeeRequest from "./employee_Request/employee_request";
// import App_user from "./Employee_new/All_user";
// import Employee_add from "./Employee_new/Employee_add";
// import Attendance_form from "./attendance/Attendance_form";
// import Policy from "./policy/policy";
// ************************************************************************************************************************************
import CounterOne from "./Counter_one/CounterOne";
import CounterTwo from "./Counter_two/CounterOne";
import CounterThree from "./Counter_three/CounterOne";
import CounterFour from "./Counter_four/CounterOne";
import CounterFive from "./Counter_five/CounterOne";
// ************************************************************************************************************************************
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      user: null,
      error: null,
      signOut: null
    };
  }

  componentWillReceiveProps(nextProps) {
    // console.log(nextProps);
  }
  a = (
    <button onClick={this.props.signOut} className="btn btn-danger">
      Sign Out
    </button>
  );
  componentDidMount() {
    console.log(this.props.user.email, "xxx");
    this.props.fetchOfficeProfile(this.props.user.email);
    var userDetail = this.props.user;
    this.props.saveUserData(userDetail);
    console.log(userDetail.email, userDetail.o_mail);
    if (this.props.user) {
      this.props.saveUserData(this.props.user);
    }
  }

  render() {
    return (
      // <Router>
      <Router forceRefresh={false}>
        <div>
          <NavBar
            signout={this.props.signOut}
            butt={this.a}
            user={this.props.user}
          />
          <Switch>
            //
            ************************************************************************************************************************************
            <Route exact path={ROUTES.COUNTER_ONE} component={CounterOne} />
            <Route exact path={ROUTES.COUNTER_TWO} component={CounterTwo} />
            <Route exact path={ROUTES.COUNTER_THREE} component={CounterThree} />
            <Route exact path={ROUTES.COUNTER_FOUR} component={CounterFour} />
            <Route exact path={ROUTES.COUNTER_FIVE} component={CounterFive} />
            //
            ************************************************************************************************************************************
            {/* <Route exact path={ROUTES.RECENT} component={Recent_Visitor_form} /> */}
            {/* <Route exact path={ROUTES.INVITED} component={InvitedPage} />
            <Route exact path={ROUTES.ALL} component={Visitor_form} />
            <Route path={ROUTES.EMPLOYEES} component={Employees} />
            <Route path={ROUTES.ALL_EMPLOYEE_MAIL} component={App_user} />
            <Route path="/addemployee" component={Employee_add} />
            <Route path={ROUTES.ADMIN} component={AdminPage} />
            <Route path={ROUTES.GUARD} component={Guard_form} />
            <Route exact path={ROUTES.NOTICE_BOARD} component={Notice_form} />
            <Route exact path={ROUTES.ATTENDANCE} component={Attendance_form} />
            <Route exact path={ROUTES.POLICY} component={Policy} /> */}
            <Route
              exact
              path={ROUTES.OFFICE_PROFILE}
              component={Office_profile}
            />
            {/* <Route exact path={ROUTES.INVITEES} component={Invitee_form} />
            <Route exact path={ROUTES.PARCELS} component={Parcel_form} />
            <Route
              exact
              path={ROUTES.EMPLOYEE_REQUEST}
              component={EmployeeRequest}
            /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchOfficeProfile, saveUserData }, dispatch);
}

function mapStateToProps({}) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
