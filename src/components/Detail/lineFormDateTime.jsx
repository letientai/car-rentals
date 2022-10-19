import React, { useEffect, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import dateFormat from "dateformat";
import { useDispatch, useSelector } from "react-redux";
import {
  dateTimeSelector,
  setDateBooking,
  setDateReturn,
  setDisplayAlert,
  setItemPropAlert,
} from "../../redux";
export const LineFormDateTime = ({ check }) => {
  const [value, setValue] = React.useState(dayjs(Date.now()));
  const [titleForm, setTitleForm] = useState("");
  const dispatch = useDispatch();
  const dateTime = useSelector(dateTimeSelector);

  useEffect(() => {
    if (check === "booking") {
      setTitleForm("Ngày nhận xe");
      dispatch(setDateBooking(dayjs(Date.now())));
    } else {
      setTitleForm("Ngày trả xe");
      dispatch(setDateReturn(dayjs(Date.now())));
    }
  }, []);
  const handleDateTime = (newValue) => {
    if (newValue - dayjs(Date.now()) < -85552334) {
      dispatch(setItemPropAlert("Không được nhập trước ngày hiện tại"));
      dispatch(setDisplayAlert(true));
    } else {
      if (check === "booking") {
        if (newValue > dateTime.dateReturn) {
          dispatch(setItemPropAlert("Ngày thuê phải trước ngày trả"));
          dispatch(setDisplayAlert(true));
        } else {
          setValue(newValue);
          dispatch(setDateBooking(newValue));
        }
      } else {
        if (newValue < dateTime.dateBooking) {
          dispatch(setItemPropAlert("Ngày trả phải sau ngày thuê"));
          dispatch(setDisplayAlert(true));
        } else {
          setValue(newValue);
          dispatch(setDateReturn(newValue));
        }
      }
    }
  };
  return (
    <div className="line-form has-timer">
      <div className="title">{titleForm}</div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Stack spacing={3}>
          <DesktopDatePicker
            renderInput={(params) => <TextField {...params} />}
            value={value}
            onChange={(newValue) => handleDateTime(newValue)}
            minDateTime={dayjs(value)}
          />
        </Stack>
      </LocalizationProvider>
    </div>
  );
};
