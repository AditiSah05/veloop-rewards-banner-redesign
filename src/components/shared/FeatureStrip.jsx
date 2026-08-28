import styles from "./FeatureStrip.module.css";

export default function FeatureStrip({ items, accentClass, ariaLabel }) {
  return (
    <ul className={`${styles.strip} ${accentClass}`} aria-label={ariaLabel}>
      {items.map((item) => (
        <li key={item.title} className={styles.item}>
          <span className={styles.icon}>{item.icon}</span>
          <div>
            <p className={styles.title}>{item.title}</p>
            <p className={styles.subtitle}>{item.subtitle}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
