import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const SliderCustom = ({children,customSetting}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        ...customSetting,
    };
  return (
    <div className='slider' >
        <Slider {...settings} >
            {children}
        </Slider>
    </div>
  )
}

export default SliderCustom
