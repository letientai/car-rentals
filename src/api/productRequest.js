import axios from "axios";
import { setItemCar, setLoadingGetCar } from "../redux";



const productRequest = {
    getCarsApi : async (dispatch) => {
        dispatch(setLoadingGetCar(true));
        try {
            const res = await axios.get('https://api-rental-carl.herokuapp.com/car');
            dispatch(setItemCar(res.data));
            dispatch(setLoadingGetCar(false));
        } catch (error) {
            console.log(error);
        }
    },
}
export default productRequest;