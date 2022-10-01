import React from 'react'
import { Button } from '../../../assets/css/globalStyles'

const Auth = () => {
  return (
    <div className='auth' >
      <Button className='auth__btn auth__btn-login' >Đăng nhập</Button>
      <Button className='auth__btn auth__btn-register' >Đăng ký</Button>
    </div>
  )
}

export default Auth
