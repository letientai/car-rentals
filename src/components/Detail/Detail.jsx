import { Input } from "@mui/material";
import { Container, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import carRequest from "../../api/carRequest";
import {
  alertSelector,
  carSelector,
  isLoadingGlobalSelector,
} from "../../redux";
import { AlertMessage } from "../alert/alert";
import SliderCustom from "../Global/Slider/SliderCustom";
import "./Detail.scss";
import { SidebarDetail } from "./sidebarDetail";

const Detail = ({ id }) => {
  // const alert = useSelector(alertSelector);
  const dispatch = useDispatch();
  const { getItemCar } = useSelector(carSelector);
  const loading = useSelector(isLoadingGlobalSelector);

  useEffect(() => {
    carRequest.getItemCar(id, dispatch);
  }, []);

  const settings = {
    arrows: false,
    slidesToShow: 1,
  };
  return (
    <Container
      maxWidth="lg"
      className="detail"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      {!loading && (
        <>
          <div className="header">
            <h1 className="carName">{getItemCar?.values?.name}</h1>
            {!getItemCar?.values?.available && (
              <div className="status">ĐÃ ĐƯỢC THUÊ</div>
            )}
          </div>

          <Grid container spacing={2}>
            <Grid item md={7} sm={12} xs={12}>
              <SliderCustom customSetting={settings}>
                {getItemCar?.values?.images?.map((item, index) => {
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

              <div className="car_content">
                <div className="carCharactor">
                  <span className="charac">Đặc điểm</span>
                  <div className="sub_charac">
                    <ul className="list_charac">
                      <li className="car_seats">
                        Số ghế: {getItemCar?.values?.seats}
                      </li>
                      <li className="car_driveTrains">
                        Truyền động: Số tự động
                      </li>
                      <li className="car_fuel">
                        Nhiên liệu: {getItemCar?.values?.fuel}
                      </li>
                      <li className="car_fuel">
                        Hãng: {getItemCar?.values?.genre?.label}
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="car_description">
                  <span className="descrip">Mô tả</span>
                  <p className="content_descripton">
                    {getItemCar?.values?.description}
                  </p>
                </div>
                <div className="car_feature">
                  <span className="feature">Tính năng</span>
                  <div className="sub_feature">
                    <ul className="list_feature">
                      <li className="feature_items">Bản đồ</li>
                      <li className="feature_items">Bluetooth</li>
                      <li className="feature_items">Camera lùi</li>
                      <li className="feature_items">Định vị GPS</li>
                      <li className="feature_items">Khe cắp USB</li>
                      <li className="feature_items">Lốp dự phòng</li>
                      <li className="feature_items">Màn hình DVD</li>
                      <li className="feature_items">Túi khí an toàn</li>
                      <li className="feature_items">Camera hành trình</li>
                      <li className="feature_items">Cảm biến áp suất lốp</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="car_regulations">
                <div className="regulations_papers">
                  <span className="regulations_identification">
                    Giấy tờ thuê xe (Bản xe)
                  </span>
                  <div className="identification_content">
                    <ul className="list_papers">
                      <li className="papers_items">
                        - CMND và GPLX (đối chiếu)
                      </li>
                      <li className="papers_items">
                        - Và chọn 1 trong 2 hình thức
                      </li>
                      <li className="papers_items">
                        + Passport hoặc Hộ khẩu hoặc KT3 (giữ lại)
                      </li>
                      <li className="papers_items">
                        + Căn cước công dân gắn chip (đối chiếu)
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="car_mortgage">
                  <span className="mortgage_collateral">Tài sản thế chấp</span>
                  <p className="collateral_content">
                    15 triệu (tiền mặt/chuyển khoản cho chủ xe khi nhận xe)
                    <br></br> hoặc Xe máy (kèm cà vẹt gốc) giá trị 15 triệu
                  </p>
                </div>
                <div className="car_proviso">
                  <span className="proviso_rules">Điều khoản</span>
                  <div className="sub_rules">
                    <p className="rules_content">
                      Quy định khác:<br></br>◦ Không sử dụng xe thuê vào mục
                      đích phi pháp, trái pháp luật. <br></br>◦ Không sử dụng xe
                      thuê để cầm cố, thế chấp.<br></br>◦ Không hút thuốc, nhả
                      kẹo cao su, xả rác trong xe.<br></br>◦ Không chở hàng quốc
                      cấm dễ cháy nổ.
                      <br></br>◦ Không chở hoa quả, thực phẩm nặng mùi trong xe.
                      <br></br>◦ Khi trả xe, nếu xe bẩn hoặc có mùi trong xe,
                      khách hàng vui lòng vệ sinh xe sạch sẽ hoặc gửi phụ thu
                      phí vệ sinh xe.<br></br>
                      Trân trọng cảm ơn, chúc quý khách hàng có những chuyến đi
                      tuyệt vời !
                    </p>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item md={5} sm={12} xs={12}>
              <SidebarDetail />
            </Grid>
          </Grid>
        </>
      )}
    </Container>
  );
};

export default Detail;
