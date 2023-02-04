import React, { useEffect, useState } from "react";
import "./formDetailOrder.scss";
import { useDispatch, useSelector } from "react-redux";
import { sendIdDetailSelector, setCloseDetailOrder } from "../../../redux";
import dateFormat from "dateformat";
import rentalRequest from "../../../api/rentalRequest";

export const FormDetailOrder = (prop) => {
  const [orderStatus, setOrderStatus] = useState(1);
  const [plight, setPlight] = useState(1);
  const dispatch = useDispatch();
  const { openForm } = useSelector(sendIdDetailSelector);
  const data = openForm.values;

  useEffect(() => {
    console.log(data);
    if (data?.plight === "Vừa đặt") {
      setOrderStatus(1);
      setPlight("Vừa đặt");
    }
    if (data?.plight === "Đang thuê") {
      setOrderStatus(2);
      setPlight("Đang thuê");
    }
    if (data?.plight === "Đã thuê") {
      setOrderStatus(3);
      setPlight("Đã thuê");
    }
    if (data?.plight === "Đã hủy") {
      setOrderStatus(4);
      setPlight("Đã hủy");
    }
  }, []);

  const handleSelectChange = (e) => {
    const order = parseInt(e.target.value);
    console.log(order);
    if (order === 1) {
      setPlight("Vừa đặt");
    } else if (order === 2) {
      setPlight("Đang thuê");
    } else if (order === 3) {
      setPlight("Đã thuê");
    } else {
      setPlight("Đã hủy");
    }
    setOrderStatus(order);
  };

  const closeForm = () => {
    dispatch(setCloseDetailOrder());
  };

  const update = () => {
    rentalRequest.updateItemCarRental(data?._id, dispatch, plight);
  };
  return (
    <div className="formDetail-container">
      <div className="formDetai">
        <div className="header">
          <h3>Thông tin chi tiết đơn hàng</h3>
        </div>
        <div className="content">
          <div className="row">Mã đơn hàng: {data?._id}</div>
          <div className="row">
            Tên khách hàng:{" "}
            {data?.user_id?.lastName + " " + data?.user_id?.firstName}
          </div>
          <div className="row">Số điện thoại: {data?.phone}</div>
          {/* <div className="row">Giấy phép lái xe: {data?.gplx}</div> */}
          <div className="row">
            Ngày sinh: {dateFormat(data?.birthday, "dd/mm/yyyy")}
          </div>
          <div className="row">Email: {data?.user_id?.email}</div>
          <div className="row">
            <h4>Thông tin đơn thuê</h4>
            <div className="card-item">
              <div className="card-item-id">Mã xe: {data?.car_id?._id}</div>
              <div className="card-item-name">Tên xe {data?.car_id?.name}</div>
              <div className="card-item-name">
                Ngày thuê: {dateFormat(data?.rentDate, "dd/mm/yyyy")}
              </div>
              <div className="card-item-name">
                Ngày trả: {dateFormat(data?.returnDate, "dd/mm/yyyy")}
              </div>
              <div className="card-item-name">
                Số ngày thuê: {data?.totalDays}
              </div>
              <div className="card-item-name">
                Phí thuê:{" "}
                {data?.totalPrice
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                đ
              </div>
              <div className="card-item-name">
                <b>
                  Tổng tiền:{" "}
                  {(data?.totalPrice * data?.totalDays)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                  đ
                </b>
              </div>
            </div>
          </div>
          <div className="row">
            Trạng thái đơn hàng:
            <select
              value={orderStatus}
              onChange={(e) => handleSelectChange(e)}
              className="select-status"
            >
              <option value="1">Vừa đặt</option>
              <option value="2">Đang thuê</option>
              <option value="3">Đã thuê</option>
              <option value="4">Đã hủy</option>
            </select>
          </div>
          <div className="row-btn">
            <div className="groupBtn">
              <button className="btn btn-update" onClick={update}>
                Cập nhật
              </button>
              <button className="btn btn-cancel" onClick={closeForm}>
                Hủy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
