import React from "react";
import { useSelector } from "react-redux";
import { carSelector, dateTimeSelector } from "../../redux";

export const CarBill = () => {
  const { getItemCar } = useSelector(carSelector);
  const { totalRentalDays } = useSelector(dateTimeSelector);
  const TotalRental =
    getItemCar?.values?.unitPrice + getItemCar?.values?.insuranceFees + 51948;
  return (
    <div className="car-bill" >
      <div className="title">Chi tiết giá</div>
      <div className="bill-wrap">
        <div className="group">
          <p>Đơn giá thuê </p>
          <span>
            {getItemCar?.values?.unitPrice
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
            / ngày
          </span>
        </div>
        <div className="group">
          <p>Phí dịch vụ </p>
          <span>51 948đ</span>
        </div>
        <div className="group">
          <p>Phí bảo hiểm</p>
          <span>
            {getItemCar?.values?.insuranceFees
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
            đ
          </span>
        </div>
        <div className="line"></div>
        <div className="group">
          <p>Tổng phí thuê xe</p>
          <span>
            {TotalRental.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
            <b>x {totalRentalDays} ngày</b>
          </span>
        </div>
        <div className="group">
          <p>Phí giao nhận xe </p>
          <span>Miễn phí</span>
        </div>
        <div className="line"></div>
        <div className="group has-line">
          <p>Tổng cộng</p>
          <span>
            {(TotalRental * totalRentalDays)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
            đ
          </span>
        </div>
      </div>
    </div>
  );
};
