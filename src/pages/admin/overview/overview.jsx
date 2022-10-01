import React from "react";
import { Navbar } from "../../../components/admin/layout/navbar";
import { Sidebar } from "../../../components/admin/sidebarLeft/sidebar";
import "./overview.scss";
export const Overview = () => {
  return (
    <div className="overview__container d-flex justify-content-between" >
      <div className="sidebar">
        {/* <Sidebar/> */}
      </div>
      <div className="content">
        <Navbar />
      </div>
    </div>
  );
};
