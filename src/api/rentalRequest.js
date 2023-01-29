import axios from "axios";
import {
  getItemRentedCar,
  getRentedCar,
  pushItemRentedCar,
  setCloseDetailOrder,
  setDisplayAlert,
  setItemPropAlert,
  setLoadingGlobal,
  setLoginSuccess,
  updateItemRentedCarSuccess,
} from "../redux";
const url = process.env.REACT_APP_URL_LOCAL;
const rentalRequest = {
  carRental: async (dispatch, info) => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const AuthStr = "bearer ".concat(currentUser.accessToken);
    dispatch(setLoadingGlobal(true));
    try {
      axios
        .post(`${url}rentedCarInfo/create`, info, {
          headers: { token: AuthStr },
        })
        .then((response) => {
          console.log(response);
          // const {accessToken} = JSON.parse(localStorage.getItem("currentUser"));
          // localStorage.removeItem('currentUser');
          // localStorage.setItem("currentUser", JSON.stringify({...response.data.user_id,accessToken}));
          // dispatch(setLoginSuccess(response.data.user_id));
          dispatch(setLoadingGlobal(false));
          dispatch(setItemPropAlert("Thuê xe thành công"));
          dispatch(setDisplayAlert(true));
        })
        .catch((error) => {
          console.log("errorrrrrrrr " + error);
          dispatch(setLoadingGlobal(false));
          dispatch(setItemPropAlert("Thuê xe thất bại"));
          dispatch(setDisplayAlert(true));
        });
    } catch (error) {
      console.log(error);
      dispatch(setLoadingGlobal(false));
    }
  },

  getCarRental: async (dispatch) => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const AuthStr = "bearer ".concat(currentUser.accessToken);
    dispatch(setLoadingGlobal(true));
    try {
      axios
        .get(`${url}rentedCarInfo`, {
          headers: { token: AuthStr },
        })
        .then((response) => {
          console.log(response);
          dispatch(setLoadingGlobal(false));
          dispatch(getRentedCar(response.data.reverse()));
        })
        .catch((error) => {
          console.log("error " + error);
          dispatch(setLoadingGlobal(false));
        });
    } catch (error) {
      console.log(error);
      dispatch(setLoadingGlobal(false));
    }
  },

  getItemCarRental: async (id, dispatch, setList) => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const AuthStr = "bearer ".concat(currentUser.accessToken);
    dispatch(setLoadingGlobal(true));
    console.log(id);
    try {
      axios
        .get(`${url}rentedCarInfo/${id}`, {
          headers: { token: AuthStr },
        })
        .then((response) => {
          console.log(response);
          dispatch(setLoadingGlobal(false));
          dispatch(getItemRentedCar(response.data));
          setList((prev) => {
            return [...prev, response.data];
          });
        })
        .catch((error) => {
          console.log("error " + error);
          dispatch(setLoadingGlobal(false));
        });
    } catch (error) {
      console.log(error);
      dispatch(setLoadingGlobal(false));
    }
  },

  updateItemCarRental: async (id, dispatch, available) => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const AuthStr = "bearer ".concat(currentUser.accessToken);
    dispatch(setLoadingGlobal(true));
    console.log(available);
    try {
      axios
        .patch(
          `${url}rentedCarInfo/${id}/edit`,
          {
            plight: available,
          },
          {
            headers: { token: AuthStr },
          }
        )
        .then((response) => {
          console.log(response);
          dispatch(setLoadingGlobal(false));
          dispatch(setCloseDetailOrder());
          dispatch(updateItemRentedCarSuccess());
        })
        .catch((error) => {
          console.log("error " + error);
          dispatch(setLoadingGlobal(false));
        });
    } catch (error) {
      console.log(error);
      dispatch(setLoadingGlobal(false));
    }
  },
};
export default rentalRequest;
