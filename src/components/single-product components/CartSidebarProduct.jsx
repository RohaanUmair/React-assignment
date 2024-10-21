import styles from './cartSidebar.module.css';
import { IoMdCloseCircle } from "react-icons/io";


function CartSidebarProduct({ title, price, img, quantity }) {
    return (
        <div className={styles.item}>

            <img src={img} />

            <div>
                <h1>{title}</h1>
                <p>{quantity} X <span style={{marginLeft: 10}}> Rs. {price}</span></p>
            </div>

            <IoMdCloseCircle className={styles.icon} />

        </div>
    )
}

export default CartSidebarProduct;