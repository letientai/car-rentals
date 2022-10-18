import { useFormik } from 'formik';
import React from 'react'
import * as Yup from 'yup';
import LocalPostOfficeOutlinedIcon from '@mui/icons-material/LocalPostOfficeOutlined';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import './CustomForm.scss'
import { Button } from 'react-bootstrap';
import authRequest from '../../../api/authRequest';
import { useDispatch } from 'react-redux';
const CustomForm = ({title , keyUpdate}) => {
    const initialValues = {};
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const dispatch = useDispatch();
    if (keyUpdate) {
        initialValues[keyUpdate] = '';
        if (keyUpdate === 'password') {
            initialValues.newPassword = '';
            initialValues.passwordConfirm = '';
        }
    }

    const validationYup = {};
    switch (keyUpdate) {
        case 'firstName':
            validationYup[keyUpdate] = Yup.string()
            .required("Trường này không được để trống")
            .min(2, "Tên người dùng phải từ 2 ký tự")
            break;
        case 'lastName':
            validationYup[keyUpdate] = Yup.string()
            .required("Trường này không được để trống")
            .min(2, "Họ người dùng phải từ 2 ký tự")
            break;
        case 'email':
            validationYup[keyUpdate] = Yup.string()
            .required("Trường này không được để trống")
            .matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, "Email không hợp lệ")
            break;
        case 'password':
            validationYup[keyUpdate] = Yup.string()
            .required('Trường này không được để trống')
            .matches(/^[0-9a-zA-Z]{8,}$/,'Mật khẩu phải chứa ít nhất 8 ký tự');
            validationYup.newPassword = Yup.string()
            .required('Trường này không được để trống')
            .matches(/^[0-9a-zA-Z]{8,}$/,'Mật khẩu phải chứa ít nhất 8 ký tự');
            validationYup.passwordConfirm = Yup.string()
            .required("Trường này không được để trống")
            .oneOf([Yup.ref("newPassword"), null], "Mật khẩu không trùng khớp");
            break;
        default:
            break;
    }
    const formik = useFormik({
        initialValues,
        validationSchema: Yup.object(validationYup),
        onSubmit: (data)=>{
          const {passwordConfirm , ...userFormat} = data;
          authRequest.updateUser(currentUser.accessToken, dispatch,currentUser._id,userFormat);
        },
      });




    const handelBlurInput = (field)=>{
        return (formik.touched[field] && formik.errors[field]? (
            (<span className='err__mess' >{formik.errors[field]}</span>)
        ):null)
    }
  return (
    <div className='custom__form' onClick={(e)=>{
        e.stopPropagation();
    }}>
      <form className='custom__form__form'  onSubmit={formik.handleSubmit}>
        <div className='form__title' >
          <h1>Cập nhật {title}</h1>
        </div>
        {title === 'Tên'? 
        <div className='form__group' >
            <div className='group__field' >
                <PersonAddAltOutlinedIcon/>
                <input 
                name='firstName' 
                type="text" 
                placeholder='Enter your first name'
                {...formik.getFieldProps('firstName')}
            />
            </div>
            {handelBlurInput("firstName")}
        </div>
        :null}
        {title ==='Họ'? 
        <div className='form__group' >
            <div className='group__field' >
                <PersonAddAltOutlinedIcon/>
                <input 
                name='lastName' 
                type="text" 
                placeholder='Enter your last name'
                {...formik.getFieldProps('lastName')}
                />
            </div>
            {handelBlurInput("lastName")}
        </div>
        :null}
        {title ==='email'? 
        <div className='form__group' >
            <div className='group__field' >
                <LocalPostOfficeOutlinedIcon/>
                <input 
                name='email' 
                type="text" 
                placeholder='Email'
                {...formik.getFieldProps('email')}
                />
            </div>
            {handelBlurInput("email")}
        </div>
       :null}
        {title ==='Mật khẩu'? 
        <>
            <div className='form__group' >
                <div className='group__field'>
                    <HttpsOutlinedIcon/>
                    <input 
                    name='password' 
                    type="password" 
                    placeholder='Password'
                    autoComplete="on"
                    {...formik.getFieldProps('password')}
                    />
                </div>
            {handelBlurInput("password")}
            </div>
            <div className='form__group' >
                <div className='group__field'>
                    <HttpsOutlinedIcon/>
                    <input 
                    name='newPassword' 
                    type="password" 
                    placeholder='New password'
                    autoComplete="on"
                    {...formik.getFieldProps('newPassword')}
                    />
                </div>
            {handelBlurInput("newPassword")}
            </div>
            <div className='form__group' >
                <div className='group__field'>
                    <HttpsOutlinedIcon/>
                    <input 
                    name='passwordConfirm' 
                    type="password" 
                    placeholder='Password confirm'
                    autoComplete="on"
                    {...formik.getFieldProps('passwordConfirm')}
                    />
                </div>
            {handelBlurInput("passwordConfirm")}
            </div>
        </>
       :null}
        <div>    
          <Button
          className='btn__custom__form'
          type='submit' 
          >Cập nhật</Button>
        </div>
      </form>
    </div>
  )
}

export default CustomForm
