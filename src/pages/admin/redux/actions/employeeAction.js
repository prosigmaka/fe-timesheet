import axios from "axios";

export const GET_LIST_EMPLOYEE = "GET_LIST_EMPLOYEE";
export const ADD_EMPLOYEE = "ADD_EMPLOYEE";
export const DETAIL_EMPLOYEE = "DETAIL_EMPLOYEE";
export const UPDATE_EMPLOYEE = "UPDATE_EMPLOYEE";
export const OPEN_MODAL = "OPEN_MODAL";

export const getListEmployee = () => {
  console.log("2. Masuk action getListEmployee");
  return (dispatch) => {
    // loading
    dispatch({
      type: "GET_LIST_EMPLOYEE",
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // get api
    axios({
      method: "GET",
      url: "http://localhost:1234/employee",
      timeout: 120000,
    })
      .then((response) => {
        // berhasil get api
        console.log("3. Berhasil dapat data", response);
        dispatch({
          type: "GET_LIST_EMPLOYEE",
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        // gagal get api
        console.log("3. Gagal dapat data", error);
        dispatch({
          type: "GET_LIST_EMPLOYEE",
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const addEmployee = (data) => {
  console.log("2. Masuk action add");
  return (dispatch) => {
    // loading
    dispatch({
      type: "ADD_EMPLOYEE",
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // get api
    axios({
      method: "POST",
      url: "http://localhost:1234/employee",
      timeout: 120000,
      data: data,
    })
      .then((response) => {
        // berhasil get api
        console.log("3. Berhasil dapat data", response);
        dispatch({
          type: "ADD_EMPLOYEEe",
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        // gagal get api
        console.log("3. Gagal dapat data", error);
        dispatch({
          type: "ADD_EMPLOYEE",
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const detailEmployee = (data) => {
  return (dispatch) => {
    dispatch({
      type: DETAIL_EMPLOYEE,
      payload: {
        data: data,
      },
    });
  };
};

export const updateEmployee = (data) => {
  console.log("2. Masuk action update");
  return (dispatch) => {
    // loading
    dispatch({
      type: "UPDATE_EMPLOYEE",
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // get api
    axios({
      method: "PUT",
      url: "http://localhost:1234/employee/" + data.id,
      timeout: 120000,
      data: data,
    })
      .then((response) => {
        // berhasil get api
        console.log("3. Berhasil dapat data", response);
        dispatch({
          type: "UPDATE_EMPLOYEE",
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        // gagal get api
        console.log("3. Gagal dapat data", error);
        dispatch({
          type: "UPDATE_EMPLOYEE",
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const openModal = (open) => {
  return (dispatch) => {
    dispatch({
      type: OPEN_MODAL,
      payload: {
        data: open,
      },
    });
  };
};
