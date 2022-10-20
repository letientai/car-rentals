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
  SET_ITEM_GENRE,
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
  UPDATE_ITEM_RENTED_CARS_SUCCESS,
} from "./constants";

const initialState = {
  toastMessage: {
    display: false,
    title: "",
    mess: "",
  },
  isLoadingGlobal: false,
  overlay: {
    displayOverlay: false,
    itemPropOverlay: <></>,
  },
  alert: {
    displayAlert: false,
    itemPropAlert: <></>,
  },

  dateTime: {
    dateBooking: null,
    dateReturn: null,
    totalRentalDays: 0,
  },

  car: {
    getItemCar: {
      isLoading: false,
      error: null,
      success: false,
      value: null,
    },

    getCars: {
      isLoading: false,
      values: [],
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
    values: [],
  },

  carsSort: {
    isLoading: false,
    values: [],
  },
  genre: {
    getGenres: {
      isLoading: false,
      values: [],
    },
    addGenre: {
      isLoading: false,
      response: null,
    },
    deleteGenre: {
      isLoading: false,
      response: null,
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
    birthday: {
      age: null,
      date: null,
    },
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

  rentedCars: {
    values: null,
    list: [],
  },

  itemRentedCars: {
    values: null,
  },

  updateItemRentedCar:{
    success: null,
  },

  sendIdDetail: {
    openForm: {
      checkOpen: false,
      values: null,
    },
  },

  rentalInfomation: {
    values: null,
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
          success: true,
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
        login: {
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

    case SET_CARS_SORT_START:
      return {
        ...state,
        carsSort: {
          ...state.carsSort,
          isLoading: action.payload
        },
      };
    case SET_CARS_SORT_SUCCESS:
      return {
        ...state,
        carsSort: {
          ...state.carsSort,
          values: action.payload
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
    case SET_TOAST_MESSAGE:
      return {
        ...state,
        toastMessage: action.payload,
      };
    case SET_LOADING_GLOBAL:
      return {
        ...state,
        isLoadingGlobal: action.payload,
      };

    case SET_ADD_GENRE:
      return {
        ...state,
        genre: {
          ...state.genre,
          addGenre: {
            ...state.genre.addGenre,
            response: action.payload,
          },
        },
      };
    case SET_LOADING_ADD_GENRE:
      return {
        ...state,
        genre: {
          ...state.genre,
          addGenre: {
            ...state.genre.addGenre,
            isLoading: action.payload,
          },
        },
      };

    case SET_DELETE_GENRE:
      return {
        ...state,
        genre: {
          ...state.genre,
          deleteGenre: {
            ...state.genre.deleteGenre,
            response: action.payload,
          },
        },
      };
    case SET_LOADING_DELETE_GENRE:
      return {
        ...state,
        genre: {
          ...state.genre,
          deleteGenre: {
            ...state.genre.deleteGenre,
            isLoading: action.payload,
          },
        },
      };

    case SET_DISPLAY_ALERT:
      return {
        ...state,
        alert: {
          ...state.alert,
          displayAlert: action.payload,
        },
      };
    case SET_ITEM_PROP_ALERT:
      return {
        ...state,
        alert: {
          ...state.alert,
          itemPropAlert: action.payload,
        },
      };

    case SET_DATE_BOOKING:
      return {
        ...state,
        dateTime: {
          ...state.dateTime,
          dateBooking: action.payload,
        },
      };
    case SET_DATE_RETURN:
      return {
        ...state,
        dateTime: {
          ...state.dateTime,
          dateReturn: action.payload,
        },
      };

    case SET_ITEM_CAR_START:
      return {
        ...state,
        car: {
          ...state.car,
          getItemCar: {
            ...state.getItemCar,
            isLoading: true,
          },
        },
      };
    case SET_ITEM_CAR_SUCCESS:
      return {
        ...state,
        car: {
          ...state.car,
          getItemCar: {
            ...state.getItemCar,
            isLoading: false,
            values: action.payload,
            success: true,
          },
        },
      };
    case SET_ITEM_CAR_FAILED:
      return {
        ...state,
        car: {
          ...state.car,
          getItemCar: {
            ...state.getItemCar,
            isLoading: false,
            error: true,
          },
        },
      };
    case SET_TOTAL_RENTAL_DAYS:
      return {
        ...state,
        dateTime: {
          ...state.dateTime,
          totalRentalDays: action.payload,
        },
      };

    case SET_RENTAL_INFOMATION:
      return {
        ...state,
        rentalInfomation: {
          ...state.rentalInfomation,
          values: action.payload,
        },
      };

    case SET_BIRTHDAY_USER:
      return {
        ...state,
        user: {
          ...state.user,
          birthday: action.payload,
        },
      };
    case GET_RENTED_CARS:
      return {
        ...state,
        rentedCars: {
          ...state.rentedCars,
          values: action.payload,
        },
      };

    case GET_ITEM_RENTED_CARS:
      return {
        ...state,
        itemRentedCars: {
          ...state.itemRentedCars,
          values: action.payload,
          // list: [ ...state.itemRentedCars.list, action.payload]
        },
      };
    case UPDATE_ITEM_RENTED_CARS_SUCCESS:
      const aa = state.updateItemRentedCar.success
      return {
        ...state,
        updateItemRentedCar: {
          success: !aa,
        },
      };

    default:
      return state;
  }
};
export default rootReducer;
