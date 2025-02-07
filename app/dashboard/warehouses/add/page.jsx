import styles from "@/app/ui/dashboard/warehouse/addWarehouse/addWarehouse.module.css";

const AddWarehousePage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input
          type="text"
          placeholder="ID Product"
          name="ID Product"
          required
        />
        <select name="sup" id="sup">
          <option value="general">Choose a Supplier</option>
          <option value="appleVietnam">Apple Vietnam</option>
          <option value="samsungOfficial">Samsung Official</option>
          <option value="xiaomiVietnam">Xiaomi Vietnam</option>
          <option value="oppoVietnam">Oppo Vietnam</option>
        </select>
        <input type="number" placeholder="quantity" name="quantity" />
        <input type="number" placeholder="total" name="total" />
        <textarea
          name="desc"
          id="desc"
          rows="16"
          placeholder="Description"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddWarehousePage;
