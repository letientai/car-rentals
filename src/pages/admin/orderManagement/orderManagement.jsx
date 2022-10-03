import React, { useState } from "react";
import "./orderManagement.scss";
import { TableOrder } from "../../../components/admin/table/tableOrder";

export const OrderManagement = () => {
  const [checkFormDetail, setCheckFormDetail] = useState(false);
  
  const showInfOrder = () => {
    setCheckFormDetail(true);
  };
  return (
    <div className="orderManagement-container">
      
     <TableOrder/>
    </div>
  );
};
