import React from "react";
import "../Auth.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../../assets/css/globalStyles";
import LocalPostOfficeOutlinedIcon from "@mui/icons-material/LocalPostOfficeOutlined";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import CloseIcon from "@mui/icons-material/Close";
import { setDisplayOverlay, setItemPropOverlay } from "../../../redux";
import authRequest from "../../../api/authRequest";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Bắt buộc")
        .matches(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
          "Email không hợp lệ"
        ),
      password: Yup.string().required("Bắt buộc").min(8, "Tối thiểu 8 ký tự"),
    }),
    onSubmit: (userLogin) => {
      authRequest.loginUser(userLogin, dispatch);
    },
  });
  const handelBlurInput = (field) => {
    return formik.touched[field] && formik.errors[field] ? (
      <span className="err__mess">{formik.errors[field]}</span>
    ) : null;
  };
  const handleClose = (e) => {
    dispatch(setDisplayOverlay(false));
    dispatch(setItemPropOverlay(<></>));
  };
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      className="login"
    >
      <Button onClick={handleClose} className="btn__close">
        <CloseIcon />
      </Button>
      <form className="login__form" onSubmit={formik.handleSubmit}>
        <div className="form__title">
          <h1>Đăng nhập</h1>
        </div>
        <div className="form__group">
          <div className="group__field">
            <LocalPostOfficeOutlinedIcon />
            <input
              name="email"
              type="text"
              placeholder="Email"
              {...formik.getFieldProps("email")}
            />
          </div>
          {handelBlurInput("email")}
        </div>
        <div className="form__group">
          <div className="group__field">
            <HttpsOutlinedIcon />
            <input
              name="password"
              type="password"
              autoComplete="on"
              placeholder="Password"
              {...formik.getFieldProps("password")}
            />
          </div>
          {handelBlurInput("password")}
        </div>
        <div className="forgot__passwrod">
          <p>Quên mật khẩu?</p>
        </div>
        <div>
          <Button className="btn__login" type="submit">
            Sign in
          </Button>
          <div className="about__register">
            <span className="title__register">Bạn chưa là thành viên?</span>
            <Link onClick={handleClose} to="/register">
              <span className="link__register">Hãy đăng ký ngay!</span>
            </Link>
          </div>
          {/* <div className='anothe__login'>
            <span>Hãy đăng nhập bằng tài khoản</span>
            <div className='login__option' >
              <Button className='login__option--fb' >
                <FacebookIcon/>
                <span>FACEBOOK</span>
              </Button>
              <Button className='login__option--gg' >
                <GoogleIcon/>
                <span>GOOGLE</span>
              </Button>
            </div>
          </div> */}
        </div>
      </form>
    </div>
  );
};

export default Login;
