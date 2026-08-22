import { ArrowRight } from "lucide-react";
import { useInView } from "../../hooks/useInView";
import styles from "./BannerShell.module.css";

export default function BannerShell({
  eyebrow,
  heading,
  description,
  rewardLabel,
  rewardIcon,
  ctaLabel,
  onAction,
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
        <span className={styles.eyebrow}>{eyebrow}</span>
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.description}>{description}</p>

        {rewardLabel && (
          <div className={styles.rewardPill}>
            {rewardIcon}
            <span>{rewardLabel}</span>
          </div>
        )}

        <button
          type="button"
          className={styles.cta}
          onClick={onAction}
          aria-label={ctaLabel}
        >
          <span>{ctaLabel}</span>
          <ArrowRight size={18} className={styles.ctaArrow} aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}
