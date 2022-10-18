import React, { useRef, useState } from "react";
import authRequest from "../../../api/authRequest";
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import "./layout.scss";
import { setLoginFailed } from "../../../redux";
export const Navbar = (prop) => {
  const [profileToggle, setProfileToggle] = useState(false);
  const [checkOpenSidebar, setCheckOpenSidebar] = useState(false);
  const headerRef = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  const handleClickOutside = (event) => {
    if (headerRef.current && !headerRef.current.contains(event.target)) {
      setProfileToggle(false);
      document.removeEventListener("click", handleClickOutside, true);
    }
  };

  function toggleShow() {
    setProfileToggle(!profileToggle);
    if (profileToggle) {
      document.removeEventListener("click", handleClickOutside, true);
    } else {
      document.addEventListener("click", handleClickOutside, true);
    }
  }
  const openSidebar = () => {
    setCheckOpenSidebar(!checkOpenSidebar);
    prop.handleSidebar(!checkOpenSidebar);
  };

  const logout = () =>{
    localStorage.removeItem('currentUser');
    authRequest.logoutUser(currentUser.accessToken , dispatch);
    dispatch(setLoginFailed());
  }
  return (
    <div className="navbar-header">
      <div className="container-fluid">
        <div>
          <div className="sidenav-toggler" onClick={openSidebar}>
            <div className="sidenav-toggler-inner">
              <i className="sidenav-toggler-line"></i>
              <i className="sidenav-toggler-line"></i>
              <i className="sidenav-toggler-line"></i>
            </div>
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <div
            ref={headerRef}
            className="collapse navbar-collapse"
            onClick={toggleShow}
          >
            <div className="image">
              <img
                src="https://bd-media-community.s3.ap-southeast-1.amazonaws.com/media/images/39367d54-99c4-4d80-a140-1b070f73b41f.png"
                alt=""
              />
            </div>
            <div className="media-body">
              <span className="text-sm">Super Admin</span>
            </div>
          </div>
          <div
            className={
              `dropdown-menu dropdown-menu-right ` +
              (profileToggle ? `show` : ``)
            }
          >
            <div className="dropdown-header noti-title">
              <h6 className="text-overflow m-0">Xin chào!</h6>
            </div>
            <div className="dropdown-divider"></div>
            <a
              href="/"
                onClick={(e) => {
                  // e.preventDefault();
                  logout();
                }}
              className="dropdown-item"
            >
              <span>Đăng xuất</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
