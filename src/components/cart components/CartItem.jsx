import './cartItem.css';
import { RiDeleteBin7Fill } from "react-icons/ri";


function CartItem({ title, price, img, quantity }) {
  return (
    <div className='cart-item'>
       <img src={img} />
       <p className='sub-heading-part' id='productName'>{title}</p>
       <p className='sub-heading-part'>Rs. {price}</p>
       <p className='sub-heaing-quantity'>{quantity}</p>
       <p className='sub-heading-total'>Rs. {price * quantity}</p>
       <RiDeleteBin7Fill id='del-icon' />
    </div>
  )
}

export default CartItem;