"use client";
import { useState, useEffect, useCallback, memo } from "react";
import Image from "next/image";
import MenuLink from "./menuLink/menuLink";
import styles from "./sidebar.module.css";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
  MdMenu,
  MdClose,
} from "react-icons/md";
import { AiOutlineHistory } from "react-icons/ai";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
      {
        title: "History",
        path: "/dashboard/orderhistory",
        icon: <AiOutlineHistory />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Warehouse",
        path: "/dashboard/warehouses",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

// Memoize static components
const UserProfile = memo(({ username, userTitle }) => (
  <div className={styles.user}>
    <Image
      className={styles.userImage}
      src="/noavatar.png"
      alt="User avatar"
      width={50}
      height={50}
      priority
    />
    <div className={styles.userDetail}>
      <span className={styles.username}>{username}</span>
      <span className={styles.userTitle}>{userTitle}</span>
    </div>
  </div>
));

UserProfile.displayName = "UserProfile";

const Navigation = memo(({ menuItems, isMobile, onItemClick }) => (
  <nav>
    <ul className={styles.list}>
      {menuItems.map((cat) => (
        <li key={cat.title}>
          <span className={styles.cat}>{cat.title}</span>
          {cat.list.map((item) => (
            <MenuLink
              item={item}
              key={item.title}
              onClick={isMobile ? onItemClick : undefined}
            />
          ))}
        </li>
      ))}
    </ul>
  </nav>
));

Navigation.displayName = "Navigation";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = useCallback(() => {
    const width = window.innerWidth;
    setIsMobile(width <= 768);
    if (width <= 768) setIsSidebarOpen(false);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen((prev) => !prev);
    if (isMobile) {
      document.body.style.overflow = !isSidebarOpen ? "hidden" : "unset";
    }
  }, [isMobile, isSidebarOpen]);

  return (
    <>
      <button
        className={styles.toggleButton}
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
      >
        {isSidebarOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
      </button>

      {isMobile && isSidebarOpen && (
        <div className={styles.overlay} onClick={toggleSidebar} />
      )}

      <aside
        className={`${styles.container} ${
          !isSidebarOpen ? styles.containerClosed : ""
        } ${isMobile ? styles.mobile : ""}`}
      >
        <UserProfile username="John Joe" userTitle="Administrator" />
        <Navigation
          menuItems={menuItems}
          isMobile={isMobile}
          onItemClick={toggleSidebar}
        />
        <button className={styles.logout}>
          <MdLogout />
          Logout
        </button>
      </aside>
    </>
  );
};

export default Sidebar;
