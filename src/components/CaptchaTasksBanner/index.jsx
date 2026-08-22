import { ShieldCheck } from "lucide-react";
import BannerShell from "../shared/BannerShell";
import Illustration from "./Illustration";
import styles from "./CaptchaTasksBanner.module.css";

export default function CaptchaTasksBanner({ onAction }) {
  return (
    <BannerShell
      ariaLabel="Captcha tasks banner"
      accentClass={styles.accent}
      eyebrow="Captcha Tasks"
      heading="Complete Captcha, Earn Rewards"
      description="Complete available captcha tasks accurately and earn rewards for eligible submissions — a task-based way to earn, not an ad."
      rewardLabel="Reward per verified task"
      rewardIcon={<ShieldCheck size={16} color="var(--teal)" aria-hidden="true" />}
      ctaLabel="Start Task"
      onAction={onAction}
      illustration={<Illustration />}
    />
  );
}
