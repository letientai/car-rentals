import React from "react";
import { FormInfo } from "../../../components/admin/formInfoProduct/formInfo";
import "./productDetail.scss";
export const ProductDetail = () => {
  const checkAddProduct = false
  return (
    <div className="productDetail-container">
      <div className="header d-flex ">
        <p>THÔNG TIN SẢN PHẨM</p>
      </div>
      <div className="content">
        <FormInfo checkAddProduct={checkAddProduct}/>
      </div>
    </div>
  );
};
