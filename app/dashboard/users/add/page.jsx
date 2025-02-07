"use client";
import styles from "@/app/ui/dashboard/users/addUser/addUser.module.css";

const AddUserPage = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Username</label>
          <input
            type="text"
            placeholder="Enter username"
            name="username"
            className={styles.input}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>Email</label>
          <input
            type="email"
            placeholder="Enter email"
            name="email"
            className={styles.input}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            name="password"
            className={styles.input}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>Phone</label>
          <input
            type="tel"
            placeholder="Enter phone number"
            name="phone"
            className={styles.input}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>Role</label>
          <select name="rank" className={styles.select}>
            <option value="" disabled selected>
              Select role
            </option>
            <option value="Admin">Admin</option>
            <option value="Employee">Employee</option>
            <option value="Customer">Customer</option>
            <option value="Support">Support</option>
            <option value="Vendor">Vendor</option>
            <option value="Guest">Guest</option>
          </select>
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>Profile Image</label>
          <div className={styles.fileInput}>
            <input type="file" name="image" accept="image/*" id="image" />
          </div>
        </div>

        <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
          <label className={styles.label}>Address</label>
          <textarea
            name="address"
            placeholder="Enter address"
            className={styles.textarea}
            rows="4"
          />
        </div>

        <button
          type="submit"
          className={`${styles.button} ${styles.fullWidth}`}
        >
          Create User
        </button>
      </form>
    </div>
  );
};

export default AddUserPage;
