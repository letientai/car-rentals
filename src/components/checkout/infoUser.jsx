import axios from "axios";
import dayjs from "dayjs";
import { FastField, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import rentalRequest from "../../api/rentalRequest";
import { setDisplayAlert, setItemPropAlert, userSelector } from "../../redux";
import { DateTime } from "./dateTime";
import { FormInfoSchema } from "./validation";

export const InfoUser = () => {
  const navigate = useNavigate();
  const [infoValidate, setInfoValidate] = useState();
  const [initialValues, setInitialValues] = useState({
    phone: "",
    gplx: "",
  });
  const dispatch = useDispatch();
  const { birthday } = useSelector(userSelector);
  const rentalInformation = JSON.parse(
    localStorage.getItem("rentalInformation")
  );
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const url = process.env.REACT_APP_URL_LOCAL;
  const AuthStr = "bearer ".concat(currentUser.accessToken);
  //Fetch info validate user
  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const { data } = await axios.get(`${url}user/${currentUser._id}`, {
          headers: { token: AuthStr },
        });
        console.log("data", data);
        if (data.authenInfo) {
          const { phone, gplx, dayOfBirth } = data.authenInfo;
          setInitialValues({
            phone,
            gplx,
          });
          setInfoValidate({
            phone,
            gplx,
            dayOfBirth,
          });
        }
      } catch (error) {}
    };
    fetchInfo();
  }, []);
  // Handle create info authen
  const handleAddInfoUser = async (infoAuthenUser) => {
    try {
      const data = await axios.post(`${url}authenInfo/create`, infoAuthenUser, {
        headers: { token: AuthStr },
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  function isVietnamesePhoneNumber(number) {
    return /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(number);
  }

  const onAdd = async (values) => {
    const date1 = dayjs(Date.now());
    const date2 = dayjs(infoValidate?.dayOfBirth);
    const diff = date1.diff(date2, "year", true);
    const years = Math.round(diff);
    console.log(years);
    if (!isVietnamesePhoneNumber(values.phone)) {
      dispatch(setItemPropAlert("Số điện thoại không hợp lệ"));
      dispatch(setDisplayAlert(true));
    } else if (infoValidate ? years < 18 : birthday.age < 18) {
      dispatch(setItemPropAlert("Yêu cầu đủ 18 tuổi"));
      dispatch(setDisplayAlert(true));
    } else {
      const info = {
        user_id: currentUser?._id,
        car_id: rentalInformation?.car?._id,
        rentDate: rentalInformation?.bookingDate,
        returnDate: rentalInformation?.returnDate,
        totalPrice: rentalInformation?.totalRent,
        totalDays: rentalInformation?.totalRentalDays,
        phone: values.phone,
      };
      console.log(info);
      if (!infoValidate) {
        const infoAuthenUser = {
          phone: values.phone,
          gplx: values.gplx,
          dayOfBirth: birthday.date,
        };
        handleAddInfoUser(infoAuthenUser);
      }
      rentalRequest.carRental(dispatch, info);
      navigate("/");
    }
  };

  return (
    <div className="infoUser">
      <div className="infoUser_header">Xác nhận thông tin khách hàng</div>
      <div className="infoUser_form">
        <Formik
          enableReinitialize
          initialValues={initialValues}
          validationSchema={FormInfoSchema}
          onSubmit={onAdd}
        >
          {({ errors, touched }) => (
            <Form className="form_fields">
              <div className="row1 d-flex ">
                <FastField
                  className={`input ${infoValidate && "disable"}`}
                  name="phone"
                  type="text"
                  placeholder="Số điện thoại"
                />
                {errors.phone && touched.phone ? (
                  <div className="formError">{errors.phone}</div>
                ) : null}
              </div>
              <div className="row1 d-flex ">
                <FastField
                  name="gplx"
                  className={`input ${infoValidate && "disable"}`}
                  type="text"
                  placeholder="GPLX"
                />
                {errors.gplx && touched.gplx ? (
                  <div className="formError">{errors.gplx}</div>
                ) : null}
              </div>
              <div className="row1 d-flex ">
                <DateTime birthdayProp={infoValidate?.dayOfBirth} />
              </div>
              <button type="submit" className="btn__rental">
                Thanh toán
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
