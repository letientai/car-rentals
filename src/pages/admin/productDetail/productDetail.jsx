import React from "react";
import { FormInfo } from "../../../components/admin/formInfoProduct/formInfo";
import "./productDetail.scss";
export const ProductDetail = () => {
  return (
    <div className="productDetail-container">
      <div className="header d-flex ">
        <p>THÔNG TIN SẢN PHẨM</p>
        <div className="field">
          <button type="submit" className="btn__update">
            Cập nhật
          </button>
        </div>
      </div>
      <div className="content">
        <FormInfo />
      </div>
    </div>
  );
};
