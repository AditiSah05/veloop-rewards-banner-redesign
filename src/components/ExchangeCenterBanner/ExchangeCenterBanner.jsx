import { Repeat, FileText, ArrowRight, ShieldCheck, Gift, Zap, Trophy, Star } from "lucide-react";
import { useInView } from "../../hooks/useInView";
import IllustrationImage from "../shared/IllustrationImage";
import exchangeCenterImg from "../../assets/illustrations/exchange-center-new.webp";
import styles from "./ExchangeCenterBanner.module.css";

const STAT_ITEMS = [
  { icon: <Repeat size={14} aria-hidden="true" />, label: "Easy Exchange" },
  { icon: <ShieldCheck size={14} aria-hidden="true" />, label: "Secure & Safe" },
  { icon: <Gift size={14} aria-hidden="true" />, label: "Exciting Rewards" },
];

const FEATURE_ITEMS = [
  { icon: <Repeat size={19} aria-hidden="true" />, title: "Flexible Exchange", subtitle: "Wide range of options to match your needs." },
  { icon: <Zap size={19} aria-hidden="true" />, title: "Instant Processing", subtitle: "Quick exchange and faster rewards." },
  { icon: <ShieldCheck size={19} aria-hidden="true" />, title: "100% Secure", subtitle: "Protected transactions with full security." },
  { icon: <Trophy size={19} aria-hidden="true" />, title: "More Value", subtitle: "Get the best value for your VEs." },
  { icon: <Star size={19} aria-hidden="true" />, title: "Better Experience", subtitle: "Smooth, easy and rewarding journey." },
];

export default function ExchangeCenterBanner({ onAction, onSecondaryAction }) {
  const [ref, inView] = useInView();

  return (
    <section
      ref={ref}
      className={`${styles.banner} ${inView ? styles.inView : ""}`}
      aria-label="Exchange center rewards redemption banner"
    >
      <div className={styles.top}>
        <div className={styles.content}>
          <span className={styles.badge}>
            <Repeat size={13} aria-hidden="true" />
            Exchange Center
          </span>

          <h2 className={styles.heading}>
            Exchange Your VEs, <span className={styles.headingAccent}>Unlock More Rewards!</span>
          </h2>

          <p className={styles.description}>
            Use your VEs to exchange for amazing vouchers, crypto, gift cards and much more.
          </p>

          <ul className={styles.statRow}>
            {STAT_ITEMS.map((item) => (
              <li key={item.label} className={styles.statItem}>
                {item.icon}
                <span>{item.label}</span>
              </li>
            ))}
          </ul>

          <div className={styles.ctaRow}>
            <button type="button" className={styles.cta} onClick={onAction} aria-label="Go to Exchange Center">
              <span>Go to Exchange Center</span>
              <ArrowRight size={18} className={styles.ctaArrow} aria-hidden="true" />
            </button>
            <button
              type="button"
              className={styles.secondaryCta}
              onClick={onSecondaryAction}
              aria-label="How It Works"
            >
              <FileText size={16} aria-hidden="true" />
              <span>How It Works</span>
            </button>
          </div>
        </div>

        <div className={styles.illustration}>
          <IllustrationImage
            src={exchangeCenterImg}
            alt="A VEs coin exchanging into a treasure chest bursting with Amazon, Flipkart, Paytm and Google Play reward cards"
          />
        </div>
      </div>

      <ul className={styles.featureRow} aria-label="Why exchange VEs on VELOOP">
        {FEATURE_ITEMS.map((item) => (
          <li key={item.title} className={styles.featureItem}>
            <span className={styles.featureIcon}>{item.icon}</span>
            <div>
              <p className={styles.featureTitle}>{item.title}</p>
              <p className={styles.featureSubtitle}>{item.subtitle}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
