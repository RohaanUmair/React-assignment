import styles from './pinkHeader.module.css';
import { IoIosArrowForward } from "react-icons/io";


function PinkHeader() {
    return (
        <div className={styles.header}>
            <p className={styles.header_links}>Home</p>
            <IoIosArrowForward style={{fontSize: 20}} />
            <p className={styles.header_links}>Shop</p>
            <IoIosArrowForward style={{fontSize: 20}} />
            <p className={styles.product_name}>Asgaard sofa</p>
        </div>
    )
}

export default PinkHeader
