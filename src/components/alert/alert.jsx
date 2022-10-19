import React, { useEffect } from "react";
import Alert from "@mui/material/Alert";
import "./alert.scss";
import { useDispatch, useSelector } from "react-redux";
import { alertSelector, setDisplayAlert } from "../../redux";

export const AlertMessage = ({ chilren }) => {
  const alert = useSelector(alertSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (alert.displayAlert) {
      const timer = setTimeout(() => {
        dispatch(setDisplayAlert(false))
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [alert.displayAlert]);
  return (
    <div>
      <Alert className="alert-request" severity="info">
        {chilren}
      </Alert>
    </div>
  );
};
