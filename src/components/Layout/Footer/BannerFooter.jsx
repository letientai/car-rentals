import React from 'react'
import { Button } from '../../../assets/css/globalStyles'

const BannerFooter = () => {
  return (
    <div className='banner__footer' >
      <div className='banner__img'/>
      <div className='banner__dots--lef'></div>
      <div className='banner__dots--right' ></div>
      <div className='banner__wave' ></div>
      <div className='banner__phone-left' ></div>
      <div className='banner__phone-center' ></div>
      <div className='banner__down'>
        <div className='banner__down_app' >
            <h3>Ứng dụng cho điện thoại</h3>
            <p>Tải ngay ứng dụng tại App Store hoặc Google Play</p>
            <div className='btn__down' >
                <Button>
                    <div className='btn__down-app-store' ></div>
                </Button>
                <Button>
                    <div className='btn__down-gg-play' ></div>
                </Button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default BannerFooter
