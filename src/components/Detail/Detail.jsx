import { Input } from "@mui/material";
import { Container, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import carRequest from "../../api/carRequest";
import { alertSelector, carSelector } from "../../redux";
import { AlertMessage } from "../alert/alert";
import "./Detail.scss";
import { SidebarDetail } from "./sidebarDetail";
const car = {
  _id: "63410a11f21557bf24bc2b66",
  genre: {
    _id: "6340e8d1303c892316222ce8",
    label: "KIA",
  },
  name: "KIA SELTOS DELUXE 2023",
  unitPrice: 800000,
  insuranceFees: 68000,
  images: [
    "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_danang/kia_seltos_deluxe_2021/p/g/2022/09/02/15/Uz9RKZlqNvvbv_pIMyIuMw.jpg",
    "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_danang/kia_seltos_deluxe_2021/p/g/2022/09/02/15/rb2kbBniBdcDPs75eeqcHw.jpg",
    "https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_danang/kia_seltos_deluxe_2021/p/g/2022/09/02/15/WwDECbfEsSfy5CEEo25o3Q.jpg",
  ],
  available: true,
  description:
    "Xe Kia Seltos siêu mới đăng kí 2021 có camera 360 an toàn 100%, xe cá nhân sạch sẽ kĩ càng ngăn nắp thơm tho, đầy đủ option camera lùi, camera hành trình, cruise control, limit tốc độ, camera 360 đi an toàn, phim cách nhiệt xịn mát mẻ đảm bảo thoải mái tự tin.",
  seats: 5,
  fuel: "Xăng",
  createdAt: "2022-10-08T05:26:41.650Z",
  updatedAt: "2022-10-12T15:10:48.244Z",
  __v: 0,
};
const Detail = ({ id }) => {
  const alert = useSelector(alertSelector);
  const dispatch = useDispatch();
  const {getItemCar} = useSelector(carSelector)
  useEffect(() =>{
    carRequest.getItemCar(id, dispatch)
  },[])
  return (
    <Container
      maxWidth="lg"
      className="detail"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <h1 className="carName">{car.name}</h1>
      <Grid container spacing={2}>
        <Grid item md={7} sm={12} xs={12}>
          <div
            className="carImages"
            style={{
              backgroundImage: `url(${car.images[0]})`,
            }}
          ></div>
          <div className="car_content">
            <div className="carCharactor">
              <span className="charac">Đặc điểm</span>
              <div className="sub_charac">
                <ul className="list_charac">
                  <li className="car_seats">Số ghế: {car.seats}</li>
                  <li className="car_driveTrains">Truyền động: Số tự động</li>
                  <li className="car_fuel">Nhiên liệu: {car.fuel}</li>
                </ul>
              </div>
            </div>
            <div className="car_description">
              <span className="descrip">Mô tả</span>
              <p className="content_descripton">{car.description}</p>
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
                  <li className="papers_items">- CMND và GPLX (đối chiếu)</li>
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
                15 triệu (tiền mặt/chuyển khoản cho chủ xe khi nhận xe)<br></br>{" "}
                hoặc Xe máy (kèm cà vẹt gốc) giá trị 15 triệu
              </p>
            </div>
            <div className="car_proviso">
              <span className="proviso_rules">Điều khoản</span>
              <div className="sub_rules">
                <p className="rules_content">
                  Quy định khác:<br></br>◦ Không sử dụng xe thuê vào mục đích
                  phi pháp, trái pháp luật. <br></br>◦ Không sử dụng xe thuê để
                  cầm cố, thế chấp.<br></br>◦ Không hút thuốc, nhả kẹo cao su,
                  xả rác trong xe.<br></br>◦ Không chở hàng quốc cấm dễ cháy nổ.
                  <br></br>◦ Không chở hoa quả, thực phẩm nặng mùi trong xe.
                  <br></br>◦ Khi trả xe, nếu xe bẩn hoặc có mùi trong xe, khách
                  hàng vui lòng vệ sinh xe sạch sẽ hoặc gửi phụ thu phí vệ sinh
                  xe.<br></br>
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
    </Container>
  );
};

export default Detail;
