import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
const LoginSucceeded = () => {
  return (
    <div className='login__succeeded' >
        <div className='succeeded__info' >
            <CheckCircleIcon/>
            <p>
                Bạn đã đăng ký tài khoản thành cônng.Hệ thống sẽ tự động đăng nhập.Hãy cập nhật <span>tài khoản</span> hoặc quay lại <span>trang chủ</span> để tiếp tục sử dụng dịch vụ của Mioto
            </p>
        </div>
    </div>
  )
}

export default LoginSucceeded
