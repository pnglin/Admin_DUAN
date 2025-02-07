import styles from "@/app/ui/dashboard/teams/addTeam/addTeam.module.css";

const AddTeamPage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" placeholder="username" name="username" required />
        <input type="email" placeholder="email" name="email" required />
        <input
          type="password"
          placeholder="password"
          name="password"
          required
        />
        <input type="phone" placeholder="phone" name="phone" required />
        <select name="role" id="role">
          <option value="general" selected>
            Choose a role
          </option>
          <option value="ITSupport"> IT Support</option>
          <option value="ITInventory"> IT Inventory</option>
          <option value="Shipper"> Shipper</option>
        </select>
        <input type="file" name="image" id="image" accept="image/*" />
        <textarea
          name="address"
          id="address"
          rows="16"
          placeholder="Address"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddTeamPage;
