import React, { useRef } from 'react'
import { Button } from '../../../../assets/css/globalStyles'
import SearchIcon from '@mui/icons-material/Search';
import searchRequest from '../../../../api/searchRequest'
import { createSearchParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
const BannerSearch = () => {
    const elementInputSearch = useRef();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleNavigale = (e)=>{

        navigate({
            pathname: "search",
            search: '?' + createSearchParams({ q: `${e.value}` })
        });
        searchRequest.searchName(e.value,dispatch);
    }
  return (
    <div className='banner__search' >
        <form
        onKeyDown={(e)=>{
            if(e.key === 'Enter'){
                e.preventDefault();
            }
        }}
        className='search__form' >
            <div className='form__group' >
                <label htmlFor="">Tìm kiếm</label>
                <input ref={elementInputSearch} name="q" type="text" placeholder='Nhập vào xe mà bạn muốn tìm kiếm'/>
            </div>
            <Button 
            type='button'
            onClick={() =>{
                handleNavigale(elementInputSearch.current)
            }}
            className='btn__search'  >
                <SearchIcon/>
                <span>Tìm xe ngay</span>
            </Button>
        </form>
    </div>
  )
}

export default BannerSearch
