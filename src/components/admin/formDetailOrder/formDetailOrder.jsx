import React, { useState } from "react";
import "./formDetailOrder.scss";
export const FormDetailOrder = (prop) => {
  const [orderStatus, setOrderStatus] = useState(0);

  const data = prop.ItemDetail;
  const handleSelectChange = (e) => {
    const order = parseInt(e.target.value);
    setOrderStatus(order);
  };

  //   const closeFormDetail = () =>{
  //     prop.closeForm(false)
  //   }
  return (
    <div className="formDetail-container">
      <div className="formDetai">
        <div className="header">
          <h3>Thông tin chi tiết đơn hàng</h3>
        </div>
        <div className="content">
          <div className="row">Tên khách hàng: {data?.name}</div>
          <div className="row">Số điện thoại: {data?.phone}</div>
          <div className="row">
            Địa chỉ: {data?.address + " " + data?.province}
          </div>
          <div className="row">Email: {data?.email}</div>
          <div className="row">
            <h4>Thông tin sản phẩm</h4>
            {/* {data?.listProduct.map((item, index) => (
              <div className="card-item" key={index}>
                <div className="card-item-id">
                  ID sản phẩm: {item.product_id}
                </div>
                <div className="card-item-name">{item.product_name}</div>
                <div className="card-item-name">Số lượng: {item.quantity}</div>
                <div className="card-item-name">
                  {item.selected_options[0].group_name +
                    " " +
                    ":" +
                    item.selected_options[0].option_name}
                </div>
              </div>
            ))} */}
          </div>
          <div className="row">
            Trạng thái đơn hàng:
            <select
              value={orderStatus}
              onChange={(e) => handleSelectChange(e)}
              className="select-status"
            >
              <option value="1">Vừa đặt</option>
              <option value="2">Đang giao</option>
              <option value="3">Đã nhận</option>
              <option value="4">Gửi trả</option>
            </select>
          </div>
          <div className="row-btn">
            <div className="groupBtn">
              <button className="btn btn-update">Cập nhật</button>
              <button className="btn btn-cancel">Hủy</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
