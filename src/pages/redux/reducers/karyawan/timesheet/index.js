import {GET_LIST_TIMESHEET, ADD_TIMESHEET, DETAIL_TIMESHEET, UPDATE_TIMESHEET, OPEN_MODAL} from '../../../actions/karyawan/timesheetAction';


const initialState = {
    getListTimesheetResult: false,
    getListTimesheetLoading: false,
    getListTimesheetError: false,

    addTimesheetResult: false,
    addTimesheetLoading: false,
    addTimesheetError: false,

    updateTimesheetResult: false,
    updateTimesheetLoading: false,
    updateTimesheetError: false,

    detailTimesheetResult: false,

    openModalResult: false,
}

const timesheet = (state = initialState, action) => {
    switch(action.type) {
        case GET_LIST_TIMESHEET:
            console.log("4. Masuk reducer: ", action)
            return{ 
                ...state,
                getListTimesheetResult: action.payload.data,
                getListTimesheetLoading: action.payload.loading,
                getListTimesheetError: action.payload.errorMessage
            };
        case ADD_TIMESHEET:
            console.log("4. Masuk reducer: ", action)
            return{ 
                ...state,
                addTimesheetResult: action.payload.data,
                addTimesheetLoading: action.payload.loading,
                addTimesheetError: action.payload.errorMessage
            };
        case DETAIL_TIMESHEET:
            console.log("4. Masuk reducer: ", action)
            return{ 
                ...state,
                detailTimesheetResult: action.payload.data,
                
            };
        case UPDATE_TIMESHEET:
            console.log("4. Masuk reducer: ", action)
            return{ 
                ...state,
                updateTimesheetResult: action.payload.data,
                updateTimesheetLoading: action.payload.loading,
                updateTimesheetError: action.payload.errorMessage
            };
        case OPEN_MODAL:
            console.log("4. Masuk reducer: ", action)
            return{ 
                ...state,
                openModalResult: action.payload.data,
                    
            };
        default:
            return state;
    }
}

export default timesheet;