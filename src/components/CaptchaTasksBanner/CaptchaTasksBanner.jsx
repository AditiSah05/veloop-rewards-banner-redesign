import { ShieldCheck, Gift, ArrowRight, Zap, Coins, Trophy } from "lucide-react";
import { useInView } from "../../hooks/useInView";
import IllustrationImage from "../shared/IllustrationImage";
import captchaTasksImg from "../../assets/illustrations/captcha-tasks-new.webp";
import styles from "./CaptchaTasksBanner.module.css";

const STAT_ITEMS = [
  { icon: <ShieldCheck size={14} aria-hidden="true" />, label: "Secure & Verified" },
  { icon: <Zap size={14} aria-hidden="true" />, label: "Quick & Easy" },
  { icon: <Coins size={14} aria-hidden="true" />, label: "Instant Rewards" },
];

const FEATURE_ITEMS = [
  { icon: <ShieldCheck size={19} aria-hidden="true" />, title: "100% Human Tasks", subtitle: "Real captcha tasks completed by you." },
  { icon: <Coins size={19} aria-hidden="true" />, title: "Earn VEs", subtitle: "Get rewarded for every captcha you solve." },
  { icon: <Zap size={19} aria-hidden="true" />, title: "No Time Limit", subtitle: "Solve at your own pace, anytime, anywhere." },
  { icon: <ShieldCheck size={19} aria-hidden="true" />, title: "Safe & Trusted", subtitle: "Secure tasks for a better and safer experience." },
  { icon: <Trophy size={19} aria-hidden="true" />, title: "More Tasks, More Rewards", subtitle: "Keep solving and unlock exciting bonuses!" },
];

export default function CaptchaTasksBanner({ onAction, onSecondaryAction }) {
  const [ref, inView] = useInView();

  return (
    <section
      ref={ref}
      className={`${styles.banner} ${inView ? styles.inView : ""}`}
      aria-label="Captcha tasks banner"
    >
      <div className={styles.top}>
        <div className={styles.content}>
          <span className={styles.badge}>
            <ShieldCheck size={13} aria-hidden="true" />
            Captcha Tasks
          </span>

          <h2 className={styles.heading}>
            Complete Captcha, <span className={styles.headingAccent}>Earn Rewards</span>
          </h2>

          <p className={styles.description}>
            Solve captcha tasks, help secure the platform and earn VEs instantly.
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
            <button type="button" className={styles.cta} onClick={onAction} aria-label="Start Solving Now">
              <span>Start Solving Now</span>
              <ArrowRight size={18} className={styles.ctaArrow} aria-hidden="true" />
            </button>
            <button
              type="button"
              className={styles.secondaryCta}
              onClick={onSecondaryAction}
              aria-label="View Rewards"
            >
              <Gift size={16} aria-hidden="true" />
              <span>View Rewards</span>
            </button>
          </div>
        </div>

        <div className={styles.illustration}>
          <IllustrationImage
            src={captchaTasksImg}
            alt="A captcha verification screen with a Verify and Earn button, secured by a shield checkmark and a lock, surrounded by VE coins"
          />
        </div>
      </div>

      <ul className={styles.featureRow} aria-label="Why solve captcha tasks on VELOOP">
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
