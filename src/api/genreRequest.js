import axios from "axios";
import {  setItemGenre, setLoadingGetGenre } from "../redux";



const genreRequest = {
    getGenresApi : async (dispatch) => {
        dispatch(setLoadingGetGenre(true));
        try {
            const res = await axios.get('https://api-rental-carl.herokuapp.com/genre');
            dispatch(setItemGenre(res.data));
            dispatch(setLoadingGetGenre(false));
        } catch (error) {
            console.log(error);
        }
    },
}
export default genreRequest;