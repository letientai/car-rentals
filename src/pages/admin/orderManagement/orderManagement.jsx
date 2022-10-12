import React, { useState } from "react";
import "./orderManagement.scss";
import { TableOrder } from "../../../components/admin/table/tableOrder";

export const OrderManagement = () => {
  return (
    <div className="orderManagement-container">
      
     <TableOrder/>
    </div>
  );
};
