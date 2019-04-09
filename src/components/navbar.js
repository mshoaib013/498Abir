import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Logo from "../assets/images/text-logo.png";
import Userlogo from "../assets/images/user-icon.png";
import "../styles/Header.css";
import "../App.css";
// import "../styles/employeeReq.css";
import {
  Navbar,
  NavDropdown,
  Nav,
  Form,
  FormControl,
  Button,
  Card,
  Image,
  Popover,
  OverlayTrigger,
  ListGroup,
  Row,
  Col,
  InputGroup
} from "react-bootstrap";
import "../styles/navbar.css";
import * as ROUTES from "../constants/routes";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// fontawesome**********************************
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
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };
  }
  componentWillReceiveProps(next) {
    // console.log(next);
  }
  render() {
    const popover = (
      <Popover id="popover-basic" title="User Options">
        <ListGroup>
          <ListGroup.Item>
            <FontAwesomeIcon className="fontawesome" icon="envelope" />
            {this.props.loggedInUsedr.o_mail}
          </ListGroup.Item>
          <ListGroup.Item>
            <FontAwesomeIcon className="fontawesome" icon="user" />
            {this.props.loggedInUsedr.email}
          </ListGroup.Item>
          <ListGroup.Item>
            <FontAwesomeIcon className="fontawesome" icon="sign-out-alt" />
            {/* <Button onClick={this.props.signOut}>Logout</Button> */}
            {this.props.butt}
          </ListGroup.Item>
        </ListGroup>
      </Popover>
    );
    return (
      // <div className="Navbar">
      // 	<Navbar
      // 		className="header"
      // 		collapseOnSelect
      // 		bg=""
      // 		expand="lg"
      // 		sticky="top"
      // 	>
      // 		<Nav.Link id="navEmployee" className="">
      // 			<Link to={ROUTES.EMPLOYEES}> Employees </Link>
      // 		</Nav.Link>

      // 		<Nav.Link id="navEmployee" className="">
      // 			<Link to={ROUTES.ADMIN}>Admin </Link>
      // 		</Nav.Link>
      // 	</Navbar>
      // </div>
      //commented out by faisal
      <div className="Navbar">
        <Navbar
          className="header"
          collapseOnSelect
          bg=""
          expand="lg"
          sticky="top"
        >
          <Navbar.Brand href="/" id="logo">
            {/* <Image src={Logo} width="170" height="50" /> */}
            <h4>SmartQueue</h4>
          </Navbar.Brand>
          <Nav.Link className="marginRight">
            <Link to={ROUTES.OFFICE_PROFILE} className="navLinkCol">
              Office Profile
            </Link>
          </Nav.Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="bar">
            <Nav className="mr-auto">
              {/* <Nav.Link href={ROUTES.RECENT} className="marginRight">
			    Recent Visitors
			  </Nav.Link>
			  <Nav.Link href={ROUTES.INVITED} className="marginRight">
			    Invited Visitors
			  </Nav.Link> */}

              {/* <Nav.Link className="marginRight">
                <Link to={ROUTES.ADMIN}> Admin </Link>
              </Nav.Link> */}
              <Nav.Link className="marginRight">
                <Link to={ROUTES.COUNTER_ONE} className="navLinkCol">
                  Counter One
                </Link>
              </Nav.Link>
              <Nav.Link className="marginRight">
                <Link to={ROUTES.COUNTER_TWO} className="navLinkCol">
                  Counter Two
                </Link>
              </Nav.Link>

              {/* <Nav.Link className="marginRight">
                <Link to={ROUTES.INVITEES}> Invitees </Link>
              </Nav.Link> */}
              <Nav.Link className="marginRight">
                <Link to={ROUTES.COUNTER_THREE} className="navLinkCol">
                  Counter Three
                </Link>
              </Nav.Link>
              <Nav.Link className="marginRight">
                <Link to={ROUTES.COUNTER_FOUR} className="navLinkCol">
                  {/*working with attendance form*/}
                  Counter Four
                </Link>
              </Nav.Link>
              <Nav.Link className="marginRight notification">
                <Link to={ROUTES.COUNTER_FIVE} className="navLinkCol">
                  <span>Counter Five</span>
                  {/* <span className="badge">3</span> */}
                </Link>
              </Nav.Link>
            </Nav>
            <Form inline>
              <OverlayTrigger
                trigger="click"
                placement="bottom"
                overlay={popover}
              >
                <Image
                  src={Userlogo}
                  width="40"
                  height="40"
                  roundedCircle
                  id="userLogo"
                />
              </OverlayTrigger>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}
function mapStateToProps({ loggedInUsedr }) {
  return { loggedInUsedr };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
