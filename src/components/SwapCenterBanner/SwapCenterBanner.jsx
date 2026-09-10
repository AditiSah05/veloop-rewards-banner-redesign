import { ArrowLeftRight, FileText, ArrowRight, RefreshCw, Ticket, ShieldCheck, Crown } from "lucide-react";
import { useInView } from "../../hooks/useInView";
import IllustrationImage from "../shared/IllustrationImage";
import swapCenterImg from "../../assets/illustrations/swap-new.png";
import styles from "./SwapCenterBanner.module.css";

const FEATURE_ITEMS = [
  { icon: <RefreshCw size={19} aria-hidden="true" />, title: "Swap Instantly", subtitle: "Convert your VEs in just a few clicks." },
  { icon: <Ticket size={19} aria-hidden="true" />, title: "Amazing Vouchers", subtitle: "Redeem for shopping, recharge and more." },
  { icon: <ShieldCheck size={19} aria-hidden="true" />, title: "Safe & Trusted", subtitle: "Secured platform for all your transactions." },
  { icon: <Crown size={19} aria-hidden="true" />, title: "More Benefits", subtitle: "Better rewards, more happiness!" },
];

export default function SwapCenterBanner({ onAction, onSecondaryAction }) {
  const [ref, inView] = useInView();

  return (
    <section
      ref={ref}
      className={`${styles.banner} ${inView ? styles.inView : ""}`}
      aria-label="Swap center currency conversion banner"
    >
      <div className={styles.top}>
        <div className={styles.content}>
          <span className={styles.badge}>
            <ArrowLeftRight size={13} aria-hidden="true" />
            Swap Center
          </span>

          <h2 className={styles.heading}>
            Swap VEs, <span className={styles.headingAccent}>Get Rewards</span>
          </h2>

          <p className={styles.description}>
            Swap your VEs and redeem amazing vouchers and prizes.
          </p>

          <div className={styles.ctaRow}>
            <button type="button" className={styles.cta} onClick={onAction} aria-label="Go to Swap Center">
              <span>Go to Swap Center</span>
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
            src={swapCenterImg}
            alt="Your VEs balance of 12,450 swapping into Amazon, Flipkart and Paytm vouchers"
          />
        </div>
      </div>

      <ul className={styles.featureRow} aria-label="Why swap VEs on VELOOP">
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
