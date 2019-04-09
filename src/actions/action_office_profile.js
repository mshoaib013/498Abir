import {
  USER_LOGIN,
  FETCH_EMPLOYEES,
  FETCH_DATA,
  FETCH_VISITORS,
  FETCH_INVITEES,
  FETCH_GUARDS,
  FETCH_ADMINS,
  CURRENT_TIME,
  FETCH_OFFICE
} from "../constants/action_types";
import { OFFICES } from "../constants/db_collections";
import firebase from "../utils/firebase";
import _ from "lodash";
import {
  UPDATE_STATUS,
  SUCCESS,
  FAILURE,
  NULL
} from "../constants/action_types";

var officeObj = {};
export const fetchOfficeProfile = async userMail => {
  console.log(userMail);
  const db = firebase.firestore();
  if (userMail != null) {
    await db
      .collection("offices")
      .doc(userMail)
      //.doc("rokkhibd@gmail.com")
      .get()
      .then(function(doc) {
        if (!doc.exists) {
          db.collection("offices")
            .doc(userMail)
            .set({
              o_mail: userMail,
              coFiveTime: 0,
              coFiveTotal: 0,
              coFourTime: 0,
              coFourTotal: 0,
              coOneTime: 0,
              coOneTotal: 0,
              coThreeTime: 0,
              coThreeTotal: 0,
              coTwoTime: 0,
              coTwoTotal: 0
            })
            .then(function() {
              userMail = "SUCCESS";
            });
        }
        console.log(doc.data(), "xxx");
        officeObj = {
          o_mail: doc.data().o_mail,
          coOneTime: doc.data().coOneTime,
          coOneTotal: doc.data().coOneTotal,
          coThreeTime: doc.data().coThreeTime,
          coThreeTotal: doc.data().coThreeTotal,
          coTwoTime: doc.data().coTwoTime,
          coTwoTotal: doc.data().coTwoTotal,
          coFourTime: doc.data().coFourTime,
          coFourTotal: doc.data().coFourTotal,
          coFiveTime: doc.data().coFiveTime,
          coFiveTotal: doc.data().coFiveTotal
        };
      })
      .catch(function(error) {});
  }
  return {
    type: FETCH_OFFICE,
    payload: officeObj
  };
};

export const editOfficeProfile = async (userMail, obj, callback) => {
  console.log(userMail, obj);
  var a = null;
  const db = firebase.firestore();
  let del = await db
    .collection("offices")
    .doc(userMail)
    .update(obj)
    .then(function() {
      callback();
      userMail = "SUCCESS";
    })
    .catch(function(error) {
      a = FAILURE;
      // alert("FAILURE");
    });
  return {
    type: UPDATE_STATUS,
    payload: a
  };
};

export const setDefaultProfile = async (userMail, obj) => {
  console.log(userMail, obj);
  var a = null;
  const db = firebase.firestore();
  let del = await db
    .collection("offices")
    .doc(userMail)
    .set(obj)
    .then(function() {
      userMail = "SUCCESS";
    })
    .catch(function(error) {
      a = FAILURE;
      // alert("FAILURE");
    });
  return {
    type: "SET_DEFAULT_STATUS",
    payload: a
  };
};
