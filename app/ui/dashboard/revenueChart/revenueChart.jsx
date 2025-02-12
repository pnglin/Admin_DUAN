"use client";
import React, { useState } from "react";
import styles from "./revenueChart.module.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  ComposedChart,
  Area,
} from "recharts";
import { MdTrendingUp, MdTrendingDown } from "react-icons/md";

const data = [
  {
    name: "Jan",
    revenue: 42000,
    netIncome: 24000,
    orders: 845,
    avgOrderValue: 49.7,
    expenses: 18000,
    profit_margin: 57.1,
  },
  {
    name: "Feb",
    revenue: 38000,
    netIncome: 20000,
    orders: 762,
    avgOrderValue: 49.87,
    expenses: 18000,
    profit_margin: 52.6,
  },
  {
    name: "Mar",
    revenue: 98000,
    netIncome: 20000,
    orders: 1200,
    avgOrderValue: 81.67,
    expenses: 78000,
    profit_margin: 20.4,
  },
  {
    name: "Apr",
    revenue: 27800,
    netIncome: 39080,
    orders: 450,
    avgOrderValue: 61.78,
    expenses: -11280,
    profit_margin: 140.6,
  },
  {
    name: "May",
    revenue: 18900,
    netIncome: 48000,
    orders: 320,
    avgOrderValue: 59.06,
    expenses: -29100,
    profit_margin: 254.0,
  },
  {
    name: "Jun",
    revenue: 23900,
    netIncome: 38000,
    orders: 389,
    avgOrderValue: 61.44,
    expenses: -14100,
    profit_margin: 159.0,
  },
];

const RevenueChart = () => {
  const [timeRange, setTimeRange] = useState("year");
  const [chartType, setChartType] = useState("bar");

  const calculateGrowth = (data, key) => {
    if (data.length < 2) return 0;
    const latest = data[data.length - 1][key];
    const previous = data[data.length - 2][key];
    return (((latest - previous) / previous) * 100).toFixed(1);
  };

  const revenueGrowth = calculateGrowth(data, "revenue");
  const ordersGrowth = calculateGrowth(data, "orders");
  const profitGrowth = calculateGrowth(data, "netIncome");

  const renderChart = () => {
    switch (chartType) {
      case "bar":
        return (
          <BarChart data={data}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgba(255,255,255,0.1)"
            />
            <XAxis dataKey="name" />
            <YAxis tickFormatter={(value) => `$${value / 1000}k`} />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--bgSoft)",
                borderRadius: "8px",
                border: "none",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              }}
              formatter={(value) => [`$${value.toLocaleString()}`, ""]}
            />
            <Legend />
            <Bar
              dataKey="revenue"
              fill="#4169E1"
              name="Revenue"
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="netIncome"
              fill="#2ECC71"
              name="Net Income"
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="expenses"
              fill="#E74C3C"
              name="Expenses"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        );
      case "line":
        return (
          <LineChart data={data}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgba(255,255,255,0.1)"
            />
            <XAxis dataKey="name" />
            <YAxis tickFormatter={(value) => `$${value / 1000}k`} />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--bgSoft)",
                borderRadius: "8px",
                border: "none",
              }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#4169E1"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="netIncome"
              stroke="#2ECC71"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="profit_margin"
              stroke="#F1C40F"
              strokeWidth={2}
            />
          </LineChart>
        );
      case "composed":
        return (
          <ComposedChart data={data}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgba(255,255,255,0.1)"
            />
            <XAxis dataKey="name" />
            <YAxis
              yAxisId="left"
              tickFormatter={(value) => `$${value / 1000}k`}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              tickFormatter={(value) => `${value}%`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--bgSoft)",
                borderRadius: "8px",
                border: "none",
              }}
            />
            <Legend />
            <Bar dataKey="revenue" fill="#4169E1" yAxisId="left" />
            <Line
              type="monotone"
              dataKey="profit_margin"
              stroke="#F1C40F"
              yAxisId="right"
            />
            <Area
              type="monotone"
              dataKey="netIncome"
              fill="#2ECC71"
              stroke="#2ECC71"
              fillOpacity={0.3}
              yAxisId="left"
            />
          </ComposedChart>
        );
      default:
        return null;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.titleSection}>
          <h2 className={styles.title}>Revenue Analytics</h2>
          <p className={styles.subtitle}>
            Detailed revenue metrics and insights
          </p>
        </div>

        <div className={styles.controls}>
          <div className={styles.filterGroup}>
            <select
              className={styles.select}
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
            >
              <option value="year">Last 12 Months</option>
              <option value="quarter">Last Quarter</option>
              <option value="month">This Month</option>
              <option value="week">This Week</option>
            </select>

            <select
              className={styles.select}
              value={chartType}
              onChange={(e) => setChartType(e.target.value)}
            >
              <option value="bar">Bar Chart</option>
              <option value="line">Line Chart</option>
              <option value="composed">Combined View</option>
            </select>
          </div>
        </div>
      </div>

      <div className={styles.metricsGrid}>
        <div className={styles.metricCard}>
          <div className={styles.metricHeader}>
            <span className={styles.metricTitle}>Total Revenue</span>
            <div
              className={`${styles.growth} ${
                revenueGrowth >= 0 ? styles.positive : styles.negative
              }`}
            >
              {revenueGrowth >= 0 ? <MdTrendingUp /> : <MdTrendingDown />}
              {Math.abs(revenueGrowth)}%
            </div>
          </div>
          <div className={styles.metricValue}>
            ${data[data.length - 1].revenue.toLocaleString()}
          </div>
        </div>

        <div className={styles.metricCard}>
          <div className={styles.metricHeader}>
            <span className={styles.metricTitle}>Orders</span>
            <div
              className={`${styles.growth} ${
                ordersGrowth >= 0 ? styles.positive : styles.negative
              }`}
            >
              {ordersGrowth >= 0 ? <MdTrendingUp /> : <MdTrendingDown />}
              {Math.abs(ordersGrowth)}%
            </div>
          </div>
          <div className={styles.metricValue}>
            {data[data.length - 1].orders}
          </div>
        </div>

        <div className={styles.metricCard}>
          <div className={styles.metricHeader}>
            <span className={styles.metricTitle}>Net Profit</span>
            <div
              className={`${styles.growth} ${
                profitGrowth >= 0 ? styles.positive : styles.negative
              }`}
            >
              {profitGrowth >= 0 ? <MdTrendingUp /> : <MdTrendingDown />}
              {Math.abs(profitGrowth)}%
            </div>
          </div>
          <div className={styles.metricValue}>
            ${data[data.length - 1].netIncome.toLocaleString()}
          </div>
        </div>
      </div>

      <div className={styles.chartContainer}>
        <ResponsiveContainer width="100%" height={400}>
          {renderChart()}
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueChart;
