import axios from "axios";
import {
  setItemUserFailed,
  setItemUserStart,
  setItemUserSuccess,
  setUserFailed,
  setUserStart,
  setUserSuccess,
} from "../redux";

const url = process.env.REACT_APP_URL_LOCAL;
const userRequest = {
  getUserApi: async (dispatch) => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const AuthStr = "bearer ".concat(currentUser.accessToken);
    dispatch(setUserStart(dispatch));
    try {
      axios
        .get(`${url}user`, {
          headers: { token: AuthStr },
        })
        .then((response) => {
          console.log(response);
          dispatch(setUserSuccess(response.data));
        })
        .catch((error) => {
          console.log("error " + error);
          dispatch(setUserFailed(dispatch));
        });
    } catch (error) {
      console.log(error);
      dispatch(setUserFailed(dispatch));
    }
  },
  getItemUser: async (id, dispatch) => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const AuthStr = "bearer ".concat(currentUser.accessToken);
    dispatch(setItemUserStart(dispatch));
    try {
      axios
        .get(`${url}user/${id}`, {
          headers: { token: AuthStr },
        })
        .then((response) => {
          console.log(response);
          dispatch(setItemUserSuccess(response.data));
        })
        .catch((error) => {
          console.log("error " + error);
          dispatch(setItemUserFailed(dispatch));
        });
    } catch (error) {
      console.log(error);
      dispatch(setItemUserFailed(dispatch));
    }
  },
};
export default userRequest;
