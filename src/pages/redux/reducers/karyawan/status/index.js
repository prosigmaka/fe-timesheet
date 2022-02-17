import {GET_LIST_STATUS} from '../../../actions/karyawan/statusAction';


const initialState = {
    getListStatusResult: false,
    getListStatusLoading: false,
    getListStatusError: false,
}

const status = (state = initialState, action) => {
    switch(action.type) {
        case GET_LIST_STATUS:
            console.log("Masuk reducer get status: ", action)
            return{
                ...state,
                getListStatusResult: action.payload.data,
                getListStatusLoading: action.payload.loading,
                getListStatusError: action.payload.errorMessage,
            };
            default:
                return state;
    }
}

export default status;