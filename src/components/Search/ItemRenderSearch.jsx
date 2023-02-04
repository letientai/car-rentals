import { Grid } from '@mui/material';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { carSelector, carsSortSelector, setCarsSortSuccess } from '../../redux';
import CarCard from '../Global/CarCard';
import "./ItemRenderSearch.scss"
import { CircularProgress } from "@mui/material";


const ItemRenderSearch = () => {
    // const dispatch = useDispatch();
    // const {getCars} = useSelector(carSelector);
    const {isLoading, values} = useSelector(carsSortSelector);
    // const [listCars , setListCars] = useState();

    
    const responsive = {
        sm : 12,
        md : 6,
        xs : 12,
    }
    // useEffect(()=>{
    //     const url = process.env.REACT_APP_URL_LOCAL;
    //     const localUser = JSON.parse(localStorage.getItem("currentUser"));
      
    //     const AuthStr = "bearer ".concat(localUser.accessToken);
    //     const fetchListCars = async () => {
    //         try {
    //           const res = await axios.get(`${url}/car`);
    //           setListCars(res)
    //         } catch (error) {
    //           console.log(error);
    //         }
    //       }
    // },[])
  return (
    <div className='item__render--search' >
        {isLoading?
            <CircularProgress color="success" className='loading'/>:
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
