import React from 'react'
import { useSelector } from 'react-redux'
import LoginSucceeded from '../../components/auth/LoginSucceeded'
import RegisterConponent from '../../components/auth/Register/Register'
import { loginSelector } from '../../redux'
const Register = () => {
  const {currentUser} = useSelector(loginSelector);
  return (
    <div>
      {!JSON.parse(localStorage.getItem('currentUser') || currentUser)?
      <RegisterConponent/>
      :
      <LoginSucceeded/>
      }
    </div>
  )
}

export default Register
