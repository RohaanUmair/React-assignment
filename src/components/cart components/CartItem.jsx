import './cartItem.css';
import { RiDeleteBin7Fill } from "react-icons/ri";


function CartItem() {
  return (
    <div className='cart-item'>
       <img src="src/assets/type-bedroom.png" />
       <p className='sub-heading-part' style={{width: 108}}>Asgaard sofa</p>
       <p className='sub-heading-part'>Rs. 250,000</p>
       <p className='sub-heaing-quantity'>1</p>
       <p className='sub-heading-total'>Rs. 250,000</p>
       <RiDeleteBin7Fill id='del-icon' />
    </div>
  )
}

export default CartItem;