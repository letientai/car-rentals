import { Grid } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import { carSelector, carsSortSelector } from '../../redux';
import CarCard from '../Global/CarCard';
import "./ItemRenderSearch.scss"


const ItemRenderSearch = () => {
    const {getCars} = useSelector(carSelector);
    const carsSort = useSelector(carsSortSelector);
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
