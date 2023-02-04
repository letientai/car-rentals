import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../assets/css/globalStyles'
import { loginSelector, setDisplayOverlay, setItemPropOverlay, setLoginFailed } from '../../../redux';
import Login from '../../auth/Login/Login';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import authRequest from '../../../api/authRequest';
const Auth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleNavigate = ()=>{
    navigate('/register');
  }
  const login = useSelector(loginSelector);
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const elementAuthCustom = useRef();
  const {isAdmin} = JSON.parse(localStorage.getItem("currentUser")) || false;
  const handleLogout = ()=>{
    localStorage.removeItem('currentUser');
    authRequest.logoutUser(currentUser.accessToken , dispatch,navigate);
    dispatch(setLoginFailed());
  }
  const handleManageAcc = ()=>{
    navigate('/account');
  }
  const handleNavigateAdmin = ()=>{
    navigate('/admin');
  }
  return (
    <div className='auth' >
      {
        login.currentUser || currentUser ?
        <div
        onClick={()=>{
          if(elementAuthCustom.current.classList.contains('active')){
            elementAuthCustom.current.classList.remove('active');
          }else{
            elementAuthCustom.current.classList.add('active');
          }
        }}
        className='auth__user' >
          <AccountCircleSharpIcon/>
          <span>{currentUser.firstName}</span>
          <ArrowDropDownIcon/>
          <ul 
          onClick={(e)=>{
            e.stopPropagation();
          }}
          ref={elementAuthCustom} className='auth__user--custom' >
            {isAdmin && <li onClick={handleNavigateAdmin} >Đến trang admin</li>}
            <li onClick={handleManageAcc} >Quản lý tài khoản cá nhân</li>
            <li onClick={handleLogout}>Đăng xuất</li>
          </ul>
        </div>
        :
        <>
        <Button
        onClick={()=>{
          dispatch(setDisplayOverlay(true));
          dispatch(setItemPropOverlay(<Login/>));
        }}
        className='auth__btn auth__btn-login' >Đăng nhập</Button>
        <Button
        onClick={handleNavigate}
        className='auth__btn auth__btn-register' >Đăng ký</Button>
        </>
      }
      
    </div>
  )
}

export default Auth
