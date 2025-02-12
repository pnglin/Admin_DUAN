import React from "react";
import styles from "./card.module.css";
import {
  MdSupervisedUserCircle,
  MdShoppingCart,
  MdAttachMoney,
  MdBarChart,
  MdTrendingUp,
  MdPeopleAlt,
  MdAssignment,
  MdAutorenew,
} from "react-icons/md";

const Card = ({
  type = "users",
  title,
  number,
  change,
  description,
  timeframe = "week",
}) => {
  // Default data for different card types
  const DEFAULT_DATA = {
    users: {
      icon: MdSupervisedUserCircle,
      title: "Total Users",
      number: "10,273",
      change: 12,
      description: "Active accounts",
    },
    sales: {
      icon: MdShoppingCart,
      title: "Total Sales",
      number: "432",
      change: 8,
      description: "Sales count",
    },
    revenue: {
      icon: MdAttachMoney,
      title: "Revenue",
      number: "$45,623",
      change: -3,
      description: "Total earnings",
    },
    traffic: {
      icon: MdBarChart,
      title: "Traffic",
      number: "56,782",
      change: 15,
      description: "Page views",
    },
    conversion: {
      icon: MdTrendingUp,
      title: "Conversion Rate",
      number: "3.2%",
      change: 0.5,
      description: "Sales conversion",
    },
    avgOrder: {
      icon: MdAttachMoney,
      title: "Avg Order Value",
      number: "$97.50",
      change: 3,
      description: "Per order",
    },
    newCustomers: {
      icon: MdPeopleAlt,
      title: "New Customers",
      number: "543",
      change: 22,
      description: "First-time buyers",
    },
    returnRate: {
      icon: MdAutorenew,
      title: "Return Rate",
      number: "2.4%",
      change: -0.8,
      description: "Product returns",
    },
  };

  // Get data based on type, fallback to provided props or default data
  const cardData = DEFAULT_DATA[type] || DEFAULT_DATA.users;
  const Icon = cardData.icon;

  // Use provided props or fallback to default data
  const displayTitle = title || cardData.title;
  const displayNumber = number || cardData.number;
  const displayChange = change !== undefined ? change : cardData.change;
  const displayDescription = description || cardData.description;

  const timeframeText = {
    week: "last week",
    month: "last month",
    quarter: "last quarter",
  }[timeframe];

  return (
    <div className={styles.container}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <div className={styles.texts}>
        <span className={styles.title}>{displayTitle}</span>
        <span className={styles.number}>{displayNumber}</span>
        <span className={styles.detail}>
          <span
            className={displayChange >= 0 ? styles.positive : styles.negative}
          >
            {displayChange >= 0 ? "+" : ""}
            {displayChange}%
          </span>{" "}
          <span className={styles.detailText}>vs {timeframeText}</span>
        </span>
        <span className={styles.description}>{displayDescription}</span>
      </div>
    </div>
  );
};

export default Card;
