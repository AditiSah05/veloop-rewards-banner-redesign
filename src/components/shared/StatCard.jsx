import styles from "./StatCard.module.css";

export default function StatCard({ label, value, tone = "gold", className = "" }) {
  return (
    <div className={`${styles.card} ${styles[tone]} ${className}`}>
      <span className={styles.label}>{label}</span>
      <span className={styles.value}>{value}</span>
    </div>
  );
}
