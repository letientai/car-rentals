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
} from "./constants";

export const setDisplayOverlay = (payload) => ({
  type: SET_DISPLAY_OVERLAY,
  payload: payload,
});
export const setItemPropOverlay = (payload) => ({
  type: SET_ITEM_PROP_OVERLAY,
  payload: payload,
});

export const setItemCar = (payload) => ({
  type: SET_ITEM_CAR,
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