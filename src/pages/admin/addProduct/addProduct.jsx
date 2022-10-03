import React from 'react'
import { FormInfo } from '../../../components/admin/formInfoProduct/formInfo'
import "./addProduct.scss"
export const AddProduct = () => {
  return (
    <div className="productDetail-container">
    <div className="header d-flex ">
      <p>NHẬP THÔNG TIN</p>
      <div className="field">
        <button type="submit" className="btn__update">
          Thêm sản phẩm
        </button>
      </div>
    </div>
    <div className="content">
      <FormInfo />
    </div>
  </div>
  )
}
