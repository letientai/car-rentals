import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import dateFormat from "dateformat";

import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useDispatch, useSelector } from "react-redux";
import {
  rentedCarsSelector,
  setOpenDetailOrder,
  updateItemRentedCarCarsSelector,
} from "../../../redux";
import rentalRequest from "../../../api/rentalRequest";
export const TableOrder = () => {
  const dispatch = useDispatch();
  const listRentedCars = useSelector(rentedCarsSelector);
  const updateItemRentedCar = useSelector(updateItemRentedCarCarsSelector);
  const openDetailOrder = (item) => {
    dispatch(setOpenDetailOrder(item));
  };
  useEffect(() => {
    rentalRequest.getCarRental(dispatch);
  }, [updateItemRentedCar.success]);
  return (
    <div className="tableOrder">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="caption table">
          <caption>ĐƠN THUÊ</caption>
          <TableHead>
            <TableRow>
              <TableCell>Mã đơn thuê</TableCell>
              <TableCell align="left">Tên người thuê</TableCell>
              <TableCell align="left">Số điện thoại</TableCell>
              <TableCell align="left">Tên xe</TableCell>
              <TableCell align="left">Trạng thái </TableCell>
              <TableCell align="left">Ngày tạo</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listRentedCars?.values?.map((item, index) => (
              <TableRow
                key={index}
                className="productRow"
                onClick={(e) => openDetailOrder(item)}
              >
                <TableCell component="th" scope="row">
                  {item._id}
                </TableCell>
                <TableCell align="left">
                  {item?.user_id?.lastName + " " + item?.user_id?.firstName}
                </TableCell>
                <TableCell align="left">{item?.phone}</TableCell>
                <TableCell align="left">{item?.car_id?.name}</TableCell>
                <TableCell align="left">{item?.plight}</TableCell>
                <TableCell align="left">
                  {dateFormat(item?.createdAt, "dd/mm/yyyy")}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
