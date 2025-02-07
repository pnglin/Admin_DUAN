"use client";
import React, { PureComponent, useState } from "react";
import styles from "./revenueChart.module.css";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Pagination from "../pagination/pagination";

const fullData = [
  { name: "January", Revenue: 4000, Netincome: 2400 },
  { name: "February", Revenue: 3000, Netincome: 1398 },
  { name: "March", Revenue: 9800, Netincome: 2000 },
  { name: "April", Revenue: 2780, Netincome: 3908 },
  { name: "May", Revenue: 1890, Netincome: 4800 },
  { name: "June", Revenue: 2390, Netincome: 3800 },
];

const RevenuePage = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Revenue Year Recap</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={fullData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis tickFormatter={(value) => `$${value}`} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#151c2c",
              borderRadius: "10px",
            }}
            formatter={(value) => `$${value}`}
          />
          <Legend />
          <Bar dataKey="Revenue" fill="#084e9e" />
          <Bar dataKey="Netincome" fill="#961b1b" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenuePage;
