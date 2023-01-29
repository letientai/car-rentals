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
  setAgeUser,
  setBirthdayUser,
  setDateBooking,
  setDateReturn,
  setDisplayAlert,
  setItemPropAlert,
  setTotalRentalDays,
} from "../../redux";

export const DateTime = ({ check , birthdayProp}) => {
  const [value, setValue] = React.useState(dayjs(Date.now()));
  console.log(value);
  console.log(Date.now("dd/MM/yyyy"));
  const dispatch = useDispatch();

  const handleDateTime = (newValue) => {
    const date1 = dayjs(Date.now());
    const date2 = dayjs(newValue);
    const diff = date1.diff(date2, "year", true);
    const years = Math.round(diff);
    let date = dateFormat(newValue, "isoUtcDateTime");
    const birthday = {
      date,
      age: years,
    };
    console.log(birthday);
    dispatch(setBirthdayUser(birthday));
    setValue(newValue);
  };
  return (
    <div className="dateTime">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Stack spacing={3}>
          <DatePicker
            className={birthdayProp && "disable" || ""}
            disableFuture
            openTo="year"
            views={["year", "month", "day"]}
            renderInput={(params) => <TextField {...params} />}
            value={birthdayProp?birthdayProp:value}
            label="Ngày sinh"
            onChange={(newValue) => handleDateTime(newValue)}
            minDateTime={dayjs(value)}
          />
        </Stack>
      </LocalizationProvider>
    </div>
  );
};
