import * as React from 'react';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Stack from '@mui/material/Stack';

export default function DateTime() {
  const [value, setValue] = React.useState(dayjs(Date.now()));
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <DateTimePicker
          renderInput={(params) => <TextField {...params} />}
          // label="Không thể thuê với thời gian bên dưới"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          minDateTime={dayjs(value)}
        />
      </Stack>
    </LocalizationProvider>
  );
}
