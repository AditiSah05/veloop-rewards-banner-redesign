import styles from "./IllustrationImage.module.css";

export default function IllustrationImage({ src, alt }) {
  return (
    <div className={styles.wrap}>
      <img src={src} alt={alt} className={styles.img} loading="lazy" />
    </div>
  );
}
