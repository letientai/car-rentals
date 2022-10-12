import {
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

const initialState = {
  overlay: {
    displayOverlay: false,
    itemPropOverlay: <></>,
  },
  car: {
    getCars: {
      isLoading: false,
      values: null,
    },
    deleteCar: {
      isLoading: false,
      error: null,
      success: false,
    },
    getGenre: {
      isLoading: false,
      error: null,
      success: false,
      values: null,
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
  user: {
    getUsers: {
      isLoading: false,
      values: null,
      success: false,
      error: null,
    },
    getItemUser: {
      isLoading: false,
      values: null,
      success: false,
      error: null,
    },
  },

  sendIdDetail: {
    openForm: {
      checkOpen: false,
      values: null,
    },
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

    case SET_DELETE_CAR_START:
      return {
        ...state,
        car: {
          ...state.car,
          deleteCar: {
            ...state.deleteCar,
            isLoading: true,
          },
        },
      };
    case SET_DELETE_CAR_SUCCESS:
      return {
        ...state,
        car: {
          ...state.car,
          deleteCar: {
            ...state.deleteCar,
            isLoading: false,
            error: null,
            success: true,
          },
        },
      };
    case SET_DELETE_CAR_FAILED:
      return {
        ...state,
        car: {
          ...state.car,
          deleteCar: {
            ...state.deleteCar,
            isLoading: false,
            error: action.payload,
          },
        },
      };

    case SET_USER_START:
      return {
        ...state,
        user: {
          ...state.user,
          getUsers: {
            ...state.getUsers,
            isLoading: true,
          },
        },
      };
    case SET_USER_SUCCESS:
      return {
        ...state,
        user: {
          ...state,
          getUsers: {
            ...state.getUsers,
            isLoading: false,
            values: action.payload,
            success: true,
          },
        },
      };
    case SET_USER_FAILED:
      return {
        ...state,
        user: {
          ...state,
          getUsers: {
            ...state.getUsers,
            isLoading: false,
            error: true,
          },
        },
      };

    case SET_ITEM_USER_START:
      return {
        ...state,
        user: {
          ...state,
          getItemUser: {
            ...state.getItemUser,
            isLoading: true,
          },
        },
      };
    case SET_ITEM_USER_SUCCESS:
      return {
        ...state,
        user: {
          ...state,
          getItemUser: {
            ...state.getItemUser,
            isLoading: false,
            values: action.payload,
            success: true,
          },
        },
      };
    case SET_ITEM_USER_FAILED:
      return {
        ...state,
        user: {
          ...state,
          getItemUser: {
            ...state.getItemUser,
            isLoading: false,
            error: true,
          },
        },
      };

    case SET_OPEN_DETAIL_ORDER:
      return {
        ...state,
        sendIdDetail: {
          ...state.sendIdDetail,
          openForm: {
            ...state.openForm,
            values: action.payload,
            checkOpen: true,
          },
        },
      };

    case SET_CLOSE_DETAIL_ORDER:
      return {
        ...state,
        sendIdDetail: {
          ...state.sendIdDetail,
          openForm: {
            ...state.openForm,
            checkOpen: false,
          },
        },
      };

    case SET_GENRE_START:
      return {
        ...state,
        car: {
          ...state.car,
          getGenre: {
            ...state.getItemUser,
            isLoading: true,
          },
        },
      };
    case SET_GENRE_SUCCESS:
      return {
        ...state,
        car: {
          ...state.car,
          getGenre: {
            ...state.getGenre,
            isLoading: false,
            values: action.payload,
            success: true,
          },
        },
      };
    case SET_GENRE_FAILED:
      return {
        ...state,
        car: {
          ...state.car,
          getGenre: {
            ...state.getGenre,
            isLoading: false,
            error: true,
          },
        },
      };

    default:
      return state;
  }
};
export default rootReducer;
