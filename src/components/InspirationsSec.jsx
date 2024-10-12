import { Link } from "react-router-dom";
import styles from "./inspirationsSec.module.css";

function InspirationsSec() {
  return (
    <div className={styles.inspirations_sec}>
      <div className={styles.left}>
        <h1>
          50+ Beautiful rooms <br /> inspiration
        </h1>
        <p>
          Our Designer already made a lot of beautiful <br /> prototipe of rooms
          that inspire you
        </p>
        <Link to={'/shop'}>
          <button>Explore More</button>
        </Link>
      </div>

      <div className={styles.right}>
        <img src="src/assets/inspiration-imgs/Rectangle 24.png" />
        <img src="src/assets/inspiration-imgs/Rectangle 25.png" />
      </div>
    </div>
  );
}

export default InspirationsSec;
