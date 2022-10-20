import { Grid } from '@mui/material';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { carSelector, carsSortSelector, setCarsSortSuccess } from '../../redux';
import CarCard from '../Global/CarCard';
import "./ItemRenderSearch.scss"


const ItemRenderSearch = () => {
    // const dispatch = useDispatch();
    // const {getCars} = useSelector(carSelector);
    const {isLoading, values} = useSelector(carsSortSelector);
    
    const responsive = {
        sm : 12,
        md : 6,
        xs : 12,
    }
  return (
    <div className='item__render--search' >
        {isLoading?
            <div>Loading</div>:
            <Grid className='item__render--scroll' container >
                {values[0]?
                    values?.map((item , index)=>{
                        return (
                            <CarCard responsive={responsive} key={index} itemCar={item} />
                        )
                    })
                    :
                    <div>Không tìm thấy sản phẩm nào</div>
                }
            </Grid>
        }
    </div>
  )
}

export default ItemRenderSearch
