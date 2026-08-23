import { ArrowRight } from "lucide-react";
import { useInView } from "../../hooks/useInView";
import styles from "./BannerShell.module.css";

export default function BannerShell({
  badgeIcon,
  badgeLabel,
  heading,
  headingLead,
  headingAccent,
  description,
  noteIcon,
  noteLabel,
  ctaLabel,
  onAction,
  secondaryLabel,
  secondaryIcon,
  onSecondaryAction,
  statItems,
  illustration,
  accentClass,
  ariaLabel,
}) {
  const [ref, inView] = useInView();

  return (
    <section
      ref={ref}
      className={`${styles.banner} ${accentClass} ${inView ? styles.inView : ""}`}
      aria-label={ariaLabel}
    >
      <div className={styles.illustration}>{illustration}</div>

      <div className={styles.content}>
        <span className={styles.badge}>
          {badgeIcon}
          {badgeLabel}
        </span>

        <h2 className={styles.heading}>
          {heading || (
            <>
              {headingLead} <span className={styles.headingAccent}>{headingAccent}</span>
            </>
          )}
        </h2>

        <p className={styles.description}>{description}</p>

        {noteLabel && (
          <span className={styles.note}>
            {noteIcon}
            {noteLabel}
          </span>
        )}

        <div className={styles.ctaRow}>
          <button type="button" className={styles.cta} onClick={onAction} aria-label={ctaLabel}>
            <span>{ctaLabel}</span>
            <ArrowRight size={18} className={styles.ctaArrow} aria-hidden="true" />
          </button>

          {secondaryLabel && (
            <button
              type="button"
              className={styles.secondaryCta}
              onClick={onSecondaryAction}
              aria-label={secondaryLabel}
            >
              {secondaryIcon}
              <span>{secondaryLabel}</span>
            </button>
          )}
        </div>

        {statItems && statItems.length > 0 && (
          <ul className={styles.statRow}>
            {statItems.map((item) => (
              <li key={item.label} className={styles.statItem}>
                {item.icon}
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
