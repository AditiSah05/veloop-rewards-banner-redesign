import { Users, Gift, ArrowRight, Zap, ShieldCheck, Trophy } from "lucide-react";
import { useInView } from "../../hooks/useInView";
import IllustrationImage from "../shared/IllustrationImage";
import referEarnImg from "../../assets/illustrations/refer-earn-new.png";
import styles from "./ReferEarnBanner.module.css";

const FEATURE_ITEMS = [
  { icon: <Zap size={19} aria-hidden="true" />, title: "Easy to Share", subtitle: "Share your link or code in just one click." },
  { icon: <Gift size={19} aria-hidden="true" />, title: "Instant Rewards", subtitle: "Earn VEs instantly when friends join." },
  { icon: <ShieldCheck size={19} aria-hidden="true" />, title: "100% Secure", subtitle: "Secure referrals and real reward tracking." },
  { icon: <Trophy size={19} aria-hidden="true" />, title: "Unlimited Earning", subtitle: "Invite more friends and earn more VEs." },
];

export default function ReferEarnBanner({ onAction, onSecondaryAction }) {
  const [ref, inView] = useInView();

  return (
    <section
      ref={ref}
      className={`${styles.banner} ${inView ? styles.inView : ""}`}
      aria-label="Refer and earn rewards banner"
    >
      <div className={styles.top}>
        <div className={styles.content}>
          <span className={styles.badge}>
            <Users size={13} aria-hidden="true" />
            Refer &amp; Earn
          </span>

          <h2 className={styles.heading}>
            Refer Friends, <span className={styles.headingAccent}>Earn Rewards</span>
          </h2>

          <p className={styles.description}>
            Invite your friends to VELOOP Rewards and earn exciting rewards together.
          </p>

          <div className={styles.ctaRow}>
            <button type="button" className={styles.cta} onClick={onAction} aria-label="Invite Now">
              <span>Invite Now</span>
              <ArrowRight size={18} className={styles.ctaArrow} aria-hidden="true" />
            </button>
            <button
              type="button"
              className={styles.secondaryCta}
              onClick={onSecondaryAction}
              aria-label="How It Works"
            >
              <Gift size={16} aria-hidden="true" />
              <span>How It Works</span>
            </button>
          </div>
        </div>

        <div className={styles.illustration}>
          <IllustrationImage
            src={referEarnImg}
            alt="Two friends sharing a referral code, unwrapping a gift box, earning 500 VEs for you and 200 VEs for your friend"
          />
        </div>
      </div>

      <ul className={styles.featureRow} aria-label="Why refer friends on VELOOP">
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
