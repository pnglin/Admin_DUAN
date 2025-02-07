import React from "react";
import styles from "@/app/ui/dashboard/revenue/revenue.module.css";
import RevenuePage from "@/app/ui/dashboard/revenueChart/revenueChart";
import RevenueDayChart from "@/app/ui/dashboard/revenueDayChart/revenueDayChart";
import BestSellingPage from "@/app/ui/dashboard/bestSelling/bestSelling";
const Dashboard = () => {
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.mainLeft}>
          <RevenuePage />
        </div>
        <div className={styles.mainRight}>
          <RevenueDayChart />
        </div>
      </div>
      <div className={styles.hotSale}>
        <BestSellingPage />
      </div>
    </div>
  );
};

export default Dashboard;
