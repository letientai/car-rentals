import {
  SET_CARS_SORT,
  SET_DISPLAY_OVERLAY,
  SET_ITEM_CAR,
  SET_ITEM_GENRE,
  SET_ITEM_PROP_OVERLAY,
  SET_LOADING_GET_CAR,
  SET_LOADING_GET_GENRE,
  SET_LOGIN_FAILED,
  SET_LOGIN_START,
  SET_LOGIN_SUCCESS,
  SET_REGISTER_FAILED,
  SET_REGISTER_START,
  SET_REGISTER_SUCCESS,
} from "./constants";

const initialState = {
  overlay: {
    displayOverlay: false,
    itemPropOverlay: <></>,
  },
  car: {
    getCars: {
      isLoading: false,
      values: [],
    },
  },
  carsSort : [],
  genre: {
    getGenres: {
      isLoading: false,
      values: [],
    },
  },
  register: {
    isLoading: false,
    error: null,
    success: false,
  },
  login: {
    currentUser: null,
    isLoading: false,
    error: null,
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DISPLAY_OVERLAY:
      return {
        ...state,
        overlay: {
          ...state.overlay,
          displayOverlay: action.payload,
        },
      };
    case SET_ITEM_PROP_OVERLAY:
      return {
        ...state,
        overlay: {
          ...state.overlay,
          itemPropOverlay: action.payload,
        },
      };
    case SET_LOADING_GET_CAR:
      return {
        ...state,
        car: {
          ...state.car,
          getCars: {
            ...state.car.getCars,
            isLoading: action.payload,
          },
        },
      };
    case SET_ITEM_CAR:
      return {
        ...state,
        car: {
          ...state.car,
          getCars: {
            ...state.car.getCars,
            values: action.payload,
          },
        },
      };
    case SET_LOADING_GET_GENRE:
      return {
        ...state,
        genre: {
          ...state.genre,
          getGenres: {
            ...state.genre.getGenres,
            isLoading: action.payload,
          },
        },
      };
    case SET_ITEM_GENRE:
      return {
        ...state,
        genre: {
          ...state.genre,
          getGenres: {
            ...state.genre.getGenres,
            values: action.payload,
          },
        },
      };
    case SET_REGISTER_START:
      return {
        ...state,
        register: {
          ...state.register,
          isLoading: true,
        },
      };
    case SET_REGISTER_SUCCESS:
      return {
        ...state,
        register: {
          ...state.register,
          isLoading: false,
          currentUser: true,
          error: null,
        },
      };
    case SET_REGISTER_FAILED:
      return {
        ...state,
        register: {
          ...state.register,
          isLoading: false,
          error: true,
        },
      };
    case SET_LOGIN_START:
      return {
        ...state,
        register: {
          ...state.login,
          isLoading: true,
        },
      };
    case SET_LOGIN_SUCCESS:
      return {
        ...state,
        login: {
          ...state.login,
          isLoading: false,
          currentUser: action.payload,
          error: null,
        },
      };
    case SET_LOGIN_FAILED:
      return {
        ...state,
        login: {
          ...state.login,
          isLoading: false,
          currentUser: null,
          error: action.payload,
        },
      };
    case SET_CARS_SORT:
      return {
        ...state,
        carsSort: action.payload,
      };
    default:
      return state;
  }
};
export default rootReducer;
