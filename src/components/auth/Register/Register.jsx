import React, { useEffect } from "react";
import "../Auth.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { Button } from "../../../assets/css/globalStyles";
import LocalPostOfficeOutlinedIcon from "@mui/icons-material/LocalPostOfficeOutlined";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import authRequest from "../../../api/authRequest";
import { useNavigate } from "react-router-dom";
const RegisterConponent = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .required("Bắt buộc")
        .min(2, "Tên người dùng phải từ 2 ký tự"),
      lastName: Yup.string()
        .required("Bắt buộc")
        .min(2, "Họ người dùng phải từ 2 ký tự"),
      email: Yup.string()
        .required("Bắt buộc")
        .matches(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
          "Email không hợp lệ"
        ),
      password: Yup.string()
        .required("Bắt buộc")
        .min(8, "Tối thiểu 8 ký tự")
        .max(15, "Quá dài"),
      passwordConfirm: Yup.string()
        .required("Bắt buộc")
        .oneOf([Yup.ref("password"), null], "Mật khẩu không trùng khớp"),
    }),
    onSubmit: (userRegister) => {
      const { passwordConfirm, ...userFormat } = userRegister;
      if (!currentUser?.isAdmin) {
        authRequest.registerUser(userFormat, dispatch, navigate);
      } else {
        authRequest.AdminregisterUser(userFormat, dispatch, navigate);
      }
    },
  });
  const handelBlurInput = (field) => {
    return formik.touched[field] && formik.errors[field] ? (
      <span className="err__mess">{formik.errors[field]}</span>
    ) : null;
  };
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      className="register"
    >
      <form className="register__form" onSubmit={formik.handleSubmit}>
        <div className="form__title">
          <h1>{!currentUser?.isAdmin ? "Đăng ký" : "Tạo tài khoản"}</h1>
        </div>
        <div className="form__group">
          <div className="group__field">
            <PersonAddAltOutlinedIcon />
            <input
              name="firstName"
              type="text"
              placeholder="Enter your first name"
              {...formik.getFieldProps("firstName")}
            />
          </div>
          {handelBlurInput("firstName")}
        </div>
        <div className="form__group">
          <div className="group__field">
            <PersonAddAltOutlinedIcon />
            <input
              name="lastName"
              type="text"
              placeholder="Enter your last name"
              {...formik.getFieldProps("lastName")}
            />
          </div>
          {handelBlurInput("lastName")}
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
              placeholder="Password"
              autoComplete="on"
              {...formik.getFieldProps("password")}
            />
          </div>
          {handelBlurInput("password")}
        </div>
        <div className="form__group">
          <div className="group__field">
            <HttpsOutlinedIcon />
            <input
              name="passwordConfirm"
              type="password"
              placeholder="Password confirm"
              autoComplete="on"
              {...formik.getFieldProps("passwordConfirm")}
            />
          </div>
          {handelBlurInput("passwordConfirm")}
        </div>
        <div>
          <Button className="btn__register" type="submit">
            {!currentUser?.isAdmin ? "Đăng ký" : "Tạo tài khoản"}
          </Button>
          {/* {!currentUser?.isAdmin && (
            <div className="anothe__register">
              <span>Hãy đăng nhập bằng tài khoản</span>
              <div className="register__option">
                <Button className="register__option--fb">
                  <FacebookIcon />
                  <span>FACEBOOK</span>
                </Button>
                <Button className="register__option--gg">
                  <GoogleIcon />
                  <span>GOOGLE</span>
                </Button>
              </div>
            </div>
          )} */}
        </div>
      </form>
    </div>
  );
};

export default RegisterConponent;
