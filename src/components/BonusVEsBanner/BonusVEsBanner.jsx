import { Gift, ShieldCheck, Check } from "lucide-react";
import BannerShell from "../shared/BannerShell";
import chestImg from "../../assets/illustrations/bonus-chest-scene.webp";
import coinImg from "../../assets/illustrations/bonus-ves-coin.webp";
import styles from "./BonusVEsBanner.module.css";

const HEADING = (
  <>
    Get <span className={styles.gold}>Bonus VEs,</span> <span className={styles.violet}>Boost</span>{" "}
    Your Rewards!
  </>
);

const NOTE_LABEL = (
  <>
    BONUS APPROVED
    <span className={styles.checkBadge} aria-hidden="true">
      <Check size={11} strokeWidth={4} />
    </span>
  </>
);

function Scene() {
  return (
    <div className={styles.scene} role="img" aria-label="Your bonus balance of 3,250 VEs, next to an open treasure chest overflowing with glowing VEs coins beside a gift box">
      <div className={styles.balanceCard} aria-hidden="true">
        <img src={coinImg} alt="" className={styles.coinIcon} />
        <div>
          <p className={styles.balanceLabel}>Your Bonus Balance</p>
          <p className={styles.balanceValue}>
            3,250 <span>VEs</span>
          </p>
        </div>
      </div>
      <img src={chestImg} alt="" aria-hidden="true" className={styles.chestImg} />
    </div>
  );
}

export default function BonusVEsBanner({ onAction, onSecondaryAction }) {
  return (
    <BannerShell
      ariaLabel="Bonus VEs banner"
      accentClass={styles.accent}
      badgeIcon={<Gift size={13} aria-hidden="true" />}
      badgeLabel="Bonus VEs"
      heading={HEADING}
      description="Complete simple actions, join special events and unlock exciting bonus VEs every day!"
      noteIcon={<ShieldCheck size={14} aria-hidden="true" />}
      noteLabel={NOTE_LABEL}
      ctaLabel="Claim Bonus Now"
      onAction={onAction}
      secondaryLabel="How It Works"
      secondaryIcon={<ShieldCheck size={16} aria-hidden="true" />}
      onSecondaryAction={onSecondaryAction}
      illustration={<Scene />}
    />
  );
}
