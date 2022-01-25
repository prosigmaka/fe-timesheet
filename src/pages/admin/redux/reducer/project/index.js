import { GET_LIST_PROJECT, ADD_PROJECT, DETAIL_PROJECT, UPDATE_PROJECT, OPEN_MODAL } from "../../actions/projectActions";

const initialState = {
  getListProjectResult: false,
  getListProjectLoading: false,
  getListProjectError: false,

  addProjectResult: false,
  addProjectLoading: false,
  addProjectError: false,

  updateProjectResult: false,
  updateProjectLoading: false,
  updateProjectError: false,

  detailProjectResult: false,

  openModalResult: false,
};

const Project = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_PROJECT:
      console.log("4. Masuk reducer: ", action);
      return {
        ...state,
        getListProjectResult: action.payload.data,
        getListProjectLoading: action.payload.loading,
        getListProjectError: action.payload.errorMessage,
      };
    case ADD_PROJECT:
      console.log("4. Masuk reducer: ", action);
      return {
        ...state,
        addProjectResult: action.payload.data,
        addProjectLoading: action.payload.loading,
        addProjectError: action.payload.errorMessage,
      };
    case DETAIL_PROJECT:
      console.log("4. Masuk reducer: ", action);
      return {
        ...state,
        detailProjectResult: action.payload.data,
      };
    case UPDATE_PROJECT:
      console.log("4. Masuk reducer: ", action);
      return {
        ...state,
        updateProjectResult: action.payload.data,
        updateProjectLoading: action.payload.loading,
        updateProjectError: action.payload.errorMessage,
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

export default Project;
