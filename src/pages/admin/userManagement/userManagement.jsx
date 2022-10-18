import React, { useEffect, useState } from "react";
import { TableUser } from "../../../components/admin/table/tableUser";
import "./userManagement.scss";
import RegisterConponent from "../../../components/auth/Register/Register";
import { registerSelector } from "../../../redux";
import { useSelector } from "react-redux";
export const UserManagement = () => {
  const { success, error } = useSelector(registerSelector);
  useEffect(() => {
    closeRegister();
  }, [success, error]);

  const [checkRegister, setCheckRegister] = useState(false);
  const closeRegister = () => {
    setCheckRegister(false);
  };
  const register = () => {
    setCheckRegister(true);
  };
  return (
    <div className="userManagement-container">
      <div className="header">
        <div className="header__title">
          <p>Tài khoản</p>
        </div>
        {checkRegister && (
          <div className="form">
            <div className="membrane" onClick={closeRegister}></div>
            <div className="formRegister">
              <RegisterConponent />
            </div>
          </div>
        )}

        <div className="header__btnAdd">
          <div className="btnAdd" onClick={register}>
            Thêm tài khoản
          </div>
        </div>
      </div>
      <div className="content">
        <TableUser />
      </div>
    </div>
  );
};
