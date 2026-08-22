import { Sparkles } from "lucide-react";
import BannerShell from "../shared/BannerShell";
import Illustration from "./Illustration";
import styles from "./BonusVEsBanner.module.css";

export default function BonusVEsBanner({ onAction }) {
  return (
    <BannerShell
      ariaLabel="Bonus VEs banner"
      accentClass={styles.accent}
      eyebrow="Bonus VEs"
      heading="Get Bonus VEs, Boost Your Rewards"
      description="Complete eligible activities and unlock additional VEs through special bonus opportunities."
      rewardLabel="2x bonus on select activities"
      rewardIcon={<Sparkles size={16} color="var(--gold-soft)" aria-hidden="true" />}
      ctaLabel="Claim Bonus"
      onAction={onAction}
      illustration={<Illustration />}
    />
  );
}
