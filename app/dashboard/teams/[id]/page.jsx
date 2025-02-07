import styles from "@/app/ui/dashboard/teams/singleTeam/singleTeam.module.css";
import Image from "next/image";

const SingleTeamPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        John Doe
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <lable>Username</lable>
          <input type="text" name="username" placeholder="Ngoc Linh" />
          <lable>Email</lable>
          <input type="email" name="email" placeholder="ngoclinh@gmail.com" />
          <lable>Password</lable>
          <input type="password" name="password" />
          <lable>Phone</lable>
          <input type="text" name="phone" placeholder="+1234567" />
          <lable>Address</lable>
          <input type="text" name="address" placeholder="New York" />
          <lable>Role</lable>
          <select name="role" id="role">
            <option value="general">Choose a Role</option>
            <option value="ITSupport"> IT Support</option>
            <option value="ITInventory"> IT Inventory</option>
            <option value="Shipper"> Shipper</option>
          </select>
          <lable>To Do</lable>
          <input type="text" name="todo" placeholder="Sprint 1" />
          <lable>Is Active</lable>
          <select name="isActive" id="isActive">
            <option value={true}> Yes</option>
            <option value={false}> No</option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleTeamPage;
