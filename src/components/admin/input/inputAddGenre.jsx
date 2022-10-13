import { Alert } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import genreRequest from "../../../api/genreRequest";
import { carSelector } from "../../../redux";

export const InputAddGenre = () => {
  const { getGenre } = useSelector(carSelector);

  const [addData, setAddData] = useState("");
  const [checkAlert, setCheckAlert] = useState(false);
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const handLeData = (e) => {
    setAddData(e.target.value.toUpperCase());
  };
  const addGenre = () => {
    if (addData !== "") {
      setCheckAlert(true);
      if (getGenre.values.data.some((arrVal) => addData === arrVal.label)) {
        setMessage(`Hãng: ${addData} - Đã tồn tại!`);
      } else {
        genreRequest.addGenre(dispatch, addData);
        setMessage(`Thêm thành công!`);
        setAddData("")
      }
      const timer = setTimeout(() => {
        setCheckAlert(false);
      }, 3500);
      return () => clearTimeout(timer);
    }
  };

  const handleAddGenre = (e) => {
    if (e.key === "Enter" && addData !== "") {
      addGenre();
    }
  };
  return (
    <div>
      {checkAlert && (
        <Alert className="alertAddGenre" severity="info">
          {message}
        </Alert>
      )}
      <div className="addGenre">
        <input
          type="text"
          className="addGenre__input"
          value={addData}
          onChange={(e) => handLeData(e)}
          onKeyDown={(e) => handleAddGenre(e)}
          placeholder="Thêm danh mục"
        />
        <div className="addGenre__btn" onClick={addGenre}>
          +
        </div>
      </div>
    </div>
  );
};
