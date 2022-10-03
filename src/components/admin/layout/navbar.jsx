import React, { useRef, useState } from "react";
import "./layout.scss";
export const Navbar = (prop) => {
  const [profileToggle, setProfileToggle] = useState(false);
  const [checkOpenSidebar, setCheckOpenSidebar] = useState(false);
  const headerRef = useRef();

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
              href="#"
              //   onClick={(e) => {
              //     // e.preventDefault();
              //     logout();
              //   }}
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
