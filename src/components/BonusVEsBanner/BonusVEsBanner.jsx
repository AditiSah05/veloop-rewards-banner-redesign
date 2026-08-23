import { Gift, ShieldCheck, CheckCircle2 } from "lucide-react";
import BannerShell from "../shared/BannerShell";
import IllustrationImage from "../shared/IllustrationImage";
import bonusVesImg from "../../assets/illustrations/bonus-ves.webp";
import styles from "./BonusVEsBanner.module.css";

const HEADING = (
  <>
    Get <span className={styles.gold}>Bonus VEs,</span> Boost Your{" "}
    <span className={styles.purple}>Rewards</span>
  </>
);

export default function BonusVEsBanner({ onAction, onSecondaryAction }) {
  return (
    <BannerShell
      ariaLabel="Bonus VEs banner"
      accentClass={styles.accent}
      badgeIcon={<Gift size={13} aria-hidden="true" />}
      badgeLabel="Bonus VEs"
      heading={HEADING}
      description="Complete eligible activities and unlock additional VEs through special bonus opportunities."
      noteIcon={<CheckCircle2 size={14} aria-hidden="true" />}
      noteLabel="Bonus Approved"
      ctaLabel="Claim Bonus Now"
      onAction={onAction}
      secondaryLabel="How It Works"
      secondaryIcon={<ShieldCheck size={16} aria-hidden="true" />}
      onSecondaryAction={onSecondaryAction}
      illustration={
        <IllustrationImage
          src={bonusVesImg}
          alt="A treasure chest opening with bonus VE coins spilling out, next to a 3,250 VE bonus balance card"
        />
      }
    />
  );
}
