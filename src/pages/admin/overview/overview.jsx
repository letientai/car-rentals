import React, { useState } from "react";
import { ChartStatistical } from "../../../components/admin/chart/chart";
import { LayoutAdmin } from "../../../components/admin/layout";
import "./overview.scss";
export const Overview = () => {
  
  return (
    <LayoutAdmin>
      <ChartStatistical />
    </LayoutAdmin>
  );
};
