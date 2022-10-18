import React, { useEffect, useState } from "react";
import { CardStatistical } from "../../../components/admin/cardStatistical/cardStatistical";
import { Navbar } from "../../../components/admin/layout/navbar";
import { Sidebar } from "../../../components/admin/sidebarLeft/sidebar";
import { FormDetailOrder } from "../formDetailOrder/formDetailOrder";
import { useSelector } from "react-redux";
import { sendIdDetailSelector } from "../../../redux";

export const LayoutAdmin = ({ children }) => {
  const [checkOpenSidebar, setCheckOpenSidebar] = useState(false);
  const [checkFormDetail, setCheckFormDetail] = useState(false);
  const { openForm } = useSelector(sendIdDetailSelector);

  const handleSidebar = (check) => {
    setCheckOpenSidebar(check);
  };
  useEffect(() => {
    setCheckFormDetail(openForm.checkOpen);
  }, [openForm.checkOpen]);

  return (
    <div className="overview__container w-100">
      {checkFormDetail && <FormDetailOrder />}
      <div
        className={checkOpenSidebar ? "sidebar1 sidebar" : "sidebar2 sidebar"}
      >
        <Sidebar />
      </div>
      <div className={checkOpenSidebar ? "header1" : "header2"}>
        <Navbar handleSidebar={handleSidebar} />
        <div
          className={
            checkOpenSidebar ? "content-main content1" : "content-main "
          }
        >
          {children}
        </div>
      </div>
    </div>
  );
};
