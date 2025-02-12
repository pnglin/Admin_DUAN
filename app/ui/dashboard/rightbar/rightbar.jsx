import React from "react";
import styles from "./rightbar.module.css";
import Image from "next/image";
import { MdShoppingCart, MdLocalOffer, MdTrendingUp } from "react-icons/md";

const Rightbar = () => {
  return (
    <div className={styles.container}>
      {/* Best Selling Products */}
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image
            src="/product-showcase.jpg"
            alt=""
            fill
            className={styles.bg}
          />
        </div>
        <div className={styles.text}>
          <span className={styles.notification}>🔥 Top Selling</span>
          <h3 className={styles.title}>Best Selling Products This Week</h3>
          <div className={styles.productList}>
            <div className={styles.productItem}>
              <span className={styles.productName}>Product A</span>
              <span className={styles.productSales}>234 sales</span>
            </div>
            <div className={styles.productItem}>
              <span className={styles.productName}>Product B</span>
              <span className={styles.productSales}>189 sales</span>
            </div>
            <div className={styles.productItem}>
              <span className={styles.productName}>Product C</span>
              <span className={styles.productSales}>156 sales</span>
            </div>
          </div>
          <button className={styles.button}>
            <MdTrendingUp />
            View All
          </button>
        </div>
      </div>

      {/* Active Promotions */}
      <div className={styles.item}>
        <div className={styles.text}>
          <span className={styles.notification}>🏷️ Active Promotions</span>
          <h3 className={styles.title}>Current Deals & Discounts</h3>
          <div className={styles.promoList}>
            <div className={styles.promoItem}>
              <span className={styles.promoCode}>SUMMER30</span>
              <span className={styles.promoDesc}>
                30% off on summer collection
              </span>
            </div>
            <div className={styles.promoItem}>
              <span className={styles.promoCode}>FREESHIP</span>
              <span className={styles.promoDesc}>
                Free shipping on orders over $50
              </span>
            </div>
          </div>
          <button className={styles.button}>
            <MdLocalOffer />
            View All Promotions
          </button>
        </div>
      </div>

      {/* Low Stock Alert */}
      <div className={styles.item}>
        <div className={styles.text}>
          <span className={styles.notification}>⚡ Almost Sold Out</span>
          <h3 className={styles.title}>Running Low on Stock</h3>
          <div className={styles.stockList}>
            <div className={styles.stockItem}>
              <span className={styles.productName}>Product X</span>
              <span className={styles.stockCount}>Only 5 left</span>
            </div>
            <div className={styles.stockItem}>
              <span className={styles.productName}>Product Y</span>
              <span className={styles.stockCount}>Only 3 left</span>
            </div>
          </div>
          <button className={styles.button}>
            <MdShoppingCart />
            Manage Inventory
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
