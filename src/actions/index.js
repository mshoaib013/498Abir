import {
  USER_LOGIN,
  FETCH_EMPLOYEES,
  FETCH_DATA,
  FETCH_VISITORS,
  FETCH_INVITEES,
  FETCH_GUARDS,
  FETCH_ADMINS,
  CURRENT_TIME,
  FETCH_ALL_EMPLOYEE,
  FETCH_GUARD_PHONE,
  FETCH_ALL_VISITORS,
  FETCH_ALL_MAILS
} from "../constants/action_types";
import {
  VISITORS,
  EMPLOYEESS,
  INVITEES,
  ADMINS,
  GUARDS
} from "../constants/db_collections";
import {
  VISITOR_NAME,
  VISITOR_THUMB,
  VISITOR_PURPOSE,
  VISITOR_CHECKIN,
  VISITOR_CHECKOUT,
  VISITOR_PHONE,
  VISITOR_EMAIL,
  VISITOR_ORG,
  VISITOR_GATEPASS,
  OFFICE_EMAIL,
  VISITOR_PIC
} from "../constants/visitor_constants";
import firebase from "../utils/firebase";
import _ from "lodash";
import {
  ADD_STATUS,
  DELETE_STATUS,
  UPDATE_STATUS,
  SUCCESS,
  FAILURE,
  NULL
} from "../constants/action_types";

var userWithOffice = {};
export async function saveUserData(user) {
  console.log(user.email + " from action");
  var officeMail = "";
  const db = firebase.firestore();
  await db
    .collection("admins")
    .doc(user.email)
    .get()
    .then(function(doc) {
      officeMail = user.email;
      console.log(doc.data().o_mail);
    })
    .catch(function(error) {});
  user = {
    ...this.user,
    o_mail: officeMail
  };
  console.log(user);
  userWithOffice = user;
  console.log(user.email + " " + user.o_mail);
  return {
    type: USER_LOGIN,
    payload: user
  };
}
