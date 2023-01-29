import axios from "axios";
import {
  setDisplayOverlay,
  setItemPropOverlay,
  setLoadingGlobal,
  setLoginFailed,
  setLoginSuccess,
  setRegisterFailed,
  setRegisterStart,
  setRegisterSuccess,
  setToastMessage,
} from "../redux";

// https://api-rental-carl.herokuapp.com
const url = process.env.REACT_APP_URL_LOCAL;
const authRequest = {
  registerUser: async (user, dispatch, navigate) => {
    dispatch(setRegisterStart());
    try {
      const { data } = await axios.post(`${url}auth/register`, user);
      dispatch(setLoginSuccess(data));
      dispatch(setRegisterSuccess());
      localStorage.setItem("currentUser", JSON.stringify(data));
    } catch (error) {
      dispatch(setRegisterFailed(error));
    }
  },
  AdminregisterUser: async (user, dispatch, navigate) => {
    dispatch(setRegisterStart());
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const AuthStr = "bearer ".concat(currentUser.accessToken);
    try {
      const { data } = await axios.post(`${url}auth/admin/register`, user, {
        headers: { token: AuthStr },
      });
      dispatch(setLoginSuccess(data));
      dispatch(setRegisterSuccess());
      // localStorage.setItem("currentUser", JSON.stringify(data));
    } catch (error) {
      dispatch(setRegisterFailed(error));
    }
  },
  loginUser: async (user, dispatch) => {
    dispatch(setLoadingGlobal(true));
    dispatch(
      setToastMessage({
        display: false,
      })
    );
    try {
      const currentUser = await axios.post(`${url}auth/login`, user);
      dispatch(setLoadingGlobal(false));
      dispatch(setLoginSuccess(currentUser.data));
      dispatch(
        setToastMessage({
          display: true,
          title: "success",
          mess: "Bạn đã đăng nhập thành công",
        })
      );
      dispatch(setDisplayOverlay(false));
      dispatch(setItemPropOverlay(<></>));
      localStorage.setItem("currentUser", JSON.stringify(currentUser.data));
    } catch (error) {
      dispatch(setLoadingGlobal(false));
      dispatch(setLoginFailed(error));
      dispatch(
        setToastMessage({
          display: true,
          title: "error",
          mess: "Tài khoản hoặc mật khẩu không chính xác!",
        })
      );
    }
  },
  logoutUser: async (accessToken, dispatch, navigate) => {
    dispatch(setLoadingGlobal(true));
    dispatch(
      setToastMessage({
        display: false,
      })
    );
    try {
      await axios
        .post(
          `${url}auth/logout`,
          {},
          {
            headers: {
              token: `Bearer ${accessToken}`,
            },
          }
        )
        .then((response) => {
          dispatch(setLoadingGlobal(false));
          dispatch(
            setToastMessage({
              display: true,
              title: "success",
              mess: "Bạn đã đăng xuất thành công",
            })
          );
          navigate("/");
        })
        .catch((error) => dispatch(setLoadingGlobal(false)));
    } catch (error) {
      dispatch(setLoginFailed(error));
    }
  },
  updateUser: async (accessToken, dispatch, id, dataUpdate) => {
    dispatch(setLoadingGlobal(true));
    dispatch(
      setToastMessage({
        display: false,
      })
    );
    axios
      .patch(`${url}auth/${id}/edit`, dataUpdate, {
        headers: { token: `Bearer ${accessToken}` },
      })
      .then((response) => {
        dispatch(setLoadingGlobal(false));
        dispatch(setLoginSuccess(response.data));
        dispatch(
          setToastMessage({
            display: true,
            title: "success",
            mess: "Bạn đã cập nhật thành công",
          })
        );
        dispatch(setDisplayOverlay(false));
        dispatch(setItemPropOverlay(<></>));
        const { accessToken } = JSON.parse(localStorage.getItem("currentUser"));
        localStorage.removeItem("currentUser");
        localStorage.setItem(
          "currentUser",
          JSON.stringify({ ...response.data, accessToken })
        );
      })
      .catch((error) => {
        dispatch(setLoadingGlobal(false));
        dispatch(
          setToastMessage({
            display: true,
            title: "error",
            mess: "Cập nhật không thành công",
          })
        );
      });
  },
};
export default authRequest;
