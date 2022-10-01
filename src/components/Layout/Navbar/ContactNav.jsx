import React from 'react'
import PhoneIcon from '@mui/icons-material/Phone';
import ContactMailIcon from '@mui/icons-material/ContactMail';


const ContactNav = () => {
  return (
    <>
        <div className='logo' >
          <div className='logo__img' ></div>
        </div>
        <div className='contact' >
          <div className='contact__phone' >
              <PhoneIcon/>
              <span>1900 9217</span>
          </div>
          <div className='contact__email' >
              <ContactMailIcon/>
              <span>contact@mioto.vn</span>
          </div>
        </div>
    </>
        
  )
}

export default ContactNav
