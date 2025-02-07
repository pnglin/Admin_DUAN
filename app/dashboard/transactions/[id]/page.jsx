import styles from "@/app/ui/dashboard/transactions/singleTransaction/singleTransaction.module.css";
import Image from "next/image";

const SingleTransactionPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noproduct.jpg" alt="" fill />
        </div>
        iPhone 16 Pro Max 256GB
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <lable>Username</lable>
          <input type="text" name="username" placeholder="John Joe " />
          <lable>Address</lable>
          <input type="text" name="address" placeholder="New York" />
          <lable>Phone</lable>
          <input type="number" name="phone" placeholder="+12345" />
          <lable>Email</lable>
          <input type="text" name="email" placeholder="JohnJoe@gmail.com" />
          <lable>Product Name</lable>
          <input
            type="text"
            name="product name"
            placeholder="Iphone 16 Pro Max 256GB"
          />
          <lable>Quantity</lable>
          <textarea type="number" name="quantity" placeholder="2" />
          <lable>Size</lable>
          <select name="size" id="size">
            <option value="general">Choose a size</option>
            <option value="128GB">128GB</option>
            <option value="256GB">256GB</option>
            <option value="512GB">512GB</option>
            <option value="1TB">1TB</option>
          </select>
          <lable>Cat</lable>
          <select name="cat" id="cat">
            <option value="Samsung">Samsung</option>
            <option value="Iphone">Iphone</option>
            <option value="Xiaomi">Xiaomi</option>
            <option value="Oppo">Oppo</option>
          </select>
          <input type="text" placeholder="Color" name="color" />
          <input type="number" placeholder="amount" name="amount" />
          <lable>Status</lable>
          <select name="status" id="status">
            <option value="Pending">Pending</option>
            <option value="Done">Done</option>
            <option value="Cancelled">Cancelled</option>
          </select>
          <lable>Note</lable>
          <textarea name="note" id="note" rows="10" placeholder="Note..." />
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleTransactionPage;
