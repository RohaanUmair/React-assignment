import FormInput from "./FormInput";
import "./mainSection.css";
import { FaCircle } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";


function MainSection() {
    return (
        <div className="checkout-main-sec">
            <div className="checkout-billingDetails">
                <h1 className="heading-billingDetails">Billing Details</h1>
                <div className="name-section-inputs">
                    <FormInput label={"First Name"} width={212} />
                    <FormInput label={"Last Name"} width={212} />
                </div>
                <FormInput label={"Company Name (Optional)"} />
                <FormInput
                    label={"Country / Region (Optional)"}
                    placeholder={"Pakistan"}
                />
                <FormInput label={"Street address"} />
                <FormInput label={"Town / City"} />
                <FormInput label={"Province"} placeholder={"Province"} />
                <FormInput label={"ZIP Code"} />
                <FormInput label={"Phone"} />
                <FormInput label={"Email address"} />
                <FormInput placeholder={"Additional information"} />
            </div>


            <div className="checkout-productDetails">
                <div className="upper-div">
                    <div className="headings space-between">
                        <h1>Product</h1>
                        <h1>Subtotal</h1>
                    </div>

                    <div className="products space-between">
                        <p>
                            <span className="product-name">Asgaard sofa</span> x 1
                        </p>
                        <p className="product-price">Rs. 250,000.00</p>
                    </div>

                    <div className="sub-total space-between">
                        <p className="total_subtotal-heading">Subtotal</p>
                        <p className="product-price">Rs. 250,000.00</p>
                    </div>

                    <div className="total space-between">
                        <p className="total_subtotal-heading">Total</p>
                        <p className="total-price">Rs. 250,000.00</p>
                    </div>
                </div>

                <div className="lower-div">
                    <div className="sub-heading-products">
                        <FaCircle className="circle-icon" />
                        <h4 style={{fontSize: 16, fontWeight: 500}}>Direct Bank Transfer</h4>
                    </div>

                    <p style={{ transform: 'translateY(-15x)', fontSize: 16, textAlign:'justify', fontWeight: 300, color: '#9f9f9f'}}>
                        Make your payment directly into our bank account. Please use your
                        Order ID as the payment reference. Your order will not be shipped
                        until the funds have cleared in our account.
                    </p>

                    <div className="sub-heading-products">
                        <FaRegCircle className="circle-icon" style={{color: '#9f9f9f'}} />
                        <h4 style={{fontSize: 16, fontWeight: 500, color: '#9f9f9f'}}>Direct Bank Transfer</h4>
                    </div>

                    <div className="sub-heading-products">
                        <FaRegCircle className="circle-icon" style={{color: '#9f9f9f'}} />
                        <h4 style={{fontSize: 16, fontWeight: 500, color: '#9f9f9f'}}>Cash On Delivery</h4>
                    </div>

                    <p style={{fontSize: 16, fontWeight: 300, textAlign:'justify'}}>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our<b> privacy policy.</b></p>

                    <div style={{width: '100%', display: 'flex', justifyContent:'center'}}>
                        <button className="place-order-btn">Place order</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainSection;
