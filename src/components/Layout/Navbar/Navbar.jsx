
import { Container } from '@mui/system'
import React from 'react'
import Auth from './Auth';
import ContactNav from './ContactNav';
import "./NavBar.scss";
const Navbar = () => {
  return (
    <div className='navBar' >
      <div className='navBar__img-lef'></div>
      <Container className='container'  maxWidth='lg' >
        <ContactNav/>
        <Auth/>
      </Container>
      <div className='navBar__img-right'></div>
    </div>
  )
}

export default Navbar
