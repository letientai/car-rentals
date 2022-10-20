import { FastField, Form, Formik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import rentalRequest from "../../api/rentalRequest";
import { setDisplayAlert, setItemPropAlert, userSelector } from "../../redux";
import { DateTime } from "./dateTime";
import { FormInfoSchema } from "./validation";

export const InfoUser = () => {
  const dispatch = useDispatch();
  const { birthday } = useSelector(userSelector);
  const rentalInformation = JSON.parse(
    localStorage.getItem("rentalInformation")
  );
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const initialValues = {
    phone: "",
    gplx: "",
  };
  function isVietnamesePhoneNumber(number) {
    return /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(number);
  }

  const onAdd = async (values) => {
    if (!isVietnamesePhoneNumber(values.phone)) {
      dispatch(setItemPropAlert("Số điện thoại không hợp lệ"));
      dispatch(setDisplayAlert(true));
    } else if (birthday.age < 18) {
      dispatch(setItemPropAlert("Yêu cầu đủ 18 tuổi"));
      dispatch(setDisplayAlert(true));
    } else {
      const info = {
        user_id: currentUser?._id,
        car_id: rentalInformation?.car?._id,
        rentDate: rentalInformation?.bookingDate,
        returnDate: rentalInformation?.returnDate,
        totalPrice: rentalInformation?.totalRent,
        phone: values.phone,
        gplx: values.gplx,
        totalDays: rentalInformation?.totalRentalDays,
        birthday: birthday.date,
      };
      // console.log(info);
      rentalRequest.carRental(dispatch, info);
    }
  };
  return (
    <div className="infoUser">
      <div className="infoUser_header">Xác nhận thông tin khách hàng</div>
      <div className="infoUser_form">
        <Formik
          initialValues={initialValues}
          validationSchema={FormInfoSchema}
          onSubmit={onAdd}
        >
          {({ errors, touched }) => (
            <Form className="form_fields">
              <div className="row1 d-flex ">
                <FastField
                  name="phone"
                  className="input"
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
                  className="input"
                  type="text"
                  placeholder="GPLX"
                />
                {errors.gplx && touched.gplx ? (
                  <div className="formError">{errors.gplx}</div>
                ) : null}
              </div>
              <div className="row1 d-flex ">
                <DateTime />
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
