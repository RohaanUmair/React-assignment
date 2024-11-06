import CartItem from "./CartItem";
import "./mainSection.css";
import data from "../../data/data.json";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ValuesContext } from "../ValuesContext";

function  MainSection() {
  const { cartProducts, total } = useContext(ValuesContext);

  const navigate = useNavigate();

  return (
    <div className="cart-main-sec">
      <div className="product-details">
        <div className="header">
          <h3 id="h_product">Product</h3>
          <h3 id="h_price">Price</h3>
          <h3 id="h_quantity">Quantity</h3>
          <h3 id="h_subtotal">Subtotal</h3>
        </div>

        <div className="cart_items-listed">
          {cartProducts.map((item) => {
            const product = data.find((dataItem) => {
              return dataItem.id == item.productId;
            });
            return (
              <CartItem
                title={product.title}
                price={product.price}
                img={product.img}
                key={item.productId}
                quantity={item.quantity}
              />
            );
          })}
        </div>
      </div>

      <div className="cart-totals">
        <h1 style={{ marginBottom: 20 }}>Cart Totals</h1>
        <div>
          <p className="heading">Subtotal</p>
          <p id="sub-total">Rs. {total}</p>
        </div>

        <div>
          <p className="heading">Total</p>
          <p id="total">Rs. {total}</p>
        </div>

        <button
          id="checkout-btn"
          onClick={() => navigate("/checkout")}
        >
          Check Out
        </button>
      </div>
    </div>
  );
}

export default MainSection;
