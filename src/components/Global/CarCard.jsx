import React from 'react'
import EditLocationIcon from '@mui/icons-material/EditLocation';
const CarCard = ({itemCar}) => {
  return (
    <div className='item__card' >
      <div className='wrap__img' >
        {itemCar.images.map((img,index) => 
          <div className='item__card_img'
          key={index}
          style={{
            backgroundImage: 'url(' +img+')',
          }}
          ></div>
        )}
        <div className='item__card_price' >
          <span>{itemCar.unitPrice}/ngày</span>
        </div>
      </div>
      <h5 className='item__card_name' >{itemCar.name}</h5>
      <p>2 chuyến</p>
      <p className='item__card_fuel' >{itemCar.fuel}</p>
      <p className='item__card_address' >
        <EditLocationIcon/>
        {itemCar.address}
      </p>
    </div>
  )
}

export default CarCard
