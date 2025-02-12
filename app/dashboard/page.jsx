"use client";
import React, { useEffect, useState } from "react";
import styles from "../ui/dashboard/dashboard.module.css";
import Card from "../ui/dashboard/card/card";
import Transactions from "../ui/dashboard/transactions/transactions";
import Chart from "../ui/dashboard/chart/chart";
import {
  MdInsights,
  MdTrendingUp,
  MdCalendarToday,
  MdAccessTime,
} from "react-icons/md";

const Dashboard = () => {
  const [timeframe, setTimeframe] = useState("week");
  const [chartTimeframe, setChartTimeframe] = useState("7d");

  const dashboardData = {
    week: {
      users: {
        number: "12,847",
        change: 12,
        description: "Active users this week",
      },
      sales: {
        number: "867",
        change: 15,
        description: "Weekly sales count",
      },
      revenue: {
        number: "$84,432",
        change: 8,
        description: "Weekly revenue",
      },
      traffic: {
        number: "89,432",
        change: -5,
        description: "Weekly page views",
      },
      conversion: {
        number: "3.2%",
        change: 0.5,
        description: "Weekly conversion rate",
      },
      avgOrder: {
        number: "$97.50",
        change: 3,
        description: "Average order value",
      },
    },
    month: {
      users: {
        number: "45,273",
        change: 8,
        description: "Active users this month",
      },
      sales: {
        number: "3,567",
        change: 12,
        description: "Monthly sales count",
      },
      revenue: {
        number: "$347,842",
        change: 15,
        description: "Monthly revenue",
      },
      traffic: {
        number: "324,567",
        change: 18,
        description: "Monthly page views",
      },
      conversion: {
        number: "3.8%",
        change: 0.3,
        description: "Monthly conversion rate",
      },
      avgOrder: {
        number: "$102.30",
        change: 5,
        description: "Average order value",
      },
      newCustomers: {
        number: "2,134",
        change: 17,
        description: "New customers this month",
      },
      returnRate: {
        number: "2.1%",
        change: -1.2,
        description: "Product return rate",
      },
    },
    quarter: {
      users: {
        number: "127,834",
        change: 25,
        description: "Quarterly active users",
      },
      sales: {
        number: "10,847",
        change: 20,
        description: "Quarterly sales count",
      },
      revenue: {
        number: "$1,247,832",
        change: 22,
        description: "Quarterly revenue",
      },
      traffic: {
        number: "987,654",
        change: 15,
        description: "Quarterly page views",
      },
      conversion: {
        number: "4.1%",
        change: 0.8,
        description: "Quarterly conversion rate",
      },
      avgOrder: {
        number: "$108.70",
        change: 7,
        description: "Average order value",
      },
      newCustomers: {
        number: "6,543",
        change: 28,
        description: "New customers this quarter",
      },
      returnRate: {
        number: "1.9%",
        change: -1.5,
        description: "Product return rate",
      },
    },
  };

  const handleTimeframeChange = (newTimeframe) => {
    setTimeframe(newTimeframe);
    const cards = document.querySelector(`.${styles.cards}`);
    cards.style.opacity = "0";
    setTimeout(() => {
      cards.style.opacity = "1";
    }, 100);
  };
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    return new Intl.DateTimeFormat("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
  };

  const formatTime = (date) => {
    return new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    }).format(date);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.header}>
          <div className={styles.titleContainer}>
            <div className={styles.timeContainer}>
              <MdAccessTime className={styles.clockIcon} />
              <div className={styles.timeInfo}>
                <h1 className={styles.title}>{formatTime(currentTime)}</h1>
                <p className={styles.subtitle}>{formatDate(currentTime)}</p>
              </div>
            </div>
          </div>

          <div className={styles.timeframeSelector}>
            <button
              className={`${styles.timeButton} ${
                timeframe === "week" ? styles.active : ""
              }`}
              onClick={() => handleTimeframeChange("week")}
            >
              <MdCalendarToday className={styles.buttonIcon} />
              Weekly
            </button>
            <button
              className={`${styles.timeButton} ${
                timeframe === "month" ? styles.active : ""
              }`}
              onClick={() => handleTimeframeChange("month")}
            >
              <MdInsights className={styles.buttonIcon} />
              Monthly
            </button>
            <button
              className={`${styles.timeButton} ${
                timeframe === "quarter" ? styles.active : ""
              }`}
              onClick={() => handleTimeframeChange("quarter")}
            >
              <MdTrendingUp className={styles.buttonIcon} />
              Quarterly
            </button>
          </div>
        </div>

        <div className={`${styles.cards} ${styles.animate}`}>
          {Object.entries(dashboardData[timeframe]).map(([key, data]) => (
            <Card
              key={key}
              type={key}
              {...data}
              timeframe={timeframe}
              className={styles.glassEffect}
            />
          ))}
        </div>

        <div className={styles.chartSection}>
          <div className={styles.chartHeader}>
            <h2 className={styles.chartTitle}>Revenue Analytics</h2>
            <select
              className={styles.dropdown}
              value={chartTimeframe}
              onChange={(e) => setChartTimeframe(e.target.value)}
            >
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
            </select>
          </div>
          <Chart timeframe={chartTimeframe} />
        </div>

        <div className={`${styles.transactionSection} ${styles.glassEffect}`}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Recent Transactions</h2>
          </div>
          <Transactions />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
