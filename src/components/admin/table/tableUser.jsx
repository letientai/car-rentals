import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import userRequest from "../../../api/userRequest";
import { useDispatch, useSelector } from "react-redux";
import {  registerSelector, userSelector } from "../../../redux";
import { CircularProgress } from "@mui/material";

export const TableUser = () => {
  const { getUsers } = useSelector(userSelector);
  const { success } = useSelector(registerSelector);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    fetchDataUser();
  }, [success]);
  const fetchDataUser = () => {
    userRequest.getUserApi(dispatch);
  };
  const moveToDetail = (id) => {
    navigate(`/user-management/${id}`);
  };
  return (
    <div className="tableUser">
      {getUsers?.isLoading ? (
        <CircularProgress color="success" />
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="caption table">
            <caption>ĐƠN THUÊ</caption>
            <TableHead>
              <TableRow>
                <TableCell>Mã tài khoản</TableCell>
                <TableCell align="left">Tên tài khoản</TableCell>
                <TableCell
                  align="left"
                  size="small"
                  className="MuiTableCell-sizeSmall"
                >
                  Mật khẩu
                </TableCell>
                <TableCell align="left">Tên người dùng</TableCell>
                <TableCell align="left">Hành động</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {getUsers?.values?.map((item, index) => (
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
                  <TableCell
                    align="right"
                    className="action d-flex "
                    size="medium"
                  >
                    {/* <div className="icon-action mx-2">
                      <HighlightOffIcon />
                    </div> */}
                    <div
                      className="icon-action"
                      //   onClick={(e) => showInfOrder(item)}
                    >
                      <RemoveRedEyeIcon />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};
