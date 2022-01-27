import { combineReducers } from "redux";
import ProjectReducer from "./admin/project";
import EmployeeReducer from "./admin/employee";
import TimesheetReducer from './karyawan/timesheet';


export default combineReducers({
    TimesheetReducer,
    ProjectReducer,
    EmployeeReducer,
})
