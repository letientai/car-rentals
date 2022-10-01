import React from 'react'
import "./Banner.scss"
import BannerSearch from './BannerSearch'
const Banner = () => {
  return (
    <div className='banner' >
      <div className='banner__img' ></div>
      <div className='banner__form' >
        <div className='wrap__form' >
            <div className='form__title' >
                <h2>MIOTO - CÙNG BẠN TRÊN MỌI HÀNH TRÌNH</h2>
            </div>
            <BannerSearch/>
        </div>
      </div>
    </div>
  )
}

export default Banner
