import styles from './productDetailsSection.module.css';
import { PiStarFill } from "react-icons/pi";
import { PiStarHalfFill } from "react-icons/pi";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";



function ProductDetailsSection({ setOpenSidebar }) {
    return (
        <>
        <section className={styles.upper_sec}>

            <div className={styles.product_imgs}>
                <div>
                    <img src="https://images.unsplash.com/photo-1506898667547-42e22a46e125?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8Mg%3D%3D" />
                    <img src="https://images.unsplash.com/photo-1506898667547-42e22a46e125?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8Mg%3D%3D" />
                    <img src="https://images.unsplash.com/photo-1506898667547-42e22a46e125?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8Mg%3D%3D" />
                    <img src="https://images.unsplash.com/photo-1506898667547-42e22a46e125?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8Mg%3D%3D" />
                </div>

                <img src="https://images.unsplash.com/photo-1506898667547-42e22a46e125?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8Mg%3D%3D" />
            </div>


            <div className={styles.main_details}>
                <h1 style={{ fontSize: 42, fontWeight: 400 }}>Asgaard sofa</h1>
                <h2 style={{ fontSize: 24, fontWeight: 500, color: '#9f9f9f' }}>Rs. 250,000.00</h2>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div>
                        <PiStarFill className={styles.star_icons} />
                        <PiStarFill className={styles.star_icons} />
                        <PiStarFill className={styles.star_icons} />
                        <PiStarFill className={styles.star_icons} />
                        <PiStarHalfFill className={styles.star_icons} />
                    </div>
                    <p style={{ display: 'flex', alignItems: 'center', fontSize: 13, fontWeight: 400, color: '#9f9f9f', borderLeft: '3px solid #9f9f9f', paddingLeft: 20, height: 30 }}>
                        5 Customer Review
                    </p>
                </div>

                <p style={{ fontSize: 13, fontWeight: 400, width: 500, lineHeight: 1.7 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut magni repudiandae voluptas voluptatem inventore fugiat quo iste excepturi magnam, nihil laboriosam quaerat, temporibus delectus reprehenderit, quasi vel eligendi.</p>

                <div style={{marginBottom: 10}}>
                    <h3 style={{marginBottom: 5}}>Size</h3>
                    <div className={styles.size_section}>
                        <button style={{ backgroundColor: '#b88e2f', color: 'white' }}>L</button>
                        <button>XL</button>
                        <button>XS</button>
                    </div>
                </div>

                <div style={{marginBottom: 10}}>
                    <h3 style={{marginBottom: 5}}>Color</h3>
                    <div style={{ display: 'flex', gap: 15 }}>
                        <div style={{ height: 30, width: 30, backgroundColor: '#816dfa', borderRadius: '50%' }}></div>
                        <div style={{ height: 30, width: 30, backgroundColor: '#000000', borderRadius: '50%' }}></div>
                        <div style={{ height: 30, width: 30, backgroundColor: '#b88e2f', borderRadius: '50%' }}></div>
                    </div>
                </div>

                <div style={{ display: 'flex', gap: 20 }}>
                    <div style={{ display: 'flex', width: 123, height: 64, justifyContent: 'space-between', alignItems: 'center', border: '1px solid #9f9f9f', paddingInline: 16, borderRadius: 10 }}>
                        <button style={{ fontSize: 18, fontWeight: 400, backgroundColor: 'transparent', border: 'none' }}>-</button>
                        <h4>1</h4>
                        <button style={{ fontSize: 18, fontWeight: 400, backgroundColor: 'transparent', border: 'none' }}>+</button>
                    </div>

                    <button className={styles.bottom_btns} onClick={() => setOpenSidebar(true)}>Add To Cart</button>

                    <button className={styles.bottom_btns}>+ Compare</button>
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
                        <p>: 
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
                <button style={{color: '#9f9f9f'}}>Additional Information</button>
                <button style={{color: '#9f9f9f'}}>Reviews [5]</button>
            </div>

            <div style={{width: 1026}}>
                <p style={{marginBottom: 30}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nesciunt accusamus tempore exercitationem in, fuga architecto explicabo harum facilis sunt?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quidem earum odio, tempore at impedit inventore explicabo quaerat in consectetur numquam deleniti ducimus, magni necessitatibus repellendus. A perspiciatis illo recusandae cum? Eius eaque eligendi corporis dolore quas et sunt vitae, magni molestiae rem quisquam, vel necessitatibus labore veniam nostrum nobis!</p>
            </div>

            <div style={{display: 'flex', gap: 30}}>
                <img src="https://images.unsplash.com/photo-1506898667547-42e22a46e125?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8Mg%3D%3D" />
                <img src="https://images.unsplash.com/photo-1506898667547-42e22a46e125?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8Mg%3D%3D" />
            </div>

        </section>
        </>
    )
}

export default ProductDetailsSection;