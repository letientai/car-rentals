import React from "react";
import EditLocationIcon from "@mui/icons-material/EditLocation";
import { Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import {setDisplayOverlay, setItemPropOverlay} from '../../redux';
import Detail from '../Detail/Detail'
const CarCard = ({ itemCar, responsive }) => {
  const dispatch = useDispatch();
  const handleShowDetailsCar = (id) =>{
    dispatch(setDisplayOverlay(true))
    dispatch(setItemPropOverlay(<Detail id={id}/>))
  }
  return (
    <Grid
      item
      md={responsive?.md}
      sm={responsive?.sm}
      xs={responsive?.xs}
      className="item__card"
    >
      <div 
      onClick={()=>{
        handleShowDetailsCar(itemCar._id)
      }}
      className="wrap__carCard">
        <div className="wrap__img">
          {itemCar.images.map((img, index) => (
            <div
              className="item__card_img"
              key={index}
              style={{
                backgroundImage: "url(" + img + ")",
              }}
            ></div>
          ))}
          <div className="item__card_price">
            <span>{itemCar.unitPrice.toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}đ/ngày</span>
          </div>
        </div>
        <h5 className="item__card_name">{itemCar.name}</h5>
        {/* <p>2 chuyến</p> */}
        <p className="item__card_fuel">{itemCar.fuel}</p>
        <p className="item__card_address">
          <EditLocationIcon />
          Đà Nẵng
        </p>
        <span className="car__available" >{itemCar.available?"Có sẵn":"Đã được thuê"}</span>
        <p className="car__seats" >Số ghế : {itemCar.seats}</p>
      </div>
    </Grid>
  );
};

export default CarCard;
