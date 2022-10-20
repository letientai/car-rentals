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
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import AlertDialogDelete from "./dialog";
import carRequest from "../../../api/carRequest";
import { carSelector } from "../../../redux";
import { CircularProgress } from "@mui/material";

export const TableProduct = (prop) => {
  const { deleteCar, getCars } = useSelector(carSelector);
  const [checkDialog, setCheckDialog] = useState(false);
  const [idDelete, setIdDelete] = useState("");
  const title = "rmProduct"
  const dispatch = useDispatch();

  const navigate = useNavigate();
  useEffect(() => {
    carRequest.getCarsApi(dispatch);
  }, [deleteCar.success]);

  const moveToDetail = (_id) => {
    navigate(`/product-management/${_id}`);
  };

  const deteleProduct = (e, item) => {
    e.stopPropagation();
    setCheckDialog(true);
    setIdDelete(item);
  };

  const closeDelete = (check) => {
    setCheckDialog(false);
  };
  return (
    <div className="tableProduct">
      <AlertDialogDelete
        checkDialog={checkDialog}
        idDelete={idDelete}
        closeDelete={closeDelete}
        title={title}
      />
      {getCars.isLoading ? (
        <CircularProgress color="success" />
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="caption table">
            <caption>SẢN PHẨM</caption>
            <TableHead>
              <TableRow>
                <TableCell>Mã xe</TableCell>
                <TableCell align="left">Tên xe</TableCell>
                <TableCell align="left">Loại</TableCell>
                <TableCell align="left">Số ghế</TableCell>
                <TableCell align="left">Trạng thái</TableCell>
                <TableCell align="left">Hành động</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {getCars.values?.map((item, index) => (
                <TableRow
                  key={item._id}
                  className="productRow"
                  onClick={() => moveToDetail(item._id)}
                >
                  <TableCell component="th" scope="row">
                    {item._id}
                  </TableCell>
                  <TableCell align="left">{item?.name}</TableCell>
                  <TableCell align="left">{item?.genre?.label}</TableCell>
                  <TableCell align="left">{item?.seats}</TableCell>
                  <TableCell align="left">{item?.available ? "Còn trống" : "Đã được thuê"}</TableCell>
                  <TableCell align="left" className="action">
                    <div
                      className="icon-action"
                      onClick={(e) => deteleProduct(e, item)}
                    >
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
      )}
    </div>
  );
};
