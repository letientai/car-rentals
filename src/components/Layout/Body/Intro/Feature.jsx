import React from 'react'
import SliderCustom from '../../../Global/Slider/SliderCustom'

const img = [
    "https://www.mioto.vn/static/media/features-2.2113160d.jpg",
    "https://www.mioto.vn/static/media/features-5.96a02632.jpg",
    "https://www.mioto.vn/static/media/features-6.8892dedd.jpg",
    "https://www.mioto.vn/static/media/features-3.81ed6d57.jpg",
    "https://www.mioto.vn/static/media/features-4.38a67502.jpg",
    "https://www.mioto.vn/static/media/features-1.49135d20.jpg"
]
const Feature = () => {
  return (
    <div className='feature' >
        <h3 className='feature__title' >TÍNH NĂNG NỔI BẬT</h3>
        <SliderCustom>
            {img.map((item , index)=>{
                return (
                    <div key={index} className='wrap__img__feature' >
                        <div
                        className='feature__img'
                        style={{
                            backgroundImage : `url(${item})`
                        }}></div>
                    </div>
                )
            })}
        </SliderCustom>
    </div>
  )
}

export default Feature
