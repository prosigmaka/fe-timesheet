import { combineReducers } from "redux";
import ProjectReducer from "./admin/project";
import EmployeeReducer from "./admin/employee";

export default combineReducers({
  ProjectReducer,
  EmployeeReducer,
});
