import axios from "axios";
import {
  setDeleteCarFailed,
  setDeleteCarStart,
  setDeleteCarSuccess,
  setGenreFailed,
  setGenreStart,
  setGenreSuccess,
  setItemCar,
  setItemCarFailed,
  setItemCarStart,
  setItemCarSuccess,
  setLoadingGetCar,
  setLoadingGlobal,
} from "../redux";

const carRequest = {
  getCarsApi: async (dispatch) => {
    dispatch(setLoadingGetCar(true));
    try {
      const res = await axios.get("https://api-rental-carl.herokuapp.com/car");
      dispatch(setItemCar(res.data));
      dispatch(setLoadingGetCar(false));
    } catch (error) {
      console.log(error);
    }
  },

  getItemCar: async (id, dispatch) => {
    dispatch(setItemCarStart());
    dispatch(setLoadingGlobal(true));
    try {
      const res = await axios.get(`http://api-rental-carl.herokuapp.com/car/${id}`);
      dispatch(setItemCarSuccess(res.data));
      dispatch(setLoadingGlobal(false));
    } catch (error) {
      console.log(error);
      dispatch(setItemCarFailed());
      dispatch(setLoadingGlobal(false));

    }
  },
  deleteCar: async (id, dispatch) => {
    dispatch(setDeleteCarStart(dispatch));
    try {
      const res = await axios.delete(
        `http://api-rental-carl.herokuapp.com/car/${id}`
      );
      dispatch(setDeleteCarSuccess(res));
    } catch (error) {
      console.log(error);
      dispatch(setDeleteCarFailed(error));
    }
  },

  getGenre: async (dispatch) => {
    dispatch(setGenreStart(dispatch));
    try {
      const res = await axios.get(`http://api-rental-carl.herokuapp.com/genre`);
      dispatch(setGenreSuccess(res));
    } catch (error) {
      console.log(error);
      dispatch(setGenreFailed(error));
    }
  },
};
export default carRequest;
