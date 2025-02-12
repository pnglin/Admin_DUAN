"use client";
import React, { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Line,
  ComposedChart,
} from "recharts";
import styles from "./revenueDayChart.module.css";
import {
  MdCalendarToday,
  MdTrendingUp,
  MdFilterList,
  MdDownload,
} from "react-icons/md";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../../ui/datepicker/datepicker.css";
const sampleProducts = [
  "iPhone 15 Pro",
  "Samsung S24",
  "MacBook Pro",
  "AirPods Pro",
  "iPad Air",
  "Apple Watch",
  "Galaxy Tab",
  "Sony Headphones",
  "Gaming Mouse",
  "Mechanical Keyboard",
];

const generateDailyData = (startDate) => {
  const date = new Date(startDate);
  return {
    date: date,
    Revenue: Math.floor(Math.random() * 10000) + 2000,
    Orders: Math.floor(Math.random() * 500) + 100,
    AvgOrderValue: (Math.random() * 20 + 10).toFixed(2),
    products: sampleProducts.map((name) => ({
      name,
      sales: Math.floor(Math.random() * 50) + 10,
      revenue: Math.floor(Math.random() * 5000) + 1000,
    })),
  };
};

const generateHistoricalData = (days) => {
  const endDate = new Date();
  const data = [];
  for (let i = days; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    data.push(generateDailyData(date));
  }
  return data;
};

const RevenueDayChart = () => {
  const [dateRange, setDateRange] = useState([
    new Date(new Date().setDate(new Date().getDate() - 7)),
    new Date(),
  ]);
  const [startDate, endDate] = dateRange;
  const [selectedMetric, setSelectedMetric] = useState("Revenue");
  const [timeframe, setTimeframe] = useState("daily");
  const [topProductsCount, setTopProductsCount] = useState(5);
  const [data, setData] = useState(generateHistoricalData(30));
  const [sortBy, setSortBy] = useState("sales"); // 'sales' or 'revenue'

  const getFilteredData = () => {
    return data.filter(
      (item) => item.date >= startDate && item.date <= endDate
    );
  };

  const formatDate = (date) => {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
    }).format(date);
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const getTopProducts = () => {
    const filteredData = getFilteredData();
    const productTotals = {};

    filteredData.forEach((day) => {
      day.products.forEach((product) => {
        if (!productTotals[product.name]) {
          productTotals[product.name] = {
            sales: 0,
            revenue: 0,
          };
        }
        productTotals[product.name].sales += product.sales;
        productTotals[product.name].revenue += product.revenue;
      });
    });

    return Object.entries(productTotals)
      .map(([name, data]) => ({
        name,
        ...data,
      }))
      .sort((a, b) => b[sortBy] - a[sortBy])
      .slice(0, topProductsCount);
  };

  const getChartData = () => {
    const filteredData = getFilteredData();
    return filteredData.map((item) => ({
      date: formatDate(item.date),
      [selectedMetric]: item[selectedMetric],
    }));
  };

  const getTotalMetrics = () => {
    const filteredData = getFilteredData();
    return {
      Revenue: filteredData.reduce((sum, item) => sum + item.Revenue, 0),
      Orders: filteredData.reduce((sum, item) => sum + item.Orders, 0),
      AvgOrderValue:
        filteredData.reduce(
          (sum, item) => sum + parseFloat(item.AvgOrderValue),
          0
        ) / filteredData.length,
    };
  };

  const getPercentageChange = () => {
    const filtered = getFilteredData();
    if (filtered.length < 2) return 0;

    const currentValue = filtered[filtered.length - 1][selectedMetric];
    const previousValue = filtered[0][selectedMetric];
    return (((currentValue - previousValue) / previousValue) * 100).toFixed(1);
  };

  const handleExport = () => {
    const filteredData = getFilteredData();
    const csvContent = [
      ["Date", "Revenue", "Orders", "Average Order Value"],
      ...filteredData.map((item) => [
        formatDate(item.date),
        item.Revenue,
        item.Orders,
        item.AvgOrderValue,
      ]),
    ]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `revenue-data-${formatDate(startDate)}-to-${formatDate(
      endDate
    )}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.titleSection}>
          <MdCalendarToday className={styles.titleIcon} />
          <div>
            <h2 className={styles.title}>Revenue Analytics</h2>
            <p className={styles.subtitle}>
              {formatDate(startDate)} - {formatDate(endDate)}
            </p>
          </div>
        </div>

        <div className={styles.controls}>
          <div className={styles.filterGroup}>
            <DatePicker
              selectsRange={true}
              startDate={startDate}
              endDate={endDate}
              onChange={(update) => setDateRange(update)}
              className={styles.datePicker}
              maxDate={new Date()}
            />

            <select
              className={styles.select}
              value={selectedMetric}
              onChange={(e) => setSelectedMetric(e.target.value)}
            >
              <option value="Revenue">Revenue</option>
              <option value="Orders">Orders</option>
              <option value="AvgOrderValue">Avg Order Value</option>
            </select>

            <button className={styles.exportButton} onClick={handleExport}>
              <MdDownload />
              Export
            </button>
          </div>
        </div>
      </div>

      <div className={styles.metricsGrid}>
        <div className={styles.metricCard}>
          <span className={styles.metricLabel}>Total Revenue</span>
          <span className={styles.metricValue}>
            {formatCurrency(getTotalMetrics().Revenue)}
          </span>
        </div>
        <div className={styles.metricCard}>
          <span className={styles.metricLabel}>Total Orders</span>
          <span className={styles.metricValue}>
            {getTotalMetrics().Orders.toLocaleString()}
          </span>
        </div>
        <div className={styles.metricCard}>
          <span className={styles.metricLabel}>Avg Order Value</span>
          <span className={styles.metricValue}>
            {formatCurrency(getTotalMetrics().AvgOrderValue)}
          </span>
        </div>
        <div className={styles.metricCard}>
          <span className={styles.metricLabel}>Growth</span>
          <div
            className={`${styles.change} ${
              parseFloat(getPercentageChange()) >= 0
                ? styles.positive
                : styles.negative
            }`}
          >
            <MdTrendingUp />
            {getPercentageChange()}%
          </div>
        </div>
      </div>

      <div className={styles.chartsContainer}>
        <div className={styles.mainChart}>
          <ResponsiveContainer width="100%" height={400}>
            <ComposedChart data={getChartData()}>
              <defs>
                <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="rgba(255,255,255,0.1)"
                vertical={false}
              />
              <XAxis
                dataKey="date"
                tick={{ fill: "var(--textSoft)" }}
                axisLine={{ stroke: "rgba(255,255,255,0.1)" }}
              />
              <YAxis
                tickFormatter={(value) =>
                  selectedMetric === "Revenue"
                    ? formatCurrency(value)
                    : selectedMetric === "AvgOrderValue"
                    ? `$${value}`
                    : value.toLocaleString()
                }
                tick={{ fill: "var(--textSoft)" }}
                axisLine={{ stroke: "rgba(255,255,255,0.1)" }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--bgSoft)",
                  border: "none",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
                formatter={(value) => [
                  selectedMetric === "Revenue"
                    ? formatCurrency(value)
                    : selectedMetric === "AvgOrderValue"
                    ? `$${value}`
                    : value.toLocaleString(),
                  selectedMetric,
                ]}
              />
              <Area
                type="monotone"
                dataKey={selectedMetric}
                stroke="#3b82f6"
                fill="url(#colorGradient)"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey={selectedMetric}
                stroke="#3b82f6"
                dot={{ fill: "#3b82f6", strokeWidth: 2 }}
                activeDot={{ r: 6 }}
                strokeWidth={2}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        <div className={styles.topProducts}>
          <div className={styles.topProductsHeader}>
            <h3 className={styles.sectionTitle}>
              <MdFilterList /> Top Products
            </h3>
            <div className={styles.topProductsControls}>
              <select
                className={styles.select}
                value={topProductsCount}
                onChange={(e) => setTopProductsCount(Number(e.target.value))}
              >
                <option value="5">Top 5</option>
                <option value="10">Top 10</option>
                <option value="20">Top 20</option>
              </select>
              <select
                className={styles.select}
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="sales">By Sales</option>
                <option value="revenue">By Revenue</option>
              </select>
            </div>
          </div>

          <div className={styles.productList}>
            {getTopProducts().map((product, index) => (
              <div key={product.name} className={styles.productItem}>
                <div className={styles.productRank}>{index + 1}</div>
                <div className={styles.productInfo}>
                  <span className={styles.productName}>{product.name}</span>
                  <span className={styles.productStats}>
                    {product.sales} sales · {formatCurrency(product.revenue)}
                  </span>
                </div>
                <div className={styles.productBar}>
                  <div
                    className={styles.productBarFill}
                    style={{
                      width: `${
                        (product[sortBy] / getTopProducts()[0][sortBy]) * 100
                      }%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueDayChart;
