import React from 'react';
import BannerFooter from './BannerFooter';
import BodyFooter from './BodyFooter';
import "./Footer.scss";
const Footer = () => {
  return (
    <div className='footer' >
      <BannerFooter/>
      <BodyFooter/>
    </div>
  )
}

export default Footer
