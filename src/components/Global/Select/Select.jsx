import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { carSelector, carsSortSelector, setCarsSortSuccess } from '../../../redux';
import { useDispatch, useSelector } from 'react-redux';

export default function SelectGlobal({fields , title,setOptionsSort}) {
  const [sort, setSort] = React.useState('');
  const dispatch = useDispatch();
  const {values} = useSelector(carsSortSelector);
  const {getCars} = useSelector(carSelector);
  const handleChange = (event) => {
    setSort(event.target.value);
    const sortCars = [...values];
    if(!event.target.value){
      return dispatch(setCarsSortSuccess(getCars.values));
    }
        switch (title) {
          case "optionPrice":
            if (event.target.value === "Ưu tiên giá thấp") {
              (sortCars[0]?sortCars:getCars.values).sort(function (a, b) {
                  return a.unitPrice - b.unitPrice;
              });
              dispatch(setCarsSortSuccess(sortCars));
            }else{
              (sortCars[0]?sortCars:getCars.values).sort(function (a, b) {
                return b.unitPrice - a.unitPrice;
              });
              dispatch(setCarsSortSuccess(sortCars));
            }
          break;
          case "genre":
            const carOptionGenre = (sortCars[0]?sortCars:getCars.values).filter(
              car => 
              car.genre.label === event.target.value
            )
            dispatch(setCarsSortSuccess(carOptionGenre));
          break;
          case "seats":
            const carOptionSeats = (sortCars[0]?sortCars:getCars.values).filter(
              car => 
              car.seats === event.target.value
            )
            dispatch(setCarsSortSuccess(carOptionSeats));
            break;
          case "fuel":
            const carOptionFuel = (sortCars[0]?sortCars:getCars.values).filter(
              car => 
              car.fuel === event.target.value
            )
            dispatch(setCarsSortSuccess(carOptionFuel));
            break;
          default:
            break;
        }
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 140 }} size="small">
      <InputLabel id="demo-select-small">Sort</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={sort}
        name={title} 
        onChange={handleChange}
      >
        {fields.map((item , index)=>{
          return (
            <MenuItem 
            key={index} value={item}>{title === 'seats'? item+ ' chỗ': item}</MenuItem>
          )
        })}
      </Select>
    </FormControl>
  );
}
