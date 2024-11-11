import styles from "./productDetailsSection.module.css";
import { PiStarFill } from "react-icons/pi";
import { PiStarHalfFill } from "react-icons/pi";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { useState } from "react";

function ProductDetailsSection({ setOpenSidebar, product, handleAddToCart, id }) {
    const [sizeBtn, setSizeBtn] = useState("L");

    
    const [count, setCount] = useState(1);

    const handleCount = (operator) => {
        if (operator == '+' && count < 5) {
            setCount(count + 1);
        } else if (operator == '-' && count > 1) {
            setCount(count - 1);
        } else {
            alert('You can only add between 1 and 5 units of a single product to the cart at a time.');
        }
    }

    return (
        <>
            <section className={styles.upper_sec}>
                <div className={styles.product_imgs}>
                    <div>
                        <img src={`${product.img}`} />
                        <img src={`${product.img}`} />
                        <img src={`${product.img}`} />
                        <img src={`${product.img}`} />
                    </div>

                    <img src={product.img} />
                </div>

                <div className={styles.main_details}>
                    <h1 style={{ fontSize: 42, fontWeight: 400 }}>{product.title}</h1>
                    <h2 style={{ fontSize: 24, fontWeight: 500, color: "#9f9f9f" }}>
                        Rs. {product.price}
                    </h2>

                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div>
                            <PiStarFill className={styles.star_icons} />
                            <PiStarFill className={styles.star_icons} />
                            <PiStarFill className={styles.star_icons} />
                            <PiStarFill className={styles.star_icons} />
                            <PiStarHalfFill className={styles.star_icons} />
                        </div>
                        <p
                            style={{
                                display: "flex",
                                alignItems: "center",
                                fontSize: 13,
                                fontWeight: 400,
                                color: "#9f9f9f",
                                borderLeft: "3px solid #9f9f9f",
                                paddingLeft: 20,
                                height: 30,
                            }}
                        >
                            5 Customer Review
                        </p>
                    </div>

                    <p className={styles.desc}>{product.detailed_desc}</p>

                    <div style={{ marginBottom: 10 }}>
                        <h3 style={{ marginBottom: 5 }}>Size</h3>
                        <div className={styles.size_section}>
                            {sizeBtn == "L" ? (
                                <>
                                    <button
                                        style={{ backgroundColor: "#b88e2f", color: "white" }}
                                    >
                                        L
                                    </button>
                                    <button onClick={() => setSizeBtn("XL")}>XL</button>
                                    <button onClick={() => setSizeBtn("XS")}>XS</button>
                                </>
                            ) : null}
                            {sizeBtn == "XL" ? (
                                <>
                                    <button onClick={() => setSizeBtn("L")}>L</button>
                                    <button
                                        style={{ backgroundColor: "#b88e2f", color: "white" }}
                                    >
                                        XL
                                    </button>
                                    <button onClick={() => setSizeBtn("XS")}>XS</button>
                                </>
                            ) : null}
                            {sizeBtn == "XS" ? (
                                <>
                                    <button onClick={() => setSizeBtn("L")}>L</button>
                                    <button onClick={() => setSizeBtn("XL")}>XL</button>
                                    <button
                                        style={{ backgroundColor: "#b88e2f", color: "white" }}
                                    >
                                        XS
                                    </button>
                                </>
                            ) : null}
                        </div>
                    </div>

                    <div style={{ marginBottom: 10 }}>
                        <h3 style={{ marginBottom: 5 }}>Color</h3>
                        <div style={{ display: "flex", gap: 15 }}>
                            <div
                                style={{
                                    height: 30,
                                    width: 30,
                                    backgroundColor: "#816dfa",
                                    borderRadius: "50%",
                                    cursor: "pointer",
                                }}
                            ></div>
                            <div
                                style={{
                                    height: 30,
                                    width: 30,
                                    backgroundColor: "#000000",
                                    borderRadius: "50%",
                                    cursor: "pointer",
                                }}
                            ></div>
                            <div
                                style={{
                                    height: 30,
                                    width: 30,
                                    backgroundColor: "#b88e2f",
                                    borderRadius: "50%",
                                    cursor: "pointer",
                                }}
                            ></div>
                        </div>
                    </div>

                    <div style={{ display: "flex", gap: 20 }}>
                        <div
                            style={{
                                display: "flex",
                                width: 123,
                                height: 64,
                                justifyContent: "space-between",
                                alignItems: "center",
                                border: "1px solid #9f9f9f",
                                borderRadius: 10,
                            }}
                        >
                            <button
                                className={styles.plusAndMinusBtns}
                                onClick={() => handleCount('-')}
                            >
                                -
                            </button>
                            <h4 style={{width: 30, textAlign: 'center'}}>{count}</h4>
                            <button
                                className={styles.plusAndMinusBtns}
                                onClick={() => handleCount('+')}
                            >
                                +
                            </button>
                        </div>

                        <button
                            className={styles.bottom_btns}
                            onClick={(e) => {
                                setOpenSidebar(true);
                                e.preventDefault();
                                handleAddToCart(id, count);
                            }}
                        >
                            Add To Cart
                        </button>
                    </div>

                    <div className={styles.small_details}>
                        <div>
                            <h5>SKU</h5>
                            <p>: SS001</p>
                        </div>

                        <div>
                            <h5>Category</h5>
                            <p>: Sofas</p>
                        </div>

                        <div>
                            <h5>Tags</h5>
                            <p>: Sofa, Chair, Home, Shop</p>
                        </div>

                        <div>
                            <h5>Share</h5>
                            <p>
                                :
                                <FaFacebook className={styles.icons} />
                                <FaLinkedin className={styles.icons} />
                                <AiFillTwitterCircle className={styles.icons} />
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.lower_sec}>
                <div className={styles.selectors}>
                    <button>Description</button>
                    <button style={{ color: "#9f9f9f" }}>Additional Information</button>
                    <button style={{ color: "#9f9f9f" }}>Reviews [5]</button>
                </div>

                <div>
                    <p style={{ marginBottom: 30 }}>{product.detailed_desc}</p>
                    <p>{product.detailed_desc2}</p>
                </div>

                <div style={{ display: "flex", gap: 30 }}>
                    <img src={`${product.img}`} />
                    <img src={`${product.img}`} />
                </div>
            </section>
        </>
    );
}

export default ProductDetailsSection;
