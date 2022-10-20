import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import dateFormat from 'dateformat';
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useDispatch, useSelector } from "react-redux";
import { carSelector, setOpenDetailOrder } from "../../../redux";
import carRequest from "../../../api/carRequest";
import { useNavigate } from "react-router-dom";
import AlertDialogDelete from "./dialog";

export const TableGenre = () => {
  const { getGenre } = useSelector(carSelector);
  const [checkDialog, setCheckDialog] = useState(false);
  const [idDelete, setIdDelete] = useState("");
  const title = "rmGenre"
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    fetchDataUser();
  }, []);
  const fetchDataUser = () => {
    carRequest.getGenre(dispatch);
  };


  const deteleGenre = (e, item) =>{
    e.stopPropagation();
    setCheckDialog(true);
    setIdDelete(item);
  }

  const closeDelete = (check) => {
    setCheckDialog(false);
  };

  return (
    <div className="tableGenre">
       <AlertDialogDelete
        checkDialog={checkDialog}
        idDelete={idDelete}
        closeDelete={closeDelete}
        title={title}
      />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="caption table">
          <caption>SẢN PHẨM</caption>
          <TableHead>
            <TableRow>
              <TableCell>Mã hãng</TableCell>
              <TableCell align="left">Tên hãng</TableCell>
              <TableCell align="center">Số lượng xe</TableCell>
              <TableCell align="left">Ngày tạo</TableCell>
              <TableCell align="center">Hành động</TableCell>
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
                <TableCell align="left">{dateFormat(item?.createdAt, "dd/mm/yyyy - h:MM TT")}</TableCell>
                <TableCell align="center" className="action">
                  <div
                    className="icon-action"
                    onClick={(e) => deteleGenre(e, item)}
                  >
                    <HighlightOffIcon />
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
