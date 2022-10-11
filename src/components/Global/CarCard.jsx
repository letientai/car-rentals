import React from "react";
import EditLocationIcon from "@mui/icons-material/EditLocation";
import { Grid } from "@mui/material";
const CarCard = ({ itemCar, responsive }) => {
  return (
    <Grid
      item
      md={responsive?.md}
      sm={responsive?.sm}
      xs={responsive?.xs}
      className="item__card"
    >
      <div className="wrap__carCard">
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
            <span>{itemCar.unitPrice}/ngày</span>
          </div>
        </div>
        <h5 className="item__card_name">{itemCar.name}</h5>
        <p>2 chuyến</p>
        <p className="item__card_fuel">{itemCar.fuel}</p>
        <p className="item__card_address">
          <EditLocationIcon />
          Đà Nẵng
        </p>
      </div>
    </Grid>
  );
};

export default CarCard;
