import { SET_DISPLAY_OVERLAY, SET_ITEM_CAR, SET_ITEM_PROP_OVERLAY, SET_LOADING_GET_CAR } from "./constants";

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

