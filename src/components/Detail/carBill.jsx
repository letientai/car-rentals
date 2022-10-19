import React from "react";

export const CarBill = () => {
  return (
    <div className="car-bill">
      <div className="title">Chi tiết giá</div>
      <div className="bill-wrap">
        <div className="group">
          <p>Đơn giá thuê </p>
          <span>611 150 / ngày</span>
        </div>
        <div className="group">
          <p>Phí dịch vụ </p>
          <span>51 948 / ngày</span>
        </div>
        <div className="group">
          <p>Phí bảo hiểm</p>
          <span>51 948 / ngày</span>
        </div>
        <div className="line"></div>
        <div className="group">
          <p>Tổng phí thuê xe</p>
          <span>715 046 x 1 ngày</span>
        </div>
        <div className="group">
          <p>Phí giao nhận xe </p>
          <span>Miễn phí</span>
        </div>
        <div className="line"></div>
        <div className="group has-line">
          <p>Tổng cộng</p>
          <span>715 046đ</span>
        </div>
      </div>
    </div>
  );
};
