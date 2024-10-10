import CartItem from './CartItem';
import './mainSection.css';

function MainSection() {
  return (
    <div className="cart-main-sec">

        <div className="product-details">
            <div className="header">
                <h3 style={{transform: 'translateX(60px)'}}>Product</h3>
                <h3 style={{transform: 'translateX(100px)'}}>Price</h3>
                <h3 style={{transform: 'translateX(42px)'}}>Quantity</h3>
                <h3 style={{transform: 'translateX(-38px)'}}>Subtotal</h3>
            </div>

            <div className='cart_items-listed'>
                <CartItem />
                <CartItem />
                <CartItem />
            </div>
        </div>


        <div className="cart-totals">
            <h1 style={{marginBottom: 20}}>Cart Totals</h1>
            <div>
              <p className='heading'>Subtotal</p>
              <p id='sub-total'>Rs. 250,000.00</p>
            </div>

            <div>
              <p className='heading'>Total</p>
              <p id='total'>Rs. 250,000.00</p>
            </div>

            <button id='checkout-btn'>Check Out</button>
        </div>

    </div>
  )
}

export default MainSection;