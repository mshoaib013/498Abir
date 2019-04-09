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
import { ADD_EMPLOYEES, SUCCESS } from "../constants/action_types";
import firebase from "../utils/firebase";
const init = {};

export default function(state = init, action) {
  switch (action.type) {
    case FETCH_OFFICE:
      return action.payload;
    default:
      return state;
  }
}
