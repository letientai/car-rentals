import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import Select from "react-select";

export const ChartStatistical = () => {
  const [optionChart, setOptionChart] = useState("turnover")

  useEffect(() => {
    if (optionChart === "turnover") {
      setSeries([
        {
          name: "series-1",
          data: [90, 10, 30, 35, 70, 65, 50, 91, 70, 28, 50, 100],
        },
      ]);
    } else {
      setSeries([
        {
          name: "series-1",
          data: [10, 12, 20, 15, 14, 18, 25, 23, 20, 25, 20, 27],
        },
      ]);
    }
  }, [optionChart]);

  const [options, setOptions] = useState({
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [
        "Tháng 1",
        "Tháng 2",
        "Tháng 3",
        "Tháng 4",
        "Tháng 5",
        "Tháng 6",
        "Tháng 7",
        "Tháng 8",
        "Tháng 9",
        "Tháng 10",
        "Tháng 11",
        "Tháng 12",
      ],
    },
  });

  const [series, setSeries] = useState([
    {
      name: "series-1",
      data: [90, 10, 30, 35, 70, 65, 50, 91, 70, 28, 50, 100],
    },
  ]);

  const optionsChart = [
    { value: "turnover", label: "Doanh thu" },
    { value: "theAmountOfRent", label: "Số lượng thuê" },
  ];

  const handleChange = (selectedOption) => {
    setOptionChart(selectedOption.value)
  };

  return (
    <div className="chart">
      <div className="chart__option">
        <div className="option">
          <Select
            options={optionsChart}
            defaultValue={optionsChart[0]}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="chart__statistical">
        <Chart
          options={options}
          series={series}
          type="area"
          width="100%"
          height="380"
        />
      </div>
    </div>
  );
};
