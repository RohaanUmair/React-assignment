import { GiSettingsKnobs } from "react-icons/gi";
import styles from "./sortSection.module.css";
import { TbLayoutGridFilled } from "react-icons/tb";
import { BsViewList } from "react-icons/bs";

function SortSection() {
  return (
    <section className={styles.section}>
      <div className={styles.left}>
        <div style={{ borderRight: "3px solid #9f9f9f" }}>
          <GiSettingsKnobs className={styles.filter_icon} />
          <h2 className={styles.filter}>Filter</h2>

          <TbLayoutGridFilled className={styles.grid_icon} />
          <BsViewList className={styles.viewList_icon} />
        </div>

        <div>
          <p className={styles.showing_text}>Showing 1-16 of 32 results</p>
        </div>
      </div>

      <div className={styles.right}>
        <div
          className={styles.rightside_div}
          style={{ justifyContent: "right" }}
        >
          <h2 className={styles.rightText}>Show</h2>
          <input className={styles.show_input} value={16} type="number" />
        </div>

        <div className={styles.rightside_div}>
          <h2 className={styles.rightText}>Sort by</h2>
          <input className={styles.sortBy_input} value={'Default'} type="text" />
        </div>
      </div>
    </section>
  );
}

export default SortSection;
