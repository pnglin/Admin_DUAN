"use client";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Search from "@/app/ui/dashboard/search/search";
import styles from "@/app/ui/dashboard/teams/teams.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const teamData = [
  {
    id: 1,
    name: "Ngoc Linh",
    email: "ngoclinh@gmail.com",
    workedAt: "12.12.2002",
    role: "IT Support",
    status: "active",
    image: "/noavatar.png",
  },
  {
    id: 2,
    name: "John Doe",
    email: "johndoe@gmail.com",
    workedAt: "14.01.2023",
    role: "HR Manager",
    status: "inactive",
    image: "/noavatar.png",
  },
  {
    id: 3,
    name: "Jane Smith",
    email: "janesmith@gmail.com",
    workedAt: "20.05.2021",
    role: "Software Developer",
    status: "active",
    image: "/noavatar.png",
  },
  {
    id: 4,
    name: "David Lee",
    email: "davidlee@gmail.com",
    workedAt: "18.09.2020",
    role: "Product Manager",
    status: "active",
    image: "/noavatar.png",
  },
  {
    id: 5,
    name: "Maria Gonzalez",
    email: "mariagonzalez@gmail.com",
    workedAt: "25.11.2021",
    role: "Marketing Specialist",
    status: "inactive",
    image: "/noavatar.png",
  },
  {
    id: 6,
    name: "Michael Brown",
    email: "michaelbrown@gmail.com",
    workedAt: "02.02.2019",
    role: "Sales Executive",
    status: "active",
    image: "/noavatar.png",
  },
];

const TeamsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const teamsPerPage = 5;

  const indexOfLastTeam = currentPage * teamsPerPage;
  const indexOfFirstTeam = indexOfLastTeam - teamsPerPage;
  const currentTeams = teamData.slice(indexOfFirstTeam, indexOfLastTeam);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for an employee..." />
        <Link href="/dashboard/teams/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Employee Name</td>
            <td>Email</td>
            <td>Worked At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {currentTeams.map((employee) => (
            <tr key={employee.id}>
              <td>
                <div className={styles.user}>
                  <Image
                    src={employee.image}
                    alt={employee.name}
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  {employee.name}
                </div>
              </td>
              <td>{employee.email}</td>
              <td>{employee.workedAt}</td>
              <td>{employee.role}</td>
              <td>
                <span
                  className={`${styles.status} ${
                    employee.status === "active"
                      ? styles.active
                      : styles.inactive
                  }`}
                >
                  {employee.status}
                </span>
              </td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/teams/${employee.id}`}>
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
        totalPages={Math.ceil(teamData.length / teamsPerPage)}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default TeamsPage;
