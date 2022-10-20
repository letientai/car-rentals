import { CircularProgress } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { InputAddGenre } from "../../../components/admin/input/inputAddGenre";
import { TableGenre } from "../../../components/admin/table/tableGenre";
import { genreSelector } from "../../../redux";
import "./genreManagement.scss";
export const GenreManagement = () => {
  const { addGenre, deleteGenre } = useSelector(genreSelector);
  return (
    <div className="genreManagement-container">
      <div className="header">
        <div className="header__title">
          <p>Danh mục</p>
        </div>
        {/* <div className="header__btnAdd">
        <div className="btnAdd" >
          Thêm tài khoản
        </div>
      </div> */}
      </div>
      <div className="content">
        <InputAddGenre />
        {addGenre?.isLoading || deleteGenre?.isLoading ? <CircularProgress color="success" /> : <TableGenre />}
      </div>
    </div>
  );
};
