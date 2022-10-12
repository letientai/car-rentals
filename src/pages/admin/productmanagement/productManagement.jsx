import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TableProduct } from "../../../components/admin/table/tableProduct";
import "./productManagement.scss";

export const ProductManagement = () => {
  const navigate = useNavigate();
  const addProduct = () => {
    navigate("/add-product");
  };
 
  return (
    <div className="productManagement-container">
      <div className="header">
        <div className="header__title">
          <p>Sản phẩm</p>
        </div>
        {/* <div className="header__search">
          <input type="text" placeholder="Nhập mã xe..." />
        </div> */}
        <div className="header__btnAdd">
          <div className="btnAdd" onClick={addProduct}>
            Thêm sản phẩm
          </div>
        </div>
      </div>
      <div className="table">
        <TableProduct />
      </div>
    </div>
  );
};
