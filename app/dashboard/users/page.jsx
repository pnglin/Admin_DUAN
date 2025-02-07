"use client";
import { useState } from "react";
import Search from "@/app/ui/dashboard/search/search";
import styles from "@/app/ui/dashboard/users/users.module.css";
import Image from "next/image";
import Link from "next/link";

const UsersPage = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Brian Jackson",
      email: "samanthaguerra@yahoo.com",
      role: "admin",
      phone: "+1234567890",
      loyalty_points: 150,
      status: "active",
      last_login_at: "1/10/24 9:30",
      created_at: "2023-12-20 10:00",
    },
    {
      id: 2,
      name: "Rita Gordon",
      email: "sheila06@yahoo.com",
      role: "employee",
      phone: "+6987654321",
      loyalty_points: 90,
      status: "active",
      last_login_at: "1/12/24 14:45",
      created_at: "2023-11-15 14:20",
    },
    {
      id: 3,
      name: "Morgan Reed",
      email: "tsteele@bryant.com",
      role: "customer",
      phone: "+1122334455",
      loyalty_points: 200,
      status: "inactive",
      last_login_at: "1/11/24 13:50",
      created_at: "2023-10-10 08:45",
    },
    {
      id: 4,
      name: "Sharon Velez",
      email: "mary23@yahoo.com",
      role: "vendor",
      phone: "+6677889900",
      loyalty_points: 120,
      status: "active",
      last_login_at: "1/9/24 11:20",
      created_at: "2023-09-25 12:00",
    },
    {
      id: 5,
      name: "Megan Wheeler",
      email: "josephdanielle@gmail.com",
      role: "support",
      phone: "+5566778899",
      loyalty_points: 250,
      status: "active",
      last_login_at: "1/7/24 17:15",
      created_at: "2023-08-05 13:30",
    },
    {
      id: 6,
      name: "Joshua Jacobs",
      email: "victor93@gmail.com",
      role: "guest",
      phone: "+4433221100",
      loyalty_points: 75,
      status: "inactive",
      last_login_at: "1/5/24 8:40",
      created_at: "2023-07-30 09:10",
    },
    {
      id: 7,
      name: "Stacey Perry",
      email: "wbrooks@gmail.com",
      role: "customer",
      phone: "+3344556677",
      loyalty_points: 180,
      status: "active",
      last_login_at: "1/14/24 10:10",
      created_at: "2023-11-20 07:45",
    },
    {
      id: 8,
      name: "Christina Smith",
      email: "sstevens@hamilton.com",
      role: "support",
      phone: "+1122443366",
      loyalty_points: 135,
      status: "inactive",
      last_login_at: "1/6/24 16:20",
      created_at: "2023-09-15 15:10",
    },
    {
      id: 9,
      name: "Danielle Evans",
      email: "tony86@yahoo.com",
      role: "customer",
      phone: "+7788990011",
      loyalty_points: 225,
      status: "active",
      last_login_at: "1/3/24 19:35",
      created_at: "2023-08-10 11:25",
    },
    {
      id: 10,
      name: "Chelsea Stone",
      email: "bradley68@smith-wilson.com",
      role: "guest",
      phone: "+1234432112",
      loyalty_points: 110,
      status: "active",
      last_login_at: "1/12/24 15:10",
      created_at: "2023-12-01 09:00",
    },
  ]);

  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({});

  const startEdit = (user) => {
    setEditingId(user.id);
    setEditData(user);
  };

  const handleEdit = (field, value) => {
    setEditData({ ...editData, [field]: value });
  };

  const saveEdit = () => {
    setUsers(users.map((user) => (user.id === editingId ? editData : user)));
    setEditingId(null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user..." />
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Role</td>
            <td>Phone</td>
            <td>Points</td>
            <td>Status</td>
            <td>Last Login</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              {editingId === user.id ? (
                <>
                  <td>
                    <div className={styles.user}>
                      <Image
                        src="/noavatar.png"
                        alt=""
                        width={40}
                        height={40}
                        className={styles.userImage}
                      />
                      <input
                        className={styles.inputField}
                        value={editData.name}
                        onChange={(e) => handleEdit("name", e.target.value)}
                      />
                    </div>
                  </td>
                  <td>
                    <input
                      className={styles.inputField}
                      value={editData.email}
                      onChange={(e) => handleEdit("email", e.target.value)}
                    />
                  </td>
                  <td>
                    <select
                      className={styles.selectField}
                      value={editData.role}
                      onChange={(e) => handleEdit("role", e.target.value)}
                    >
                      <option value="admin">Admin</option>
                      <option value="employee">Employee</option>
                      <option value="customer">Customer</option>
                      <option value="vendor">Vendor</option>
                      <option value="support">Support</option>
                      <option value="guest">Guest</option>
                    </select>
                  </td>
                  <td>
                    <input
                      className={styles.inputField}
                      value={editData.phone}
                      onChange={(e) => handleEdit("phone", e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      className={styles.inputField}
                      value={editData.loyalty_points}
                      onChange={(e) =>
                        handleEdit("loyalty_points", e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <select
                      className={styles.selectField}
                      value={editData.status}
                      onChange={(e) => handleEdit("status", e.target.value)}
                    >
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                  </td>
                  <td>{user.last_login_at}</td>
                  <td>
                    <div className={styles.buttons}>
                      <button
                        onClick={saveEdit}
                        className={`${styles.button} ${styles.save}`}
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setEditingId(null)}
                        className={`${styles.button} ${styles.cancel}`}
                      >
                        Cancel
                      </button>
                    </div>
                  </td>
                </>
              ) : (
                <>
                  <td>
                    <div className={styles.user}>
                      <Image
                        src="/noavatar.png"
                        alt=""
                        width={40}
                        height={40}
                        className={styles.userImage}
                      />
                      <span className={styles.userName}>{user.name}</span>
                    </div>
                  </td>
                  <td>
                    <span className={styles.userEmail}>{user.email}</span>
                  </td>
                  <td>
                    <span className={`${styles.status} ${styles[user.role]}`}>
                      {user.role}
                    </span>
                  </td>
                  <td>{user.phone}</td>
                  <td>{user.loyalty_points}</td>
                  <td>
                    <span className={`${styles.status} ${styles[user.status]}`}>
                      {user.status}
                    </span>
                  </td>
                  <td>{user.last_login_at}</td>
                  <td>
                    <div className={styles.buttons}>
                      <Link href={`/dashboard/users/${user.id}`}>
                        <button className={`${styles.button} ${styles.view}`}>
                          View
                        </button>
                      </Link>
                      <button
                        onClick={() => startEdit(user)}
                        className={`${styles.button} ${styles.edit}`}
                      >
                        Edit
                      </button>
                      <button className={`${styles.button} ${styles.delete}`}>
                        Delete
                      </button>
                    </div>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersPage;
