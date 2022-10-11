import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { carSelector, carsSortSelector, setCarsSort } from '../../../redux';
import { useDispatch, useSelector } from 'react-redux';

export default function SelectGlobal({fields , title,setOptionsSort}) {
  const [sort, setSort] = React.useState('');
  const dispatch = useDispatch();
  const carsSort = useSelector(carsSortSelector);
  const {getCars} = useSelector(carSelector);
  const handleChange = (event) => {
    setSort(event.target.value);
    const sortCars = [...carsSort];
    if(!event.target.value){
      return dispatch(setCarsSort(getCars.values));
    }
        switch (title) {
          case "optionPrice":
            if (event.target.value === "Ưu tiên giá thấp") {
              (sortCars[0]?sortCars:getCars.values).sort(function (a, b) {
                  return a.unitPrice - b.unitPrice;
              });
              dispatch(setCarsSort(sortCars));
            }else{
              (sortCars[0]?sortCars:getCars.values).sort(function (a, b) {
                return b.unitPrice - a.unitPrice;
              });
              dispatch(setCarsSort(sortCars));
            }
          break;
          case "genre":
            const carOptionGenre = getCars.values.filter(
              car => 
              car.genre.label === event.target.value
            )
            dispatch(setCarsSort(carOptionGenre));
          break;
          case "seats":
            const carOptionSeats = getCars.values.filter(
              car => 
              car.seats === event.target.value
            )
            dispatch(setCarsSort(carOptionSeats));
            break;
          case "fuel":
            const carOptionFuel = getCars.values.filter(
              car => 
              car.fuel === event.target.value
            )
            dispatch(setCarsSort(carOptionFuel));
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
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
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
