import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import './BasicAlert.scss';
import { useRef } from 'react';
import { toastMessageSelector } from '../../../redux/selectors';
import { useSelector } from 'react-redux';
export default function BasicAlert() {
   const basicAlert = useRef();
    const {display , title, mess} = useSelector(toastMessageSelector);
    
  //  React.useEffect(() => {
  //   const timerId = setTimeout(() =>{
  //     basicAlert.current.remove();
  //   },[3500])
  //   return ()=>{
  //     clearTimeout(timerId);
  //   }
  //  },[display]);

  return (
    <>
    {display && <div ref={basicAlert} className='basic__alert' >
      <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity={title?.toLowerCase()}>
          <AlertTitle>{title}</AlertTitle>
          <span>{mess}</span>
        </Alert>
      </Stack>
    </div>}
    </>
  );
}

