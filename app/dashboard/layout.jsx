"use client";
import { useState } from "react";
import Sidebar from "../ui/dashboard/sidebar/sidebar";
import Navbar from "../ui/dashboard/navbar/navbar";
import Footer from "../ui/dashboard/footer/footer";
import styles from "../ui/dashboard/dashboard.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.content}>
        <Navbar />
        <div className={styles.mainWrapper}>
          <main className={styles.main}>{children}</main>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
