import axios from "axios";
import {
  setAddGenre,
  setDeleteGenre,
  setItemGenre,
  setLoadingAddGenre,
  setLoadingDeleteGenre,
  setLoadingGetGenre,
} from "../redux";

const url = process.env.REACT_APP_URL_LOCAL;
const genreRequest = {
  getGenresApi: async (dispatch) => {
    dispatch(setLoadingGetGenre(true));
    try {
      const res = await axios.get(`${url}genre`);
      dispatch(setItemGenre(res.data));
      dispatch(setLoadingGetGenre(false));
    } catch (error) {
      console.log(error);
    }
  },

  addGenre: async (dispatch, name) => {
    dispatch(setLoadingAddGenre(true));
    try {
      axios
        .post(`${url}genre/create`, {
          label: name,
        })
        .then((response) => {
          dispatch(setAddGenre(response));
          dispatch(setLoadingAddGenre(false));
        })
        .catch((error) => {
          dispatch(setAddGenre(error));
          dispatch(setLoadingAddGenre(false));
        });
    } catch (error) {
      dispatch(setLoadingAddGenre(false));
      console.log(error);
    }
  },

  deleteGenresApi: async (id, dispatch) => {
    dispatch(setLoadingDeleteGenre(true));
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const AuthStr = "bearer ".concat(currentUser.accessToken);
    try {
      const res = await axios.delete(`${url}genre/${id}`, {
        headers: { token: AuthStr },
      });
      dispatch(setDeleteGenre(res));
      dispatch(setLoadingDeleteGenre(false));
    } catch (error) {
      console.log(error);
      dispatch(setLoadingDeleteGenre(false));
    }
  },
};
export default genreRequest;
