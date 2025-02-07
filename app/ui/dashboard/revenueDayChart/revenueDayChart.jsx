"use client";
import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";
import styles from "./revenueDayChart.module.css";
import Pagination from "../pagination/pagination";

const data = [
  {
    name: "0",
    Revenue: 2400,
  },
  {
    name: "01",
    Revenue: 1398,
  },
  {
    name: "02",
    Revenue: 9800,
  },
  {
    name: "03",
    Revenue: 3908,
  },
  {
    name: "04",
    Revenue: 4800,
  },
  {
    name: "05",
    Revenue: 3800,
  },
  {
    name: "06",
    Revenue: 4300,
  },
];

const RevenueDayChart = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Revenue Month Recap</h2>
      <div style={{ width: "100%" }}>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart
            width={500}
            height={200}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="name" tickFormatter={(tick) => `Day ${tick}`} />
            <YAxis tickFormatter={(value) => `$${value}`} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#151c2c",
                borderRadius: "10px",
              }}
              formatter={(value) => `$${value}`}
            />
            <Area
              type="monotone"
              dataKey="Revenue"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueDayChart;
