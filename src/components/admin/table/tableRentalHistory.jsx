import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableRowHistory } from "./tableRowHistory";

export const TableRentalHistory = ({ listRentedCars }) => {
  const [list, setList] = useState([]);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <caption>ĐƠN THUÊ</caption>
        <TableHead>
          <TableRow>
            <TableCell>Mã thuê</TableCell>
            <TableCell align="left">Tên xe</TableCell>
            <TableCell align="left" size="small">
              Ngày thuê
            </TableCell>
            <TableCell align="left">Ngày trả</TableCell>
            <TableCell align="left">Số ngày thuê</TableCell>
            <TableCell align="left">Đơn giá</TableCell>
            <TableCell align="left">Tổng tiền</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listRentedCars.length > 0 &&
            listRentedCars?.map((item, index) => (
              <TableRowHistory
                id={item}
                key={index}
                list={list}
                setList={setList}
                index={index}
              />
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
