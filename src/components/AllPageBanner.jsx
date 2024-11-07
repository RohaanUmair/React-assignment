import { IoIosArrowForward } from "react-icons/io";
import styles from "./allPageBanner.module.css";

function AllPageBanner({ text }) {
  return (
    <div className={styles.banner}>
      <img src="/assets/all-page-banner.webp" />
      <div className={styles.blur}>
        <img src="/assets/Logo.png" />
        <div className={styles.text_holder}>
          <h1>{text}</h1>
          <h2>
            Home <IoIosArrowForward className={styles.arrow} /> <span>{text}</span>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default AllPageBanner;
