import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../assets/css/globalStyles'
import { setDisplayOverlay, setItemPropOverlay } from '../../../redux';
import Login from '../../auth/Login/Login';

const Auth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleNavigate = ()=>{
    navigate('/register');
  }
  return (
    <div className='auth' >
      <Button
      onClick={()=>{
        dispatch(setDisplayOverlay(true));
        dispatch(setItemPropOverlay(<Login/>));
      }}
      className='auth__btn auth__btn-login' >Đăng nhập</Button>
      <Button
      onClick={handleNavigate}
      className='auth__btn auth__btn-register' >Đăng ký</Button>
    </div>
  )
}

export default Auth
