import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector } from 'react-redux';
import { isLoadingGlobalSelector } from '../../../redux';

export default function SimpleBackdrop() {
    const isLoadingGlobal = useSelector(isLoadingGlobalSelector);
  return (
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoadingGlobal}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
