import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import TableCell from "@mui/material/TableCell";

import TableRow from "@mui/material/TableRow";
import rentalRequest from "../../../api/rentalRequest";
import dateFormat from "dateformat";

export const TableRowHistory = ({ id, list, setList, index }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    rentalRequest.getItemCarRental(id, dispatch, setList);
  }, []);

  return (
    <TableRow
      className="productRow"
      //   onClick={() => moveToDetail(item._id)}
    >
      <TableCell component="th" scope="row">
        {list[index]?._id}
      </TableCell>
      <TableCell align="left">{list[index]?.car_id?.name}</TableCell>
      <TableCell align="left">
        {dateFormat(list[index]?.rentDate, "dd/mm/yyyy")}
      </TableCell>
      <TableCell align="left" className="fieldPassword">
        {dateFormat(list[index]?.returnDate, "dd/mm/yyyy")}
      </TableCell>
      <TableCell align="left">{list[index]?.totalDays}</TableCell>
      <TableCell align="left">
        {list[index]?.totalPrice
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
        đ
      </TableCell>
      <TableCell align="left">
        {(list[index]?.totalPrice * list[index]?.totalDays)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
        đ
      </TableCell>
    </TableRow>
  );
};
