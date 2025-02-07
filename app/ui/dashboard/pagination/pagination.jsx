import { useEffect, useState } from "react";
import styles from "./pagination.module.css";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const [inputPage, setInputPage] = useState(currentPage);

  useEffect(() => {
    setInputPage(currentPage);
  }, [currentPage]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value) && value >= 1 && value <= totalPages) {
      setInputPage(Number(value));
    } else if (value === "") {
      setInputPage("");
    }
  };

  const handleInputSubmit = (e) => {
    if (e.key === "Enter" && inputPage >= 1 && inputPage <= totalPages) {
      onPageChange(inputPage);
    }
  };
  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span className={styles.pageInfo}>
        Page{" "}
        <input
          type="text"
          value={inputPage}
          onChange={handleInputChange}
          onKeyDown={handleInputSubmit}
          className={styles.pageInput}
        />{" "}
        of {totalPages}
      </span>

      <button
        className={styles.button}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
