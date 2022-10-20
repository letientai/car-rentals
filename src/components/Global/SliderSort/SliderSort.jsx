import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { carSelector, carsSortSelector, setCarsSortSuccess } from '../../../redux';
import { useDispatch, useSelector } from 'react-redux';

function valuetext(value) {
  return `${value}`;
}

export default function SliderSort({maxValue , title}) {
  const [value, setValue] = React.useState([0, maxValue]);
  const dispatch = useDispatch();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const {getCars} = useSelector(carSelector);
  const {values} = useSelector(carsSortSelector);
  React.useEffect(()=>{
    setValue([0 , maxValue]);
  },[maxValue])
  const handleMouseUP = (event) => {
    const [from, to] = value;
    
    const isObj = {
        from,
        to,
    }
    if(title === 'unitPrice'){
        const carOptionPrice =getCars.values.filter(
            car => 
            car.unitPrice >= isObj.from 
            && 
            car.unitPrice <= isObj.to 
        )
        dispatch(setCarsSortSuccess(carOptionPrice));
    }
  }

  return (
    <>
        <Box
        className='sort__slider'
        sx={{ width: 200 }}>
        
        {maxValue?
          <Slider
          getAriaLabel={() => 'Temperature range'}
          value={value}
          name={title}
          max={maxValue}
          onChange={handleChange}
          getAriaValueText={valuetext}
          onMouseUp={handleMouseUP}
          />
          :<span>Loading</span>
        }
        </Box>
        {maxValue?
        <div className='sort__price--display' >
          <span>{!value[0] === 0?value[0] + "k":value[0]+'k'}</span>
          <span>{value[1]}k</span>
        </div>
        :null
        }
    </>
  );
}
