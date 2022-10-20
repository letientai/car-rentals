import {
  SEND_ID_DETAIL_ORDER,
  SET_CLOSE_DETAIL_ORDER,
  SET_DELETE_CAR_FAILED,
  SET_DELETE_CAR_START,
  SET_DELETE_CAR_SUCCESS,
  SET_DISPLAY_OVERLAY,
  SET_GENRE_FAILED,
  SET_GENRE_START,
  SET_GENRE_SUCCESS,
  SET_ITEM_CAR,
  SET_ITEM_PROP_OVERLAY,
  SET_ITEM_USER_FAILED,
  SET_ITEM_USER_START,
  SET_ITEM_USER_SUCCESS,
  SET_LOADING_GET_CAR,
  SET_LOGIN_FAILED,
  SET_LOGIN_START,
  SET_LOGIN_SUCCESS,
  SET_OPEN_DETAIL_ORDER,
  SET_REGISTER_FAILED,
  SET_REGISTER_START,
  SET_REGISTER_SUCCESS,
  SET_USER_FAILED,
  SET_USER_START,
  SET_USER_SUCCESS,
  SET_ITEM_GENRE, 
  // SET_ITEM_PROP_OVERLAY, 
  // SET_LOADING_GET_CAR, 
  SET_LOADING_GET_GENRE,
  SET_TOAST_MESSAGE,
  SET_LOADING_GLOBAL, 
  SET_ADD_GENRE,
  SET_LOADING_ADD_GENRE,
  SET_DELETE_GENRE,
  SET_LOADING_DELETE_GENRE,
  SET_CARS_SORT_START,
  SET_CARS_SORT_SUCCESS, 
  SET_DISPLAY_ALERT,
  SET_ITEM_PROP_ALERT,
  SET_DATE_BOOKING,
  SET_DATE_RETURN,
  SET_ITEM_CAR_START,
  SET_ITEM_CAR_SUCCESS,
  SET_ITEM_CAR_FAILED,
  SET_TOTAL_RENTAL_DAYS,
  SET_RENTAL_INFOMATION,
  SET_BIRTHDAY_USER,
  SET_AGE_USER,
  GET_RENTED_CARS,
  GET_ITEM_RENTED_CARS,
  PUSH_ITEM_RENTED_CARS,
  UPDATE_ITEM_RENTED_CARS_SUCCESS, 
} from "./constants";

export const setDisplayOverlay = (payload) => ({
  type: SET_DISPLAY_OVERLAY,
  payload: payload,
});
export const setItemPropOverlay = (payload) => ({
  type: SET_ITEM_PROP_OVERLAY,
  payload: payload,
});


export const setToastMessage = (payload) => ({
  type: SET_TOAST_MESSAGE,
  payload: payload,
});

export const setItemCar = (payload) => ({
  type: SET_ITEM_CAR,
  payload: payload,
});


export const setLoadingGlobal = (payload) => ({
  type: SET_LOADING_GLOBAL,
  payload: payload,
});

export const setLoadingGetCar = (payload) => ({
  type: SET_LOADING_GET_CAR,
  payload: payload,
});

export const setRegisterStart = (payload) => ({
  type: SET_REGISTER_START,
  payload: payload,
});
export const setRegisterSuccess = (payload) => ({
  type: SET_REGISTER_SUCCESS,
  payload: payload,
});
export const setRegisterFailed = (payload) => ({
  type: SET_REGISTER_FAILED,
  payload: payload,
});

export const setLoginStart = (payload) => ({
  type: SET_LOGIN_START,
  payload: payload,
});
export const setLoginSuccess = (payload) => ({
  type: SET_LOGIN_SUCCESS,
  payload: payload,
});
export const setLoginFailed = (payload) => ({
  type: SET_LOGIN_FAILED,
  payload: payload,
});

export const setDeleteCarStart = (payload) => ({
  type: SET_DELETE_CAR_START,
  payload: payload,
});
export const setDeleteCarSuccess = (payload) => ({
  type: SET_DELETE_CAR_SUCCESS,
  payload: payload,
});
export const setDeleteCarFailed = (payload) => ({
  type: SET_DELETE_CAR_FAILED,
  payload: payload,
});

export const setUserStart = (payload) => ({
  type: SET_USER_START,
  payload: payload,
});
export const setUserSuccess = (payload) => ({
  type: SET_USER_SUCCESS,
  payload: payload,
});
export const setUserFailed = (payload) => ({
  type: SET_USER_FAILED,
  payload: payload,
});

export const setItemUserStart = (payload) => ({
  type: SET_ITEM_USER_START,
  payload: payload,
});
export const setItemUserSuccess = (payload) => ({
  type: SET_ITEM_USER_SUCCESS,
  payload: payload,
});
export const setItemUserFailed = (payload) => ({
  type: SET_ITEM_USER_FAILED,
  payload: payload,
});
export const setOpenDetailOrder = (payload) => ({
  type: SET_OPEN_DETAIL_ORDER,
  payload: payload,
});
export const setCloseDetailOrder = (payload) => ({
  type: SET_CLOSE_DETAIL_ORDER,
  payload: payload,
});
export const setLoadingGetGenre = payload => ({
    type:SET_LOADING_GET_GENRE,
    payload: payload
});
export const setItemGenre = payload => ({
    type: SET_ITEM_GENRE,
    payload: payload
});
export const setCarsSortStart = payload => ({
    type: SET_CARS_SORT_START,
    payload: payload
});
export const setCarsSortSuccess = payload => ({
  type: SET_CARS_SORT_SUCCESS,
  payload: payload
});



export const setGenreStart = (payload) => ({
  type: SET_GENRE_START,
  payload: payload,
});
export const setGenreSuccess = (payload) => ({
  type: SET_GENRE_SUCCESS,
  payload: payload,
});
export const setGenreFailed = (payload) => ({
  type: SET_GENRE_FAILED,
  payload: payload,
});

export const setAddGenre = (payload) => ({
  type: SET_ADD_GENRE,
  payload: payload,
});
export const setLoadingAddGenre = (payload) => ({
  type: SET_LOADING_ADD_GENRE,
  payload: payload,
});

export const setDeleteGenre = (payload) => ({
  type: SET_DELETE_GENRE,
  payload: payload,
});
export const setLoadingDeleteGenre = (payload) => ({
  type: SET_LOADING_DELETE_GENRE,
  payload: payload,
});

export const setDisplayAlert = (payload) => ({
  type: SET_DISPLAY_ALERT,
  payload: payload,
});
export const setItemPropAlert = (payload) => ({
  type: SET_ITEM_PROP_ALERT,
  payload: payload,
});

export const setDateBooking = (payload) => ({
  type: SET_DATE_BOOKING,
  payload: payload,
});
export const setDateReturn = (payload) => ({
  type: SET_DATE_RETURN,
  payload: payload,
});

export const setItemCarStart = (payload) => ({
  type: SET_ITEM_CAR_START,
  payload: payload,
});
export const setItemCarSuccess = (payload) => ({
  type: SET_ITEM_CAR_SUCCESS,
  payload: payload,
});
export const setItemCarFailed = (payload) => ({
  type: SET_ITEM_CAR_FAILED,
  payload: payload,
});

export const setTotalRentalDays = (payload) => ({
  type: SET_TOTAL_RENTAL_DAYS,
  payload: payload,
});

export const setRentalInfomation = (payload) => ({
  type: SET_RENTAL_INFOMATION,
  payload: payload,
});

export const setBirthdayUser= (payload) => ({
  type: SET_BIRTHDAY_USER,
  payload: payload,
});

export const setAgeUser= (payload) => ({
  type: SET_AGE_USER,
  payload: payload,
});


export const getRentedCar= (payload) => ({
  type: GET_RENTED_CARS,
  payload: payload,
});
export const getItemRentedCar= (payload) => ({
  type: GET_ITEM_RENTED_CARS,
  payload: payload,
});

export const updateItemRentedCarSuccess= (payload) => ({
  type: UPDATE_ITEM_RENTED_CARS_SUCCESS,
  payload: payload,
});
