import { Container } from "@mui/material";
import React from "react";
import Navbar from "../Layout/Navbar/Navbar";
import "./LayoutCustom.scss";
import SelectGlobal from "../Global/Select/Select";
import {useDispatch, useSelector } from "react-redux";
import { carSelector, carsSortSelector, genreSelector, setCarsSortSuccess} from "../../redux";
import SliderSort from "../Global/SliderSort/SliderSort";
import { useEffect } from "react";
import SearchIcon from '@mui/icons-material/Search';
import { Button } from "../../assets/css/globalStyles";
import searchRequest from "../../api/searchRequest";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";





const SearchLayout = ({ children }) => {
  const { getGenres } = useSelector(genreSelector);
  const {getCars} = useSelector(carSelector);
  const {values} = useSelector(carsSortSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [sortGenres,setSortGenres] = useState([]);
  const [sortCarsSeat,setSortCarsSeat] = useState([]);
  const [sortFuel,setSortFuel] = useState([]);
  const sortPrice = ["Ưu tiên giá thấp", "Ưu tiên giá cao"];
  const [maxValue,setMaxValue] = useState(0);
  const elementInput = useRef();



  useEffect(() => {
    
    let max = 0;
    getCars.values?.forEach((car)=>{
      if(car.unitPrice >= max){
          max = car.unitPrice
      }
    });
    setMaxValue(max);


  },[values,getGenres.values]);
  useEffect(() => {
    const fetchInitGenre = ()=>{
      const genreCar = [];
      getGenres.values.forEach((element) => {
        if(!genreCar.includes(element.label)){
          genreCar.push(element.label);
        }
      });
      setSortGenres(genreCar);
    }
    const fetchInitSeats = ()=>{
      const seatsCar = [];
      getCars.values.forEach((element) => {
        if(!seatsCar.includes(element.seats)){
          seatsCar.push(element.seats);
        }
      });
     setSortCarsSeat(seatsCar);
    }
    const fetchInitFuel = ()=>{
      const fuelCar = [];
      getCars.values.forEach((element) => {
        if(!fuelCar.includes(element.fuel)){
          fuelCar.push(element.fuel);
        }
      });
      setSortFuel(fuelCar);
    }
    fetchInitFuel();
    fetchInitGenre();
    fetchInitSeats();
  },[getGenres.values]);

  useEffect(() => {
    const fetchGenre = () => {
      const genreCar = [];
      if(values.length == getCars.values.length) {
        getGenres.values.forEach((element) => {
          if(!genreCar.includes(element.label)){
            genreCar.push(element.label);
          }
        });
      }else{
        values.forEach((element) => {
          if(!genreCar.includes(element.genre.label)){
            genreCar.push(element.genre.label);
          }
        })
      }
      setSortGenres(genreCar);
    }
    const fetchSeats = () => {
      const seatsCars = [];
      if(values[0]){
        values.forEach((element) => {
          if(!seatsCars.includes(element.seats)){
            seatsCars.push(element.seats);
          }
        })
        setSortCarsSeat(seatsCars);
      }
    }
    const fetchFuel = () => {
      const fuelCars = [];
      if(values[0]){
        values.forEach((element) => {
          if(!fuelCars.includes(element.fuel)){
            fuelCars.push(element.fuel);
          }
        })
        setSortFuel(fuelCars);
      }
    }
    fetchFuel();
    fetchGenre();
    fetchSeats();
  },[values]);
  const handleSearch = ()=>{
    searchRequest.searchName(elementInput.current.value,dispatch);
  }
  const handleSetAllCars = ()=>{
    navigate("/search");
    dispatch(setCarsSortSuccess(getCars.values))
  }
  return (
    <div className="search__layout">
      <Navbar />
      <Container className="layout" maxWidth="lg">
        <div className="layout__top">
          <ul className="layout__top-list">
            <li className="layout__top-item">
              <label htmlFor="address">địa điểm</label>
              <input
                type="text"
                id="address"
                placeholder="Nhập địa điểm bạn muốn tìm kiếm"
              />
            </li>
            <li className="layout__top-item">
              <Button onClick={handleSearch}>
                <SearchIcon/>
              </Button>
              <input
                ref={elementInput}
                type="text"
                id="car-search"
                placeholder="Tìm kiếm bất kỳ xe mà bạn muốn"
              />
            </li>
          </ul>
        </div>
        <div className="layout__container__search">
          <div className="container__sidebar">
            <div className="sidebar">
              <div>
                <h6>Giá xe</h6>
                <SelectGlobal
                  fields={sortPrice}
                  title="optionPrice"
                />
              </div>
              <div>
                <h6>Mức giá</h6>
                <SliderSort
                  title="unitPrice"
                  maxValue={maxValue}
                />
              </div>
              <div>
                <h6>Loại Xe</h6>
                <SelectGlobal
                  fields={sortGenres}
                  title="genre"
                />
              </div>
              <div>
                <h6>Số ghế</h6>
                <SelectGlobal
                  fields={sortCarsSeat}
                  title="seats"
                />
              </div>
              <div>
                <h6>Nhiên liệu</h6>
                <SelectGlobal
                  fields={sortFuel}
                  title="fuel"
                />
              </div>
              <div className="all__car" >
                <Button onClick={handleSetAllCars} >Tất cả xe</Button>
              </div>
            </div>
            <div className="search__wrap">{children}</div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SearchLayout;
