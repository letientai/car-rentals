import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  carSelector,
  dateTimeSelector,
  setDisplayAlert,
  setDisplayOverlay,
  setItemPropAlert,
  setItemPropOverlay,
  setRentalInfomation,
} from "../../redux";
import { CarBill } from "./carBill";
import { LineFormDateTime } from "./lineFormDateTime";

export const SidebarDetail = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const dateBooking = "booking";
  const dateReturn = "return";
  const dateTime = useSelector(dateTimeSelector);
  const { getItemCar } = useSelector(carSelector);
  const TotalRental =
    getItemCar?.values?.unitPrice + getItemCar?.values?.insuranceFees + 51948;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRental = () => {
    const rentalInformation = {
      car: getItemCar?.values,
      bookingDate: dateTime?.dateBooking,
      returnDate: dateTime?.dateReturn,
      totalRentalDays: dateTime?.totalRentalDays,
      totalRent: TotalRental,
    };
    if (!currentUser) {
      dispatch(setItemPropAlert("Đăng nhập để thực hiện chức năng này"));
      dispatch(setDisplayAlert(true));
    } else {
      dispatch(setRentalInfomation(rentalInformation));
      localStorage.setItem(
        "rentalInformation",
        JSON.stringify(rentalInformation)
      );
      dispatch(setDisplayOverlay(false));
      dispatch(setItemPropOverlay(<></>));
      navigate("/checkout");
    }
  };
  const disableRental = () => {
    console.log("disable");
  };
  return (
    <div className="sidebar-detail">
      <div className="rent-box">
        <div className="price">
          <span>
            {Math.round((getItemCar?.values?.unitPrice / 1000) * 1.1)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
            K
          </span>
          <h3>
            {(getItemCar?.values?.unitPrice / 1000)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
            K<span>/ ngày</span>
          </h3>
        </div>
        <LineFormDateTime check={dateBooking} />
        <LineFormDateTime check={dateReturn} />
        <div className="line-form notice-form note">
          <p className="d-flex-between content">
            {" "}
            Thời gian nhận xe <span>06:00-22:00 </span>
          </p>
          <p className="d-flex-between content">
            {" "}
            Thời gian trả xe <span>06:00-22:00 </span>
          </p>
        </div>
        <div className="line-form local">
          <p className="title">Địa điểm nhận xe</p>
          <div className="note">74 Đặng Như Mai - Cẩm Lệ - Đà Nẵng</div>
          <div className="notice-form">
            <p className="d-flex-between content">
              {" "}
              Giao nhận xe tận nơi trong <span>5 km</span>
            </p>
            <p className="d-flex-between content">
              {" "}
              Miễn phí giao nhận trong <span>3 km</span>
            </p>
            <p className="d-flex-between content">
              {" "}
              Phí giao nhận xe (2 chiều) <span>15 000đ/km</span>
            </p>
          </div>
        </div>
        <CarBill />
        <div
          className={
            getItemCar?.values?.available ? "wrap-btn" : "wrap-btn disable"
          }
          onClick={getItemCar?.values?.available ? handleRental : disableRental}
        >
          Đặt xe
        </div>
      </div>
    </div>
  );
};
