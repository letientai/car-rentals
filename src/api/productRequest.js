import axios from "axios";
import { setItemCar, setLoadingGetCar } from "../redux";

const url = process.env.REACT_APP_URL_LOCAL;
const productRequest = {
  getCarsApi: async (dispatch) => {
    dispatch(setLoadingGetCar(true));
    try {
      const res = await axios.get(`${url}car`);
      dispatch(setItemCar(res.data));
      dispatch(setLoadingGetCar(false));
    } catch (error) {
      console.log(error);
    }
  },
};
export default productRequest;
