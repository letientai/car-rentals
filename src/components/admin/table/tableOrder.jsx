import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useDispatch, useSelector } from "react-redux";
import { setOpenDetailOrder } from "../../../redux";
export const TableOrder = () => {
  const dispatch = useDispatch();

  const data = [
    {
      name: "áhháhd",
      phone: "1231231",
      address: "sadahsda",
      province: "ádháudiha",
      email: "ádhaoíhd",
    },
    {
      name: "áhháhd",
      phone: "1231231",
      address: "sadahsda",
      province: "ádháudiha",
      email: "ádhaoíhd",
    },
    {
      name: "áhháhd",
      phone: "1231231",
      address: "sadahsda",
      province: "ádháudiha",
      email: "ádhaoíhd",
    },
    {
      name: "áhháhd",
      phone: "1231231",
      address: "sadahsda",
      province: "ádháudiha",
      email: "ádhaoíhd",
    },
    {
      name: "áhháhd",
      phone: "1231231",
      address: "sadahsda",
      province: "ádháudiha",
      email: "ádhaoíhd",
    },
    {
      name: "áhháhd",
      phone: "1231231",
      address: "sadahsda",
      province: "ádháudiha",
      email: "ádhaoíhd",
    },
    {
      name: "áhháhd",
      phone: "1231231",
      address: "sadahsda",
      province: "ádháudiha",
      email: "ádhaoíhd",
    },
    {
      name: "áhháhd",
      phone: "1231231",
      address: "sadahsda",
      province: "ádháudiha",
      email: "ádhaoíhd",
    },
    {
      name: "áhháhd",
      phone: "1231231",
      address: "sadahsda",
      province: "ádháudiha",
      email: "ádhaoíhd",
    },
    {
      name: "áhháhd",
      phone: "1231231",
      address: "sadahsda",
      province: "ádháudiha",
      email: "ádhaoíhd",
    },
    {
      name: "áhháhd",
      phone: "1231231",
      address: "sadahsda",
      province: "ádháudiha",
      email: "ádhaoíhd",
    },
    {
      name: "áhháhd",
      phone: "1231231",
      address: "sadahsda",
      province: "ádháudiha",
      email: "ádhaoíhd",
    },
    {
      name: "áhháhd",
      phone: "1231231",
      address: "sadahsda",
      province: "ádháudiha",
      email: "ádhaoíhd",
    },
    {
      name: "áhháhd",
      phone: "1231231",
      address: "sadahsda",
      province: "ádháudiha",
      email: "ádhaoíhd",
    },
    {
      name: "áhháhd",
      phone: "1231231",
      address: "sadahsda",
      province: "ádháudiha",
      email: "ádhaoíhd",
    },
    {
      name: "áhháhd",
      phone: "1231231",
      address: "sadahsda",
      province: "ádháudiha",
      email: "ádhaoíhd",
    },
    {
      name: "áhháhd",
      phone: "1231231",
      address: "sadahsda",
      province: "ádháudiha",
      email: "ádhaoíhd",
    },
    {
      name: "áhháhd",
      phone: "1231231",
      address: "sadahsda",
      province: "ádháudiha",
      email: "ádhaoíhd",
    },
    {
      name: "áhháhd",
      phone: "1231231",
      address: "sadahsda",
      province: "ádháudiha",
      email: "ádhaoíhd",
    },
    {
      name: "áhháhd",
      phone: "1231231",
      address: "sadahsda",
      province: "ádháudiha",
      email: "ádhaoíhd",
    },
    {
      name: "áhháhd",
      phone: "1231231",
      address: "sadahsda",
      province: "ádháudiha",
      email: "ádhaoíhd",
    },
    {
      name: "áhháhd",
      phone: "1231231",
      address: "sadahsda",
      province: "ádháudiha",
      email: "ádhaoíhd",
    },
  ];

  const openDetailOrder = ( item) => {
    dispatch(setOpenDetailOrder(item))
  };
  useEffect(() => {
  });
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
              <TableCell align="left">Địa chỉ</TableCell>
              <TableCell align="left">Trạng thái </TableCell>
              <TableCell align="left">Hành động</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((item, index) => (
              <TableRow
                key={index}
                className="productRow"
                onClick={(e) => openDetailOrder(item)}
              >
                <TableCell component="th" scope="row">
                  {index}
                </TableCell>
                <TableCell align="left">{item.name}</TableCell>
                <TableCell align="left">{item.phone}</TableCell>
                <TableCell align="left">
                  {item.address + " " + item.province}
                </TableCell>
                <TableCell align="left">{item.email}</TableCell>
                <TableCell align="left" className="action">
                  <div className="icon-action">
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
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
