import { GET_LIST_EMPLOYEE, ADD_EMPLOYEE, DETAIL_EMPLOYEE, UPDATE, EMPLOYEE, OPEN_MODAL, UPDATE_EMPLOYEE } from "../../../actions/admin/employeeAction";

const initialState = {
  getListEmployeeResult: false,
  getListEmployeeLoading: false,
  getListEmployeeError: false,

  addEmployeeResult: false,
  addEmployeeLoading: false,
  addEmployeeError: false,

  updateEmployeeResult: false,
  updateEmployeeLoading: false,
  updateEmployeeError: false,

  detailEmployeeResult: false,

  openModalResult: false,
};

const employee = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_EMPLOYEE:
      console.log("4. Masuk reducer: ", action);
      return {
        ...state,
        getListEmployeeResult: action.payload.data,
        getListEmployeeLoading: action.payload.loading,
        getListEmployeeError: action.payload.errorMessage,
      };
    case ADD_EMPLOYEE:
      console.log("4. Masuk reducer: ", action);
      return {
        ...state,
        addEmployeeResult: action.payload.data,
        addEmployeeLoading: action.payload.loading,
        addEmployeeError: action.payload.errorMessage,
      };
    case DETAIL_EMPLOYEE:
      console.log("4. Masuk reducer: ", action);
      return {
        ...state,
        detailEmployeeResult: action.payload.data,
      };
    case UPDATE_EMPLOYEE:
      console.log("4. Masuk reducer: ", action);
      return {
        ...state,
        updateEmployeeResult: action.payload.data,
        updateEmployeeLoading: action.payload.loading,
        updateEmployeeError: action.payload.errorMessage,
      };
    case OPEN_MODAL:
      console.log("4. Masuk reducer: ", action);
      return {
        ...state,
        openModalResult: action.payload.data,
      };
    default:
      return state;
  }
};

export default employee;
