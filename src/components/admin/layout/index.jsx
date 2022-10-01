import React from "react";
import { CardStatistical } from "../../../components/admin/cardStatistical/cardStatistical";
import { Navbar } from "../../../components/admin/layout/navbar";
import { Sidebar } from "../../../components/admin/sidebarLeft/sidebar";
export const LayoutAdmin = ({ Children }) => {

    const dataProductCard = [
        {
          text: "TỔNG SỐ DANH MỤC",
          count: 14,
        },
        {
          text: "TỔNG SỐ SẢN PHẨM",
          count: 31,
        },
        {
          text: "TỔNG SỐ ĐƠN THUÊ",
          count: 12,
        },
      ];

      console.log(Children);
  return (
    <div className="overview__container d-flex justify-content-between">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="content">
        <Navbar />
        <div
          className="Products-Card"
          style={{ display: "flex", justifyContent: "space-evenly" }}
        >
          {dataProductCard.map((item, index) => (
            <CardStatistical key={index} item={item} />
          ))}
        </div>
        {Children}
      </div>
    </div>
  );
};
