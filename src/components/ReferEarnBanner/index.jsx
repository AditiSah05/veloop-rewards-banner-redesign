import { Gift } from "lucide-react";
import BannerShell from "../shared/BannerShell";
import Illustration from "./Illustration";
import styles from "./ReferEarnBanner.module.css";

export default function ReferEarnBanner({ onAction }) {
  return (
    <BannerShell
      ariaLabel="Refer and earn rewards banner"
      accentClass={styles.accent}
      eyebrow="Referral Program"
      heading="Invite Friends. Earn Rewards."
      description="Invite your friends to VELOOP Rewards and unlock exciting rewards when they complete eligible activities."
      rewardLabel="You earn 500 VEs · friend gets 200 VEs"
      rewardIcon={<Gift size={16} color="var(--gold-soft)" aria-hidden="true" />}
      ctaLabel="Refer & Earn"
      onAction={onAction}
      illustration={<Illustration />}
    />
  );
}
