import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

const SingleProductPage = () => {
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
          <lable>Title</lable>
          <input
            type="text"
            name="title"
            placeholder="iPhone 16 Pro Max 256GB "
          />
          <lable>Price</lable>
          <input type="number" name="price" placeholder="999$" />
          <lable>Stock</lable>
          <input type="number" name="stock" placeholder="72" />

          <lable>Color</lable>
          <input type="text" name="color" placeholder="Black" />
          <lable>Size</lable>
          <textarea type="text" name="size" placeholder="XL" />
          <lable>Cat</lable>
          <select name="cat" id="cat">
            <option value="Samsung">Samsung</option>
            <option value="Iphone">Iphone</option>
            <option value="Xiaomi">Xiaomi</option>
            <option value="Oppo">Oppo</option>
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

export default SingleProductPage;
