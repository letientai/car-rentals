import { Container, Grid } from "@mui/material";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import AddLinkOutlinedIcon from "@mui/icons-material/AddLinkOutlined";
import React, { useEffect, useState } from "react";
import "./Account.scss";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import {
  carSelector,
  loginSelector,
  setCarsSortSuccess,
  setDisplayOverlay,
  setItemPropOverlay,
} from "../../redux";
import CustomForm from "../Global/CustomForm/CustomForm";
import { TableRentalHistory } from "../admin/table/tableRentalHistory";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Account = () => {
  const [currentUser, setCurrentUser] = useState();
  const navigate = useNavigate();
  const url = process.env.REACT_APP_URL_LOCAL;
  const localUser = JSON.parse(localStorage.getItem("currentUser"));

  const AuthStr = "bearer ".concat(localUser.accessToken);

  const dispatch = useDispatch();
  const { getCars } = useSelector(carSelector);
  const handleUpdateEmail = () => {
    dispatch(setDisplayOverlay(true));
    dispatch(
      setItemPropOverlay(<CustomForm title={"email"} keyUpdate={"email"} />)
    );
  };
  const handleUpdateFirstName = () => {
    dispatch(setDisplayOverlay(true));
    dispatch(
      setItemPropOverlay(<CustomForm title={"Tên"} keyUpdate={"firstName"} />)
    );
  };
  const handleUpdateLastName = () => {
    dispatch(setDisplayOverlay(true));
    dispatch(
      setItemPropOverlay(<CustomForm title={"Họ"} keyUpdate={"lastName"} />)
    );
  };
  const handleUpdatePassword = () => {
    dispatch(setDisplayOverlay(true));
    dispatch(
      setItemPropOverlay(
        <CustomForm title={"Mật khẩu"} keyUpdate={"password"} />
      )
    );
  };

  //Fetch info validate user
  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const { data } = await axios.get(`${url}user/${localUser._id}`, {
          headers: { token: AuthStr },
        });
        if (data) {
          setCurrentUser(data);
        }
      } catch (error) {}
    };
    fetchInfo();
  }, []);

  return (
    <div className="account">
      <div className="account__banner"></div>
      <Container maxWidth="lg" className="account__user">
        <Grid container>
          <Grid className="account__user--item" item md={12}>
            <div className="account__img">
              <span>{currentUser?.firstName?.charAt()}</span>
            </div>
            <div className="account__user__name">
              <h1>
                {currentUser?.lastName} {currentUser?.firstName}
                <button className="user__name__btn">
                  <DriveFileRenameOutlineIcon />
                  <ul className="user__name--update">
                    <li onClick={handleUpdateLastName}>Họ</li>
                    <li onClick={handleUpdateFirstName}>Tên</li>
                    <span className="arrow-up arrow--name"></span>
                  </ul>
                </button>
              </h1>
              <div className="user__name__day--create">
                <span className="user__name__crossbar name__crossbar">
                  Ngày tạo :{dayjs(currentUser?.createdAt).format("DD/MM/YYYY")}
                </span>
                <span className="user__name__trip">
                  {currentUser?.rentedCars[0]
                    ? currentUser?.rentedCars?.length + "chuyến đi"
                    : "Chưa có chuyến"}
                </span>
              </div>
            </div>
          </Grid>
        </Grid>
        <Grid className="account__user_info" container >
          <Grid item className="account__user__info--item" md={6}>
            <h5 className="info__title">Email</h5>
            <DriveFileRenameOutlineIcon onClick={handleUpdateEmail} />
          </Grid>
          <Grid item className="account__user__info--item" md={6}>
            <h5 className="info__title">Mật khẩu</h5>
            <DriveFileRenameOutlineIcon onClick={handleUpdatePassword} />
          </Grid>
          {/* <Grid item className="account__user__info--item" md={3}>
            <h5 className="info__title">Google</h5>
            <AddLinkOutlinedIcon className="info__link" />
          </Grid>
          <Grid item className="account__user__info--item" md={3}>
            <h5 className="info__title">Facebook</h5>
            <AddLinkOutlinedIcon className="info__link" />
          </Grid> */}
        </Grid>
        <Grid className="account__history" container>
          <h3 className="account__history__title">Lịch sử xe thuê</h3>
          {currentUser?.rentedCars[0] ? (
            <TableRentalHistory listRentedCars={currentUser.rentedCars} />
          ) : (
            <div className="account__history--emty">
              <p>
                Bạn chưa có chuyến thuê nào!
                <span
                  onClick={() => {
                    navigate("/search");
                    dispatch(setCarsSortSuccess(getCars.values));
                  }}
                >
                  Thuê ngay
                </span>{" "}
                để đuợc trải nghiệm dịch vụ tốt nhất từ MIOTO
              </p>
            </div>
          )}
        </Grid>
      </Container>
    </div>
  );
};

export default Account;
