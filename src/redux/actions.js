import { SET_DISPLAY_OVERLAY, SET_ITEM_CAR, SET_ITEM_PROP_OVERLAY, SET_LOADING_GET_CAR, SET_LOGIN_FAILED, SET_LOGIN_START, SET_LOGIN_SUCCESS, SET_REGISTER_FAILED, SET_REGISTER_START, SET_REGISTER_SUCCESS } from "./constants";

export const setDisplayOverlay = payload => ({
    type: SET_DISPLAY_OVERLAY,
    payload: payload
});
export const setItemPropOverlay = payload => ({
    type: SET_ITEM_PROP_OVERLAY,
    payload: payload
});
export const setItemCar = payload => ({
    type: SET_ITEM_CAR,
    payload: payload
});
export const setLoadingGetCar = payload => ({
    type: SET_LOADING_GET_CAR,
    payload: payload
});
export const setRegisterStart = payload => ({
    type: SET_REGISTER_START,
    payload: payload
});
export const setRegisterSuccess = payload => ({
    type: SET_REGISTER_SUCCESS,
    payload: payload
});
export const setRegisterFailed = payload => ({
    type: SET_REGISTER_FAILED,
    payload: payload
});
export const setLoginStart = payload => ({
    type: SET_LOGIN_START,
    payload: payload
});
export const setLoginSuccess = payload => ({
    type: SET_LOGIN_SUCCESS,
    payload: payload
});
export const setLoginFailed = payload => ({
    type: SET_LOGIN_FAILED,
    payload: payload
});

