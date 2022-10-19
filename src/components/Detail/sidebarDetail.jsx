import React from "react";
import { CarBill } from "./carBill";
import { LineFormDateTime } from "./lineFormDateTime";

export const SidebarDetail = () => {
  const dateBooking = "booking";
  const dateReturn = "return";
  return (
    <div className="sidebar-detail">
      <div className="rent-box">
        <div className="price">
          <span>800k</span>
          <h3>
            680K
            <span>/ ngày</span>
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
        <CarBill/>
        <div className="wrap-btn">Đặt xe</div>
      </div>
    </div>
  );
};
