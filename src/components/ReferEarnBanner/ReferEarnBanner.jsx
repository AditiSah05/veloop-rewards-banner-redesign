import { Users, Gift, Zap, ShieldCheck, Trophy } from "lucide-react";
import BannerShell from "../shared/BannerShell";
import IllustrationImage from "../shared/IllustrationImage";
import referEarnImg from "../../assets/illustrations/refer-earn.webp";
import styles from "./ReferEarnBanner.module.css";

const STAT_ITEMS = [
  { icon: <Zap size={14} aria-hidden="true" />, label: "Easy to Share" },
  { icon: <Gift size={14} aria-hidden="true" />, label: "Instant Rewards" },
  { icon: <ShieldCheck size={14} aria-hidden="true" />, label: "100% Secure" },
  { icon: <Trophy size={14} aria-hidden="true" />, label: "Unlimited Earning" },
];

export default function ReferEarnBanner({ onAction, onSecondaryAction }) {
  return (
    <BannerShell
      ariaLabel="Refer and earn rewards banner"
      accentClass={styles.accent}
      badgeIcon={<Users size={13} aria-hidden="true" />}
      badgeLabel="Refer & Earn"
      headingLead="Refer Friends,"
      headingAccent="Earn Rewards"
      description="Invite your friends to VELOOP Rewards and earn exciting rewards together."
      ctaLabel="Invite Now"
      onAction={onAction}
      secondaryLabel="How It Works"
      secondaryIcon={<Gift size={16} aria-hidden="true" />}
      onSecondaryAction={onSecondaryAction}
      statItems={STAT_ITEMS}
      illustration={
        <IllustrationImage
          src={referEarnImg}
          alt="Two friends sharing a referral code, unwrapping a gift box, earning 500 VEs for you and 200 VEs for your friend"
        />
      }
    />
  );
}
