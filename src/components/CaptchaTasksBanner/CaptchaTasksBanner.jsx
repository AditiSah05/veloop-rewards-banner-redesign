import { ShieldCheck, Gift, CheckCircle2 } from "lucide-react";
import BannerShell from "../shared/BannerShell";
import IllustrationImage from "../shared/IllustrationImage";
import captchaTasksImg from "../../assets/illustrations/captcha-tasks.webp";
import styles from "./CaptchaTasksBanner.module.css";

export default function CaptchaTasksBanner({ onAction, onSecondaryAction }) {
  return (
    <BannerShell
      ariaLabel="Captcha tasks banner"
      accentClass={styles.accent}
      badgeIcon={<ShieldCheck size={13} aria-hidden="true" />}
      badgeLabel="Captcha Tasks"
      headingLead="Complete Captcha,"
      headingAccent="Earn Rewards"
      description="Complete available captcha tasks accurately and earn rewards for eligible submissions."
      noteIcon={<CheckCircle2 size={14} aria-hidden="true" />}
      noteLabel="Secure & Verified"
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
  );
}
