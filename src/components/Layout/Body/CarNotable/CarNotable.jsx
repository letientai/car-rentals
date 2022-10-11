import { Container } from '@mui/system';
import React from 'react';
import { useSelector } from 'react-redux';
import { carSelector } from '../../../../redux';
import CarCard from '../../../Global/CarCard';
import SliderCustom from '../../../Global/Slider/SliderCustom';
import "./CarNotable.scss";
const settings ={
    arrows : false,
}

const CarNotable = () => {
    const {getCars} = useSelector(carSelector);

    const carNotable = getCars?.values?.filter(car => car.unitPrice > 1000000);
  return (
    <Container maxWidth='lg' className='car__notable'>
        {getCars?.isLoading?
            <div>Loading</div>:
            <>
                <h3 className='car__notable__title' >XE NỔI BẬT - XE TỰ LÁI</h3>
                <SliderCustom customSetting={settings} >
                    {carNotable?.map((item , index)=>{
                        return (
                            <CarCard key={index} itemCar={item} />
                        )
                    })}
                </SliderCustom>
            </>
        }
    </Container>
  )
}

export default React.memo(CarNotable);
