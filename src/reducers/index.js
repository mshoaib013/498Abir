import { combineReducers } from "redux";
import LoggedInUsedr from "./reducer_user";
import office_profile from "./reducer_office_profile";
const rootReducer = combineReducers({
  loggedInUsedr: LoggedInUsedr,
  office_data: office_profile
});

export default rootReducer;
