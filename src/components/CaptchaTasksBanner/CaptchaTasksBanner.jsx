import { ShieldCheck, Gift, Zap, Coins, Trophy } from "lucide-react";
import BannerShell from "../shared/BannerShell";
import IllustrationImage from "../shared/IllustrationImage";
import FeatureStrip from "../shared/FeatureStrip";
import captchaTasksImg from "../../assets/illustrations/captcha-tasks.webp";
import styles from "./CaptchaTasksBanner.module.css";

const STAT_ITEMS = [
  { icon: <ShieldCheck size={14} aria-hidden="true" />, label: "Secure & Verified" },
  { icon: <Zap size={14} aria-hidden="true" />, label: "Quick & Easy" },
  { icon: <Coins size={14} aria-hidden="true" />, label: "Instant Rewards" },
];

const FEATURE_ITEMS = [
  { icon: <ShieldCheck size={17} aria-hidden="true" />, title: "100% Human Tasks", subtitle: "Real captcha tasks completed by you." },
  { icon: <Coins size={17} aria-hidden="true" />, title: "Earn VEs", subtitle: "Get rewarded for every captcha you solve." },
  { icon: <Zap size={17} aria-hidden="true" />, title: "No Time Limit", subtitle: "Solve at your own pace, anytime, anywhere." },
  { icon: <ShieldCheck size={17} aria-hidden="true" />, title: "Safe & Trusted", subtitle: "Secure tasks for a better and safer experience." },
  { icon: <Trophy size={17} aria-hidden="true" />, title: "More Tasks, More Rewards", subtitle: "Keep solving and unlock exciting bonuses!" },
];

export default function CaptchaTasksBanner({ onAction, onSecondaryAction }) {
  return (
    <div className="d-flex flex-column gap-3">
      <BannerShell
        ariaLabel="Captcha tasks banner"
        accentClass={styles.accent}
        badgeIcon={<ShieldCheck size={13} aria-hidden="true" />}
        badgeLabel="Captcha Tasks"
        headingLead="Complete Captcha,"
        headingAccent="Earn Rewards"
        description="Solve captcha tasks, help secure the platform and earn VEs instantly."
        statItems={STAT_ITEMS}
        ctaLabel="Start Solving Now"
        onAction={onAction}
        secondaryLabel="View Rewards"
        secondaryIcon={<Gift size={16} aria-hidden="true" />}
        onSecondaryAction={onSecondaryAction}
        illustration={
          <IllustrationImage
            src={captchaTasksImg}
            alt="A captcha verification screen with a Verify and Earn button, secured by a shield checkmark and a lock, surrounded by VE coins"
          />
        }
      />
      <FeatureStrip
        items={FEATURE_ITEMS}
        accentClass={styles.accent}
        ariaLabel="Why solve captcha tasks on VELOOP"
      />
    </div>
  );
}
