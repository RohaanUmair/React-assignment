import styles from './cartSidebar.module.css';
import { IoBagOutline } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import CartSidebarProduct from './CartSidebarProduct';



function CartSidebar({ setOpenSidebar }) {
    return (
        <div className={styles.wholePage_div}>
            <div className={styles.cart_sidebar}>
                <div style={{padding: '15px 50px 0 35px'}}>

                    <div className={styles.header}>
                        <h1>Shopping Cart</h1>

                        <div style={{position: 'relative'}} onClick={() => setOpenSidebar(false)} >
                            <IoBagOutline style={{fontSize: 25, position: 'relative'}} className={styles.close_icon} />
                            <IoIosClose style={{fontSize: 18, position: 'absolute', left: 4, top: 6}} className={styles.close_icon} />
                        </div>
                    </div>

                    <CartSidebarProduct />
                    <CartSidebarProduct />
                    <CartSidebarProduct />

                    <div className={styles.subtotal_sec}>
                        <h1>Subtotal</h1>
                        <p>Rs. 250,000.00</p>
                    </div>

                </div>
                <div className={styles.footer}>
                    <button>Cart</button>
                    <button>Checkout</button>
                    <button>Comparison</button>
                </div>

            </div>
        </div>
    )
}

export default CartSidebar;