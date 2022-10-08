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

import axios from "axios";

export const TableProduct = () => {
  const [data, setData] = useState([]);
  const [checkDelete, setCheckDelete] = useState(false)

  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = () => {
      let url = `http://api-rental-carl.herokuapp.com/car`;
      axios
        .get(url)
        .then(function (response) {
          // handle success
          setData(response.data);
          console.log(response.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    };
    fetchData();
  }, [checkDelete]);

  const moveToDetail = (_id) => {
    navigate(`/product-management/${_id}`);
  };

  const deteleProduct =(e, id) =>{
    e.stopPropagation();
    axios
    .delete(`http://api-rental-carl.herokuapp.com/car/${id}`)
    .then(function (response) {
      console.log(response);
      setCheckDelete(!checkDelete);
    })
    .catch(function (error) {
      console.log(error);
    })

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
                <TableCell align="left">{item?.fuel}</TableCell>
                <TableCell align="left" className="action">
                  <div className="icon-action" onClick={(e) => deteleProduct(e, item._id)}>
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
