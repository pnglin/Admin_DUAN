"use client";
import React from "react";
import styles from "./chart.module.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Sun",
    customer: 4000,
    sold: 2400,
  },
  {
    name: "Mon",
    customer: 3000,
    sold: 1398,
  },
  {
    name: "Tue",
    customer: 2000,
    sold: 3800,
  },
  {
    name: "Wed",
    customer: 2780,
    sold: 3908,
  },
  {
    name: "Thu",
    customer: 1890,
    sold: 4800,
  },
  {
    name: "Fri",
    customer: 2390,
    sold: 3800,
  },
  {
    name: "Sat",
    customer: 3490,
    sold: 4300,
  },
];

const Chart = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Weekly Recap</h2>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{ background: "#151c2c", border: "none" }} />
          <Legend />
          <Line
            type="monotone"
            dataKey="customer"
            stroke="#8884d8"
            strokeDasharray="5 5"
          />
          <Line
            type="monotone"
            dataKey="sold"
            stroke="#82ca9d"
            strokeDasharray="3 4 5 2"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
