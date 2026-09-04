import { ArrowLeftRight, FileText, Zap, ShieldCheck, TrendingUp, History } from "lucide-react";
import BannerShell from "../shared/BannerShell";
import FeatureStrip from "../shared/FeatureStrip";
import SwapScene from "./SwapScene";
import styles from "./SwapCenterBanner.module.css";

const STAT_ITEMS = [
  { icon: <ArrowLeftRight size={14} aria-hidden="true" />, label: "Instant Swap" },
  { icon: <TrendingUp size={14} aria-hidden="true" />, label: "Live Rate" },
  { icon: <ShieldCheck size={14} aria-hidden="true" />, label: "Secure" },
];

const FEATURE_ITEMS = [
  { icon: <Zap size={17} aria-hidden="true" />, title: "Swap Instantly", subtitle: "Convert your VEs in just a few clicks." },
  { icon: <TrendingUp size={17} aria-hidden="true" />, title: "Live Exchange Rate", subtitle: "Rates update in real time, always fair." },
  { icon: <ShieldCheck size={17} aria-hidden="true" />, title: "Safe & Trusted", subtitle: "Every conversion is secured and tracked." },
  { icon: <History size={17} aria-hidden="true" />, title: "Full Swap History", subtitle: "Review every conversion, anytime." },
];

export default function SwapCenterBanner({ onAction, onSecondaryAction }) {
  return (
    <div className="d-flex flex-column gap-3">
      <BannerShell
        ariaLabel="Swap center currency conversion banner"
        accentClass={styles.accent}
        badgeIcon={<ArrowLeftRight size={13} aria-hidden="true" />}
        badgeLabel="Swap Center"
        headingLead="Swap VEs,"
        headingAccent="Unlock SVEs"
        description="Convert your VEs into SVEs instantly at a live rate and put them to work across VELOOP."
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
