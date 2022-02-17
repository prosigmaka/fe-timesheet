import { combineReducers } from "redux";
import ProjectReducer from "./admin/project";
import EmployeeReducer from "./admin/employee";
import TimesheetReducer from './karyawan/timesheet';
import StatusReducer from './karyawan/status'


export default combineReducers({
    TimesheetReducer,
    StatusReducer,
    ProjectReducer,
    EmployeeReducer,
})
