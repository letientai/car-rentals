import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import {useNavigate} from "react-router-dom"
export const TableProduct = () => {
  const navigate = useNavigate()
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

  const moveToDetail = (abc) =>{
    console.log("áđán");
    navigate(`/product-management/${abc}`)
  }
  return (
    <div className="tableProduct">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="caption table">
          <caption>SẢN PHẨM</caption>
          <TableHead>
            <TableRow>
              <TableCell>Mã xe</TableCell>
              <TableCell align="left">Tên xe</TableCell>
              <TableCell align="left">Loại</TableCell>
              <TableCell align="left">Số ghế</TableCell>
              <TableCell align="left">Nhiên liệu</TableCell>
              <TableCell align="left">Hành động</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((item, index) => (
              <TableRow key={index} className="productRow" onClick= {() => moveToDetail(index)}>
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
                    // onClick={(e) => showInfOrder(item)}
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
