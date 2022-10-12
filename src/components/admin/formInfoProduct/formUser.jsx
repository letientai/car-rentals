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
const axios = require("axios").default;

export const FormUser = () => {
  const dispatch = useDispatch();
  const { getItemUser } = useSelector(userSelector);
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
          <div className="row1">
            <div className="title">Id:</div>
            <div className="content">{getItemUser?.values?._id}</div>
          </div>
          <div className="row1">
            <div className="title"> Họ và tên: </div>

            <div className="content">
              {getItemUser?.values?.lastName +
                " " +
                getItemUser?.values?.firstName}
            </div>
          </div>
          <div className="row1">
            <div className="title"> Mật khẩu:</div>
            <div className="content">{getItemUser?.values?.password}</div>
          </div>
          <div className="row1">
            <div className="title"> Email:</div>
            <div className="content">{getItemUser?.values?.email}</div>
          </div>
          <div className="row1">
            <div className="title"> Admin:</div>
            <div className="content">
              {getItemUser?.values?.isAdmin.toString()}
            </div>
          </div>
        </div>
      </div>
      <div className="infomation_rented">
        <div className="header">
          <h5>Lịch sử thuê xe</h5>
        </div>
        <div className="infomation_rented__content">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="caption table">
            <caption>ĐƠN THUÊ</caption>
            <TableHead>
              <TableRow>
                <TableCell>Mã thuê</TableCell>
                <TableCell align="left">Tên xe</TableCell>
                <TableCell
                  align="left"
                  size="small"
                  className="MuiTableCell-sizeSmall"
                >
                  Ngày bắt đầu thuê
                </TableCell>
                <TableCell align="left">Số ngày thuê</TableCell>
                <TableCell align="left">Đơn giá</TableCell>
                <TableCell align="left">Tổng tiền</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* {getUsers?.values?.map((item, index) => (
                <TableRow
                  key={index}
                  className="productRow"
                  onClick={() => moveToDetail(item._id)}
                >
                  <TableCell component="th" scope="row">
                    {item?._id}
                  </TableCell>
                  <TableCell align="left">{item?.email}</TableCell>
                  <TableCell align="left" className="fieldPassword">
                    {item?.password}
                  </TableCell>
                  <TableCell align="left">
                    {item?.lastName + " " + item?.firstName}
                  </TableCell>
                  <TableCell align="left">{item?.isAdmin.toString()}</TableCell>
                  <TableCell
                    align="right"
                    className="action d-flex "
                    size="medium"
                  >
                    <div className="icon-action mx-2">
                      <HighlightOffIcon />
                    </div>
                    <div
                      className="icon-action"
                      //   onClick={(e) => showInfOrder(item)}
                    >
                      <RemoveRedEyeIcon />
                    </div>
                  </TableCell>
                </TableRow>
              ))} */}
            </TableBody>
          </Table>
        </TableContainer>
        </div>
      </div>
    </div>
  );
};
