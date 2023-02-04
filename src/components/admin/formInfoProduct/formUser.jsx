import "./formInfo.scss";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import userRequest from "../../../api/userRequest";
import { userSelector } from "../../../redux";
import { useLocation } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableRentalHistory } from "../table/tableRentalHistory";
const axios = require("axios").default;

export const FormUser = () => {
  const dispatch = useDispatch();
  const { getItemUser } = useSelector(userSelector);
  const listRentedCars = getItemUser?.values?.rentedCars;
  const [data, setData] = useState({});
  const location = useLocation();
  const id = location.pathname.split("user-management/")[1];
  useEffect(() => {
    userRequest.getItemUser(id, dispatch);
  }, []);
  return (
    <div className="formUser-container">
      <div className="infomation_user">
        <div className="header">
          <h5>Thông tin chi tiết</h5>
        </div>
        <div className="infomation_user__content">
          {/* <div className="row1">
            <div className="title">Id:</div>
            <div className="content">{getItemUser?.values?._id}</div>
          </div> */}
          <div className="row1">
            <div className="title"> Họ và tên: </div>

            <div className="content">
              {getItemUser?.values?.lastName +
                " " +
                getItemUser?.values?.firstName}
            </div>
          </div>
          {/* <div className="row1">
            <div className="title"> Mật khẩu:</div>
            <div className="content">{getItemUser?.values?.password}</div>
          </div> */}
          <div className="row1">
            <div className="title"> Email:</div>
            <div className="content">{getItemUser?.values?.email}</div>
          </div>
          {/* <div className="row1">
            <div className="title"> Admin:</div>
            <div className="content">
              {getItemUser?.values?.isAdmin.toString()}
            </div>
          </div> */}
        </div>
      </div>
      <div className="infomation_rented">
        <div className="header">
          <h5>Lịch sử thuê xe</h5>
        </div>
        <div className="infomation_rented__content">
          {listRentedCars && (
            <TableRentalHistory listRentedCars={listRentedCars} />
          )}
        </div>
      </div>
    </div>
  );
};
