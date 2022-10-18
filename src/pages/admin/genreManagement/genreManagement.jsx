import React from "react";
import { TableGenre } from "../../../components/admin/table/tableGenre";
import "./genreManagement.scss"
export const GenreManagement = () => {
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
        <TableGenre />
      </div>
    </div>
  );
};
