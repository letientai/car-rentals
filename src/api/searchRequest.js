import axios from "axios";
import { setCarsSortStart, setCarsSortSuccess } from "../redux";

const searchRequest = {
    searchName : async (value,dispatch)=>{
        dispatch(setCarsSortStart(true));
        try {
            const {data} = await axios.get(`https://api-rental-carl.herokuapp.com/car/search?q=${value}`);
            dispatch(setCarsSortSuccess(data));
            dispatch(setCarsSortStart(false));
        } catch (error) {
            dispatch(setCarsSortStart(false));
        }
    }
}
export default searchRequest;