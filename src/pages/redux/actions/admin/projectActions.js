import axios from "axios";

export const GET_LIST_PROJECT = "GET_LIST_PROJECT";
export const ADD_PROJECT = "ADD_PROJECT";
export const DETAIL_PROJECT = "DETAIL_PROJECT";
export const UPDATE_PROJECT = "UPDATE_PROJECT";
export const OPEN_MODAL = "OPEN_MODAL";

export const getListProject = () => {
  console.log("2. Masuk action getList");
  return (dispatch) => {
    // loading
    dispatch({
      type: "GET_LIST_PROJECT",
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // get api
    axios({
      method: "GET",
      url: "http://localhost:4000/projects",
      timeout: 120000,
    })
      .then((response) => {
        // berhasil get api
        console.log("3. Berhasil get Data", response);
        dispatch({
          type: "GET_LIST_PROJECT",
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
          type: "GET_LIST_PROJECT",
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const addProject = (data) => {
  console.log("2. Masuk action add");
  return (dispatch) => {
    // loading
    dispatch({
      type: "ADD_PROJECT",
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // get api
    axios({
      method: "POST",
      url: "http://localhost:4000/projects",
      timeout: 120000,
      data: data,
    })
      .then((response) => {
        // berhasil get api
        console.log("3. Berhasil dapat data", response);
        dispatch({
          type: "ADD_PROJECT",
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
          type: "ADD_PROJECT",
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const detailProject = (data) => {
  return (dispatch) => {
    dispatch({
      type: DETAIL_PROJECT,
      payload: {
        data: data,
      },
    });
  };
};

export const updateProject = (data) => {
  console.log("2. Masuk action update");
  return (dispatch) => {
    // loading
    dispatch({
      type: "UPDATE_PROJECT",
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // get api
    axios({
      method: "PUT",
      url: "http://localhost:4000/projects/" + data.id,
      timeout: 120000,
      data: data,
    })
      .then((response) => {
        // berhasil get api
        console.log("3. Berhasil dapat data", response);
        dispatch({
          type: "UPDATE_PROJECT",
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
          type: "UPDATE_PROJECT",
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
