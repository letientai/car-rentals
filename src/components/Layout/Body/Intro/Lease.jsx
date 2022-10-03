import React from 'react'
import { Button } from '../../../../assets/css/globalStyles';

const Lease = () => {
    const leaseImg = "https://www.mioto.vn/static/media/bg-main-2.c3672bdc.jpg";
  return (
    <div className='intro__lease'>
        <div 
        className='lease__img'
        style={{
            backgroundImage: 'url(' +leaseImg + ')',
        }}
         ></div>
         <div className='wrap__guide' >
            <div className='lease__guide' >
                <h2 className='guide__title' >Bạn muốn cho thuê xe</h2>
                <p className='guide__desc'>Hãy đăng kí trở thành đối tác của chúng tôi ngay để có cơ hội kiếm thêm thu nhập hằng tháng.</p>
                <div className='button__lease' >
                    <Button className='button__left' >Tìm hiểu ngay</Button>
                    <Button className='button__right'>Đăng kí xe</Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Lease
