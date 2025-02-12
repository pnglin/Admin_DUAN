"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./bestSelling.module.css";
import { MdVisibility, MdDelete, MdTrendingUp } from "react-icons/md";

const bestproducts = [
  {
    id: 101,
    title: "iPhone 16 Pro Max 256GB",
    description: "100% new server, genuine Apple Vietnam",
    price: 1499,
    createdAt: "13.01.25",
    stock: 50,
    status: "In Stock",
    sales: 245,
  },
  {
    id: 102,
    title: "Samsung Galaxy S24 Ultra",
    description: "Latest Samsung flagship with 200MP camera and S Pen",
    price: 1399,
    createdAt: "20.01.25",
    stock: 30,
    status: "Low Stock",
    sales: 189,
  },
  {
    id: 103,
    title: "Google Pixel 9 Pro",
    description: "Top-tier AI camera and clean Android experience",
    price: 999,
    createdAt: "15.12.24",
    stock: 25,
    status: "Low Stock",
    sales: 156,
  },
  {
    id: 104,
    title: "Xiaomi Mi 14 Ultra",
    description:
      "Flagship killer with Leica camera system and great performance",
    price: 899,
    createdAt: "10.11.24",
    stock: 100,
    status: "In Stock",
    sales: 134,
  },
  {
    id: 105,
    title: "OnePlus 12",
    description: "Fast charging and excellent display performance",
    price: 799,
    createdAt: "01.12.24",
    stock: 70,
    status: "In Stock",
    sales: 123,
  },
];

const BestSellingPage = () => {
  const getStockStatus = (stock) => {
    if (stock <= 0) return styles.outOfStock;
    if (stock < 30) return styles.lowStock;
    return styles.inStock;
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.titleSection}>
          <MdTrendingUp className={styles.titleIcon} />
          <div>
            <h2 className={styles.title}>Top Selling Products</h2>
            <p className={styles.subtitle}>Performance of your best sellers</p>
          </div>
        </div>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Product</th>
              <th>Description</th>
              <th>Price</th>
              <th>Sales</th>
              <th>Stock Status</th>
              <th>Added</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bestproducts.map((product) => (
              <tr key={product.id}>
                <td>
                  <div className={styles.product}>
                    <Image
                      src={product.image || "/noproduct.jpg"}
                      alt={product.title}
                      width={48}
                      height={48}
                      className={styles.productImage}
                    />
                    <div className={styles.productInfo}>
                      <span className={styles.productTitle}>
                        {product.title}
                      </span>
                      <span className={styles.productId}>#{product.id}</span>
                    </div>
                  </div>
                </td>
                <td>
                  <p className={styles.productDescription}>
                    {product.description}
                  </p>
                </td>
                <td className={styles.price}>{formatPrice(product.price)}</td>
                <td className={styles.sales}>
                  <span className={styles.salesNumber}>{product.sales}</span>
                  units
                </td>
                <td>
                  <span
                    className={`${styles.stockBadge} ${getStockStatus(
                      product.stock
                    )}`}
                  >
                    {product.stock} in stock
                  </span>
                </td>
                <td className={styles.date}>{product.createdAt}</td>
                <td>
                  <div className={styles.actions}>
                    <Link href={`/dashboard/products/${product.id}`}>
                      <button className={`${styles.button} ${styles.view}`}>
                        <MdVisibility />
                        <span className={styles.buttonText}>View</span>
                      </button>
                    </Link>
                    <button className={`${styles.button} ${styles.delete}`}>
                      <MdDelete />
                      <span className={styles.buttonText}>Delete</span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BestSellingPage;
