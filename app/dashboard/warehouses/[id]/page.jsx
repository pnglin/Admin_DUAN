import styles from "@/app/ui/dashboard/warehouse/singleWarehouse/singleWarehouse.module.css";
import Image from "next/image";

const SingleWarehousePage = () => {
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
          <lable>Name Product</lable>
          <input
            type="text"
            name="title"
            placeholder="iPhone 16 Pro Max 256GB "
          />
          <lable>Supplier</lable>
          <input type="text" name="supplier" placeholder="Apple Vietnam" />
          <lable>Quantity</lable>
          <input type="number" name="stock" placeholder="72" />
          <lable>Date</lable>
          <input type="date" name="date" id="date" />
          <lable>Total Amount</lable>
          <textarea type="text" name="total" />
          <lable>Employee</lable>
          <select name="employee" id="employee">
            <option value="general">Choose an employee</option>
            <option value="JohnJoe">John Joe</option>
          </select>
          <lable>Description</lable>
          <textarea
            name="desc"
            id="desc"
            rows="10"
            placeholder="Description..."
          />
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleWarehousePage;
