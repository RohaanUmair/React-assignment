import './cartItem.css';
import { RiDeleteBin7Fill } from "react-icons/ri";


function CartItem({ title, price, img }) {
  return (
    <div className='cart-item'>
       <img src={img} />
       <p className='sub-heading-part' style={{width: 108}}>{title}</p>
       <p className='sub-heading-part'>Rs. {price}</p>
       <p className='sub-heaing-quantity'>1</p>
       <p className='sub-heading-total'>Rs. {price}</p>
       <RiDeleteBin7Fill id='del-icon' />
    </div>
  )
}

export default CartItem;