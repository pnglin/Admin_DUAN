import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

const SingleUserPage = () => {
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
          <lable>Rank</lable>
          <select name="isAdmin" id="isAdmin">
            <option value="general" selected>
              Choose a rank
            </option>
            <option value="normal"> Unranked</option>
            <option value="bronze"> Bronze</option>
            <option value="silver"> Silver</option>
            <option value="gold"> Gold</option>
          </select>
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

export default SingleUserPage;
