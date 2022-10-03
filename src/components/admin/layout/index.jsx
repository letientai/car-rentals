import React, { useState } from "react";
import { CardStatistical } from "../../../components/admin/cardStatistical/cardStatistical";
import { Navbar } from "../../../components/admin/layout/navbar";
import { Sidebar } from "../../../components/admin/sidebarLeft/sidebar";
import { FormDetailOrder } from "../formDetailOrder/formDetailOrder";
export const LayoutAdmin = ({ children }) => {
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
  const [checkOpenSidebar, setCheckOpenSidebar] = useState(false);

  const handleSidebar = (check)=>{
      setCheckOpenSidebar(check)
  }
  return (
    // <div className="overview__container d-flex justify-content-between">
    //   <div className="sidebar">
    //     <Sidebar />
    //   </div>
    //   <div className="content">
    //     <Navbar />
    //     {/* <div
    //       className="Products-Card"
    //       style={{ display: "flex", justifyContent: "space-evenly" }}
    //     >
    //       {dataProductCard.map((item, index) => (
    //         <CardStatistical key={index} item={item} />
    //       ))}
    //     </div> */}
    //     <div className="content-main">{children}</div>
    //   </div>
    // </div>
    <div className="overview__container w-100">
      <div className={checkOpenSidebar ? "sidebar1 sidebar" : "sidebar2 sidebar"}>
        <Sidebar />
      </div>
      <div className={checkOpenSidebar ? "header1" : "header2"}>
        <Navbar handleSidebar={handleSidebar}/>
        <div className={checkOpenSidebar ? "content-main content1" : "content-main "}>{children}</div>
      </div>
    </div>
  );
};
