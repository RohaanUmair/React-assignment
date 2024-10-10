import styles from "./allPagePinkBanner.module.css";
import { GrTrophy } from "react-icons/gr";
import { SiTicktick } from "react-icons/si";
import { BsMailboxFlag } from "react-icons/bs";
import { MdOutlineSupportAgent } from "react-icons/md";


function AllPagePinkBanner() {
  return (
    <section className={styles.banner}>
        <div className={styles.primary_div}>
            <GrTrophy className={styles.icons} />
            <div className={styles.secondary_div}>
                <h1>High Quality</h1>
                <p>Crafted from top material</p>
            </div>
        </div>

        <div className={styles.primary_div}>
            <SiTicktick className={styles.icons} />
            <div className={styles.secondary_div}>
                <h1>Warranty Protection</h1>
                <p>Over 2 years</p>
            </div>
        </div>

        <div className={styles.primary_div}>
            <BsMailboxFlag className={styles.icons} />
            <div className={styles.secondary_div}>
                <h1>Free shipping</h1>
                <p>Order over 150</p>
            </div>
        </div>

        <div className={styles.primary_div}>
            <MdOutlineSupportAgent className={styles.icons} />
            <div className={styles.secondary_div}>
                <h1>24/7 Support</h1>
                <p>Dedicated support</p>
            </div>
        </div>
    </section>
  )
}

export default AllPagePinkBanner;