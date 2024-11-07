import styles from "./shareSection.module.css";

function ShareSection() {
  return (
    <div className={styles.share_sec}>
      <p>Share your setup with</p>
      <h1>#FurniroFurniture</h1>
      <img src="/assets/share-images.webp" />
    </div>
  )
}

export default ShareSection;