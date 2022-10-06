import { SET_DISPLAY_OVERLAY, SET_ITEM_CAR, SET_ITEM_PROP_OVERLAY, SET_LOADING_GET_CAR } from "./constants";

const initialState = {
    overlay : {
        displayOverlay : false,
        itemPropOverlay : <></>
    },
    car : {
        getCars : {
            isLoading : false,
            values : null,
        }
    }
   
}

const rootReducer = (state = initialState , action) => {
    switch (action.type) {
        case SET_DISPLAY_OVERLAY:
            return {
                ...state,
                overlay : {
                    ...state.overlay,
                    displayOverlay : action.payload
                }
            }
        case SET_ITEM_PROP_OVERLAY:
            return {
                ...state,
                overlay : {
                    ...state.overlay,
                    itemPropOverlay : action.payload
                }
            }
        case SET_LOADING_GET_CAR:
            return {
                ...state,
                car : {
                    ...state.car,
                    getCars : {
                        ...state.car.getCars,
                        isLoading : action.payload
                    }
                }
            }
        case SET_ITEM_CAR:
            return {
                ...state,
                car : {
                    ...state.car,
                    getCars : {
                        ...state.car.getCars,
                        values : action.payload
                    }
                }
            }
        default:
            return state;
    }
}
export default rootReducer;