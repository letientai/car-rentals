import React from "react";
import SliderCustom from "../Global/Slider/SliderCustom";
import dateFormat from "dateformat";
export const InfoRetal = () => {
  const rentalInformation = JSON.parse(
    localStorage.getItem("rentalInformation")
  );

  const settings = {
    arrows: false,
    slidesToShow: 1,
    dots: false,
  };

  return (
    <div className="infoRetal">
      <div className="infoRetal_car">
        <div className="infoRetal_car_name">{rentalInformation?.car?.name}</div>
        <div className="infoRetal_car_image">
          <SliderCustom customSetting={settings}>
            {rentalInformation?.car?.images?.map((item, index) => {
              return (
                <div className="wrap_image" key={index}>
                  <div
                    className="carImages"
                    style={{
                      backgroundImage: `url(${item})`,
                    }}
                  ></div>
                </div>
              );
            })}
          </SliderCustom>
        </div>
        <div className="sub_charac">
          <ul className="list_charac">
            <li className="car_seats">
              Ngày thuê:{" "}
              {dateFormat(rentalInformation?.bookingDate, "dd/mm/yyyy")}
            </li>
            <li className="car_driveTrains">
              Ngày trả:{" "}
              {dateFormat(rentalInformation?.returnDate, "dd/mm/yyyy")}
            </li>
            <li className="car_fuel">
              Số ngày thuê: {rentalInformation?.totalRentalDays}
            </li>
            <li className="car_fuel">
              Tổng phí thuê:{" "}
              {rentalInformation?.totalRent
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
              đ
            </li>
            <li className="car_fuel">
              <b>
                Tổng tiền:{" "}
                {(
                  rentalInformation?.totalRent *
                  rentalInformation?.totalRentalDays
                )
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                đ
              </b>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
