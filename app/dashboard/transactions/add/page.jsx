import styles from "@/app/ui/dashboard/transactions/addTransaction/addTransaction.module.css";

const AddTransactionPage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" placeholder="username" name="username" required />
        <input type="text" placeholder="address" name="address" required />
        <input type="number" placeholder="phone" name="phone" required />
        <input type="email" placeholder="email" name="email" />
        <input type="text" placeholder="product name" name="product name" />
        <input type="number" placeholder="quantity" name="quantity" />
        <select name="size" id="size">
          <option value="general">Choose a size</option>
          <option value="128GB">128GB</option>
          <option value="256GB">256GB</option>
          <option value="512GB">512GB</option>
          <option value="1TB">1TB</option>
        </select>
        <select name="cat" id="cat">
          <option value="general">Choose a Category</option>
          <option value="iphone">Iphone</option>
          <option value="samsung">Samsung</option>
          <option value="xiaomi">Xiaomi</option>
          <option value="oppo">Oppo</option>
        </select>
        <input type="text" placeholder="color" name="color" />
        <input type="number" placeholder="amount" name="amount" />
        <textarea name="note" id="note" rows="16" placeholder="Note"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddTransactionPage;
