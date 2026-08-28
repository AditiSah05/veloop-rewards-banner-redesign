import { Users, Gift, Zap, ShieldCheck, Trophy } from "lucide-react";
import BannerShell from "../shared/BannerShell";
import IllustrationImage from "../shared/IllustrationImage";
import FeatureStrip from "../shared/FeatureStrip";
import referEarnImg from "../../assets/illustrations/refer-earn.webp";
import styles from "./ReferEarnBanner.module.css";

const FEATURE_ITEMS = [
  { icon: <Zap size={17} aria-hidden="true" />, title: "Easy to Share", subtitle: "Share your link or code in just one click." },
  { icon: <Gift size={17} aria-hidden="true" />, title: "Instant Rewards", subtitle: "Earn VEs instantly when friends join." },
  { icon: <ShieldCheck size={17} aria-hidden="true" />, title: "100% Secure", subtitle: "Secure referrals and real reward tracking." },
  { icon: <Trophy size={17} aria-hidden="true" />, title: "Unlimited Earning", subtitle: "Invite more friends and earn more VEs." },
];

export default function ReferEarnBanner({ onAction, onSecondaryAction }) {
  return (
    <div className="d-flex flex-column gap-3">
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
        illustration={
          <IllustrationImage
            src={referEarnImg}
            alt="Two friends sharing a referral code, unwrapping a gift box, earning 500 VEs for you and 200 VEs for your friend"
          />
        }
      />
      <FeatureStrip
        items={FEATURE_ITEMS}
        accentClass={styles.accent}
        ariaLabel="Why refer friends on VELOOP"
      />
    </div>
  );
}
