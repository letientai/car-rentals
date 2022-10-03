import React from 'react'
import { Button } from '../../../../assets/css/globalStyles'
import SearchIcon from '@mui/icons-material/Search';
const BannerSearch = () => {
  return (
    <div className='banner__search' >
        <form className='search__form' >
            <div className='form__group' >
                <label htmlFor="">Địa điểm</label>
                <input type="text" placeholder='Nhập vào địa điểm'/>
            </div>
            <div className='form__group' >
                <label htmlFor="">Bắt đầu</label>
                <input type="text" placeholder='Nhập vào địa điểm'/>
            </div>
            <div className='form__group' >
                <label htmlFor="">Kết thúc</label>
                <input type="text" placeholder='Nhập vào địa điểm'/>
            </div>
            <Button className='btn__search'  >
                <SearchIcon/>
                <span>Tìm xe ngay</span>
            </Button>
        </form>
    </div>
  )
}

export default BannerSearch
