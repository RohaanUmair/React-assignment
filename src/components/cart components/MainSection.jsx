import CartItem from './CartItem';
import './mainSection.css';
import data from '../../data/data.json';
import { useState } from 'react';

function MainSection({ cartProductsArray }) {
  const [cartItems, setCartItems] = useState([]);

  const calculateTotal = () => {
    return cartProductsArray.reduce((acc, item) => {
      const product = data.find((dataItem) => dataItem.id === item.productId);
      return acc + Number(product.price);
    }, 0);
  };

  const total = calculateTotal();

  return (
    <div className="cart-main-sec">

      <div className="product-details">
        <div className="header">
          <h3 style={{ transform: 'translateX(60px)' }}>Product</h3>
          <h3 style={{ transform: 'translateX(100px)' }}>Price</h3>
          <h3 style={{ transform: 'translateX(42px)' }}>Quantity</h3>
          <h3 style={{ transform: 'translateX(-38px)' }}>Subtotal</h3>
        </div>

        <div className='cart_items-listed'>
          {
            cartProductsArray.map((item) => {
              const product = data.find((dataItem) => {
                return dataItem.id == item.productId;
              });
              return <CartItem title={product.title} price={product.price} img={product.img} />
            })
          }
        </div>
      </div>


      <div className="cart-totals">
        <h1 style={{ marginBottom: 20 }}>Cart Totals</h1>
        <div>
          <p className='heading'>Subtotal</p>
          <p id='sub-total'>Rs. {total}</p>
        </div>

        <div>
          <p className='heading'>Total</p>
          <p id='total'>Rs. {total}</p>
        </div>

        <button id='checkout-btn' onClick={() => console.log(cartProductsArray)}>Check Out</button>
      </div>

    </div>
  )
}

export default MainSection;