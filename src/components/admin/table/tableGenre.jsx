import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { useDispatch, useSelector } from "react-redux";
import { carSelector, setOpenDetailOrder } from "../../../redux";
import carRequest from "../../../api/carRequest";
import { useNavigate } from "react-router-dom";

export const TableGenre = () => {
  const { getGenre } = useSelector(carSelector);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    fetchDataUser();
  }, []);
  const fetchDataUser = () => {
    carRequest.getGenre(dispatch);
    console.log();
  };
  useEffect(() => {
console.log(getGenre);
  },[getGenre])
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="caption table">
          <caption>SẢN PHẨM</caption>
          <TableHead>
            <TableRow>
              <TableCell>Mã hãng</TableCell>
              <TableCell align="left">Tên hãng</TableCell>
              <TableCell align="center">Số lượng xe</TableCell>
              <TableCell align="left">Ngày tạo</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {getGenre.values?.data?.map((item, index) => (
              <TableRow
                key={item._id}
                className="productRow"
                // onClick={() => moveToDetail(item._id)}
              >
                <TableCell component="th" scope="row">
                  {item._id}
                </TableCell>
                <TableCell align="left">{item?.label}</TableCell>
                <TableCell align="center">{item?.cars.length}</TableCell>
                <TableCell align="left">{item?.createdAt}</TableCell>
                {/* <TableCell align="left" className="action">
                  <div
                    className="icon-action"
                    // onClick={(e) => deteleProduct(e, item._id)}
                  >
                    <HighlightOffIcon />
                  </div>
                  <div
                    className="icon-action"
                    // onClick={(e) => showInfOrder(item)}
                  >
                    <RemoveRedEyeIcon />
                  </div>
                </TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
