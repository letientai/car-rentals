import { Container, Grid } from '@mui/material'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import AddLinkOutlinedIcon from '@mui/icons-material/AddLinkOutlined';
import React from 'react'
import "./Account.scss"
import dayjs from 'dayjs';
import { useDispatch } from 'react-redux';
import { setDisplayOverlay, setItemPropOverlay } from '../../redux';
import CustomForm from '../Global/CustomForm/CustomForm';
const Account = () => {
    const currUser = JSON.parse(localStorage.getItem('currentUser'));
    const dispatch = useDispatch();
    const handleUpdateEmail = ()=>{
        dispatch(setDisplayOverlay(true));
        dispatch(setItemPropOverlay(<CustomForm title={"email"} keyUpdate={'email'}/>))
    }
    const handleUpdateFirstName = ()=>{
        dispatch(setDisplayOverlay(true));
        dispatch(setItemPropOverlay(<CustomForm title={"Tên"} keyUpdate={'firstName'}/>))
    }
    const handleUpdateLastName = ()=>{
        dispatch(setDisplayOverlay(true));
        dispatch(setItemPropOverlay(<CustomForm title={"Họ"} keyUpdate={'lastName'}/>))
    }
    const handleUpdatePassword = ()=>{
        dispatch(setDisplayOverlay(true));
        dispatch(setItemPropOverlay(<CustomForm title={"Mật khẩu"} keyUpdate={'password'}/>))
    }
    
    
  return (
    <div className='account' >
        <div className='account__banner' ></div>
        <Container maxWidth='lg' className='account__user' >
            <Grid container>
                <Grid className='account__user--item' item md={12} >
                    <div className='account__img' >
                        <span>{currUser.firstName.charAt()}</span>
                    </div>
                    <div className='account__user__name'  >
                        <h1>
                            {currUser.lastName} {currUser.firstName} 
                            <button className='user__name__btn' >
                                <DriveFileRenameOutlineIcon/>
                            </button>
                            <ul className='user__name--update' >
                                <li onClick={handleUpdateLastName} >Họ</li>
                                <li onClick={handleUpdateFirstName} >Tên</li>
                                <span className='arrow-up arrow--name' ></span>
                            </ul>
                        </h1>
                        <div className='user__name__day--create' >
                            <span className='user__name__crossbar name__crossbar'>Ngày tạo : {dayjs(currUser.createdAt).format('DD/MM/YYYY')}</span>
                            <span className='user__name__trip' >{currUser.rentedCars[0]?currUser.rentedCars.length + 'chuyến đi':'Chưa có chuyến'}</span>
                        </div>
                    </div>
                </Grid>
            </Grid>
            <Grid className='account__user_info' container >
                <Grid item className='account__user__info--item' md={3}>
                    <h5 className='info__title' >Email</h5>
                    <DriveFileRenameOutlineIcon onClick={handleUpdateEmail} />
                </Grid>
                <Grid item className='account__user__info--item' md={3}>
                    <h5 className='info__title' >Mật khẩu</h5>
                    <DriveFileRenameOutlineIcon onClick={handleUpdatePassword} />
                </Grid>
                <Grid item className='account__user__info--item' md={3}>
                    <h5 className='info__title' >Google</h5>
                    <AddLinkOutlinedIcon className='info__link' />
                </Grid>
                <Grid item className='account__user__info--item' md={3}>
                    <h5 className='info__title' >Facebook</h5>
                    <AddLinkOutlinedIcon className='info__link' />
                </Grid>
            </Grid>
        </Container>
    </div>
  )
}

export default Account

