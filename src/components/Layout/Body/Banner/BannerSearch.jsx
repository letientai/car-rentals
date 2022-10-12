import React from 'react'
import { Button } from '../../../../assets/css/globalStyles'
import SearchIcon from '@mui/icons-material/Search';
import DateTime from '../../../Global/DateTimePicker/Datime';
import { useNavigate } from 'react-router-dom';
const BannerSearch = () => {

    const navigate = useNavigate();
    const handleNavigale = ()=>{
        navigate("/search");
    }
  return (
    <div className='banner__search' >
        <form className='search__form' >
            <div className='form__group' >
                <label htmlFor="">Địa điểm</label>
                <input type="text" placeholder='Nhập vào địa điểm'/>
            </div>
            <div className='form__group' >
                <label htmlFor="">Bắt đầu</label>
                <DateTime className="form__group__date--time"  />
            </div>
            <div className='form__group' >
                <label htmlFor="">Kết thúc</label>
                <DateTime className="form__group__date--time"  />
            </div>
            <Button 
            onClick={handleNavigale}
            className='btn__search'  >
                <SearchIcon/>
                <span>Tìm xe ngay</span>
            </Button>
        </form>
    </div>
  )
}

export default BannerSearch
