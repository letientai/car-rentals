import { Grid } from '@mui/material';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { carSelector, carsSortSelector, setCarsSort } from '../../redux';
import CarCard from '../Global/CarCard';
import "./ItemRenderSearch.scss"


const ItemRenderSearch = () => {
    const dispatch = useDispatch();
    const {getCars} = useSelector(carSelector);
    const carsSort = useSelector(carsSortSelector);
    useEffect(() =>{
        dispatch(setCarsSort(getCars.values));
    },[getCars.values])
    const responsive = {
        sm : 12,
        md : 6,
        xs : 12,
    }
  return (
    <div className='item__render--search' >
        {getCars.isLoading?
            <div>Loading</div>:
            <Grid className='item__render--scroll' container >
                {!carsSort[0]?
                <div>
                    có cái nịt
                </div>:carsSort.map((item , index)=>{
                    return (
                        <CarCard responsive={responsive} key={index} itemCar={item} />
                    )
                })}
            </Grid>
        }
    </div>
  )
}

export default ItemRenderSearch
