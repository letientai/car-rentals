import axios from "axios";
import { setCarsSortStart, setCarsSortSuccess } from "../redux";
const url = process.env.REACT_APP_URL_LOCAL;
const searchRequest = {
  searchName: async (value, dispatch) => {
    dispatch(setCarsSortStart(true));
    try {
      const { data } = await axios.get(`${url}car/search?q=${value}`);
      dispatch(setCarsSortSuccess(data));
      dispatch(setCarsSortStart(false));
    } catch (error) {
      dispatch(setCarsSortStart(false));
    }
  },
};
export default searchRequest;
