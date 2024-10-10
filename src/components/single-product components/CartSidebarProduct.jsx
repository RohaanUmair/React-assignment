import styles from './cartSidebar.module.css';
import { IoMdCloseCircle } from "react-icons/io";


function CartSidebarProduct() {
    return (
        <div className={styles.item}>

            <img src="https://images.unsplash.com/photo-1506898667547-42e22a46e125?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8Mg%3D%3D" />

            <div>
                <h1>Asgaard sofa</h1>
                <p>1 X <span style={{marginLeft: 10}}> Rs. 250,000.00</span></p>
            </div>

            <IoMdCloseCircle className={styles.icon} />

        </div>
    )
}

export default CartSidebarProduct;