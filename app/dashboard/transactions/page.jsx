"use client";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Search from "@/app/ui/dashboard/search/search";
import styles from "@/app/ui/dashboard/transactions/transactions.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const transaction = [
  {
    id: "123",
    name: "John Doe",
    avatar: "/noavatar.png",
    status: "pending",
    date: "26.01.25",
    amount: "$3,200",
  },
  {
    id: "124",
    name: "Jane Smith",
    avatar: "/noavatar.png",
    status: "cancelled",
    date: "27.01.25",
    amount: "$5,400",
  },
  {
    id: "125",
    name: "Robert Brown",
    avatar: "/noavatar.png",
    status: "done",
    date: "28.01.25",
    amount: "$1,800",
  },
  {
    id: "126",
    name: "Emily Davis",
    avatar: "/noavatar.png",
    status: "pending",
    date: "29.01.25",
    amount: "$2,300",
  },
  {
    id: "127",
    name: "Michael Johnson",
    avatar: "/noavatar.png",
    status: "done",
    date: "30.01.25",
    amount: "$7,500",
  },
  {
    id: "128",
    name: "Sophia Wilson",
    avatar: "/noavatar.png",
    status: "done",
    date: "31.01.25",
    amount: "$4,600",
  },
  {
    id: "129",
    name: "Liam Martinez",
    avatar: "/noavatar.png",
    status: "cancelled",
    date: "01.02.25",
    amount: "$2,100",
  },
  {
    id: "130",
    name: "Olivia Garcia",
    avatar: "/noavatar.png",
    status: "pending",
    date: "02.02.25",
    amount: "$6,300",
  },
  {
    id: "131",
    name: "Noah Hernandez",
    avatar: "/noavatar.png",
    status: "done",
    date: "03.02.25",
    amount: "$8,700",
  },
  {
    id: "132",
    name: "Isabella Lopez",
    avatar: "/noavatar.png",
    status: "cancelled",
    date: "04.02.25",
    amount: "$3,400",
  },
];

const TransactionsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 5;

  // Tính toán dữ liệu phân trang
  const indexOfLastProduct = currentPage * transactionsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - transactionsPerPage;
  const currentTransaction = transaction.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className={styles.containerPage}>
      <div className={styles.top}>
        <Search placeholder="Search for a transaction..." />
        <Link href="/dashboard/transactions/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Trans ID</td>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {currentTransaction.map((transaction) => (
            <tr key={transaction.id}>
              <td>#{transaction.id}</td>
              <td>
                <div className={styles.user}>
                  <Image
                    src={transaction.avatar}
                    alt={transaction.name}
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  <span className={styles.transactionName}>
                    {transaction.name}
                  </span>
                </div>
              </td>
              <td>
                <span
                  className={`${styles.status} ${styles[transaction.status]}`}
                >
                  {transaction.status}
                </span>
              </td>
              <td>{transaction.date}</td>
              <td>{transaction.amount}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/transactions/${transaction.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <button className={`${styles.button} ${styles.delete}`}>
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(transaction.length / transactionsPerPage)}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default TransactionsPage;
