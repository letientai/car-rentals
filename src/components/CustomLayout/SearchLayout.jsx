import { Container } from "@mui/material";
import React from "react";
import Navbar from "../Layout/Navbar/Navbar";
import "./LayoutCustom.scss";
import SelectGlobal from "../Global/Select/Select";
import { useSelector } from "react-redux";
import { genreSelector } from "../../redux";
import SliderSort from "../Global/SliderSort/SliderSort";
import { useEffect } from "react";
import DateTime from "../Global/DateTimePicker/Datime";





const SearchLayout = ({ children , cars}) => {
  const { getGenres } = useSelector(genreSelector);
  
  const sortGenres = [];
  const sortFuel = [];
  const sortCarsSeat = [];
  const sortPrice = ["Ưu tiên giá thấp", "Ưu tiên giá cao"];
  let maxValue = 0;
  cars?.forEach((car)=>{
    if(car.unitPrice >= maxValue){
        maxValue = car.unitPrice
    }
  });
  const fetchDatasSortOptions = () => {
    getGenres?.values?.forEach((element) => {
      sortGenres.push(element.label);
    });
    cars?.forEach((element) => {
      if (!sortCarsSeat.includes(element.seats)) {
        sortCarsSeat.push(element.seats);
      }
    });
    cars?.forEach((element) => {
      if (!sortFuel.includes(element.fuel)) {
        sortFuel.push(element.fuel);
      }
    });
  };
  fetchDatasSortOptions();
  useEffect(() => {
    fetchDatasSortOptions();// eslint-disable-next-line
  }, [getGenres.values, cars]);
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
              <label htmlFor="To">Bắt đầu</label>
              <DateTime className="form__group__date--time"  />
            </li>
            <li className="layout__top-item">
              <label htmlFor="from">Kết thúc</label>
              <DateTime className="form__group__date--time"  />
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
                  maxValue={maxValue && maxValue}
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
            </div>
            <div className="search__wrap">{children}</div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SearchLayout;
