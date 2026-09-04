import { ArrowLeftRight, FileText, Zap, ShieldCheck, Coins, Crown } from "lucide-react";
import BannerShell from "../shared/BannerShell";
import FeatureStrip from "../shared/FeatureStrip";
import styles from "./SwapCenterBanner.module.css";

const STAT_ITEMS = [
  { icon: <ArrowLeftRight size={14} aria-hidden="true" />, label: "Easy Swap" },
  { icon: <ShieldCheck size={14} aria-hidden="true" />, label: "Secure" },
  { icon: <Coins size={14} aria-hidden="true" />, label: "In-Platform" },
];

const FEATURE_ITEMS = [
  { icon: <Zap size={17} aria-hidden="true" />, title: "Swap Instantly", subtitle: "Convert your VEs in just a few clicks." },
  { icon: <ArrowLeftRight size={17} aria-hidden="true" />, title: "VE ↔ SVE", subtitle: "Move between your in-platform currencies." },
  { icon: <ShieldCheck size={17} aria-hidden="true" />, title: "Safe & Trusted", subtitle: "Secured platform for all your transactions." },
  { icon: <Crown size={17} aria-hidden="true" />, title: "More Benefits", subtitle: "Better rewards, more happiness!" },
];

function SwapScene() {
  return (
    <div
      className={styles.scene}
      role="img"
      aria-label="A VE coin converting to an SVE coin through an in-platform swap"
    >
      <div className={`${styles.token} ${styles.veToken}`}>
        <span className={styles.tokenSymbol}>VE</span>
        <span className={styles.tokenLabel}>Your VEs</span>
      </div>
      <div className={styles.swapMark} aria-hidden="true">
        <ArrowLeftRight size={32} strokeWidth={1.8} />
        <span>IN PLATFORM</span>
      </div>
      <div className={`${styles.token} ${styles.sveToken}`}>
        <span className={styles.tokenSymbol}>SVE</span>
        <span className={styles.tokenLabel}>Get SVEs</span>
      </div>
    </div>
  );
}

export default function SwapCenterBanner({ onAction, onSecondaryAction }) {
  return (
    <div className="d-flex flex-column gap-3">
      <BannerShell
        ariaLabel="Swap center currency conversion banner"
        accentClass={styles.accent}
        badgeIcon={<ArrowLeftRight size={13} aria-hidden="true" />}
        badgeLabel="Swap Center"
        headingLead="Swap VE ↔ SVE,"
        headingAccent="Stay In Platform"
        description="Convert your VEs to SVEs and move value across the VELOOP ecosystem."
        statItems={STAT_ITEMS}
        ctaLabel="Go to Swap Center"
        onAction={onAction}
        secondaryLabel="How It Works"
        secondaryIcon={<FileText size={16} aria-hidden="true" />}
        onSecondaryAction={onSecondaryAction}
        illustration={<SwapScene />}
      />
      <FeatureStrip
        items={FEATURE_ITEMS}
        accentClass={styles.accent}
        ariaLabel="Why swap VEs on VELOOP"
      />
    </div>
  );
}
