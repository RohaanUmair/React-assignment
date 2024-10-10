import styles from "./footer.module.css";

function Footer() {
  return (
    <footer>
      <section className={styles.upper_sec}>
        <div className={styles.heading_Sec}>
          <h1 className={styles.heading}>Furniro.</h1>
          <p className={styles.under_heading}>
            400 University Drive Suite 200 Coral <br /> Gables, <br /> FL 33134
            USA
          </p>
        </div>

        <div className="links">
          <ul className={styles.links}>
            <li className={styles.sub_heading}>Links</li>
            <li className={styles.footer_text}>Home</li>
            <li className={styles.footer_text}>Shop</li>
            <li className={styles.footer_text}>About</li>
            <li className={styles.footer_text}>Contact</li>
          </ul>
        </div>

        <div className="help">
          <ul className={styles.help}>
            <li className={styles.sub_heading}>Help</li>
            <li className={styles.footer_text}>Payment Options</li>
            <li className={styles.footer_text}>Returns</li>
            <li className={styles.footer_text}>Privacy Policy</li>
          </ul>
        </div>

        <div className="newsletter">
          <p className={styles.sub_heading}>Newsletter</p>
          <div>
            <input type="email" placeholder="Enter Your Email Address" className={styles.email_input} />
            <button>Subscribe</button>
          </div>
        </div>
      </section>

      <section className={styles.lower_sec}>
        <p>2023 furino. All rights reserved</p>
      </section>
    </footer>
  );
}

export default Footer;
