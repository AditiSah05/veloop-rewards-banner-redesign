import styles from "./Float.module.css";

export default function Float({ children, delay = 0, duration = 3.2, distance = 8, className = "" }) {
  return (
    <div
      className={`${styles.float} ${className}`}
      style={{
        "--float-delay": `${delay}s`,
        "--float-duration": `${duration}s`,
        "--float-distance": `${distance}px`,
      }}
    >
      {children}
    </div>
  );
}
