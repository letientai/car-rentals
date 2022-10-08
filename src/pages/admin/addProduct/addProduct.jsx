import React, { useState } from "react";
import { FormInfo } from "../../../components/admin/formInfoProduct/formInfo";
import "./addProduct.scss";

const axios = require('axios').default;

export const AddProduct = () => {
  const checkAddProduct = true;
  const [btnAddProduct, setBtnAddproduct] = useState(false)
  const addProduct = () =>{
   setBtnAddproduct(!btnAddProduct)
  }
  return (
    <div className="productDetail-container">
      <div className="header d-flex ">
        <p>NHẬP THÔNG TIN</p>
        
      </div>
      <div className="content">
        <FormInfo checkAddProduct={checkAddProduct} btnAddProduct={btnAddProduct}/>
      </div>
    </div>
  );
};
