import React from "react";
import { FormUser } from "../../../components/admin/formInfoProduct/formUser";
import "./userDetail.scss"
export const UserDetail = () => {
  return (
    <div className="userDetail-container">
      <div className="header d-flex ">
        <p>THÔNG TIN TÀI KHOẢN</p>
      </div>
      <div className="content">
        <FormUser/>
      </div>
    </div>
  );
};
