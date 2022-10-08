import axios from "axios";
import { 
    setLoginFailed, 
    setLoginStart, 
    setLoginSuccess, 
    setRegisterFailed, 
    setRegisterStart, 
    setRegisterSuccess 
} from "../redux";

const authRequest = {
    registerUser : async (user , dispatch , navigate) => {
        dispatch(setRegisterStart());
        try {
            const {data} = await axios.post('https://api-rental-carl.herokuapp.com/auth/register', user);
            dispatch(setLoginSuccess(data));
            dispatch(setRegisterSuccess());
            localStorage.setItem('currentUser', JSON.stringify(data));
        } catch (error) {
            dispatch(setRegisterFailed(error));
        }
    },
    loginUser : async (user , dispatch) => {
        dispatch(setLoginStart());
        try {
            const currentUser  = await axios.post('https://api-rental-carl.herokuapp.com/auth/login', user);
            dispatch(setLoginSuccess(currentUser.data));
            localStorage.setItem('currentUser', JSON.stringify(currentUser.data));
        } catch (error) {
            dispatch(setLoginFailed(error));
        }
    },
    logoutUser : async (accessToken , dispatch) => {
        try {
            await axios.post('https://api-rental-carl.herokuapp.com/auth/logout',{},{
                headers: {
                  'token': `Beare ${accessToken}`
                }
            })
            .then((response)=>{
                console.log(response.data);
            })
            .catch(error => console.log(error));
        } catch (error) {
            dispatch(setLoginFailed(error));
        }
    }
}
export default authRequest;