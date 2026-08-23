import { ArrowLeftRight, FileText, Zap, ShieldCheck, Gift, Crown } from "lucide-react";
import BannerShell from "../shared/BannerShell";
import IllustrationImage from "../shared/IllustrationImage";
import swapCenterImg from "../../assets/illustrations/swap-center.webp";
import styles from "./SwapCenterBanner.module.css";

const STAT_ITEMS = [
  { icon: <Zap size={14} aria-hidden="true" />, label: "Swap Instantly" },
  { icon: <Gift size={14} aria-hidden="true" />, label: "Amazing Vouchers" },
  { icon: <ShieldCheck size={14} aria-hidden="true" />, label: "Safe & Trusted" },
  { icon: <Crown size={14} aria-hidden="true" />, label: "More Benefits" },
];

export default function SwapCenterBanner({ onAction, onSecondaryAction }) {
  return (
    <BannerShell
      ariaLabel="Swap center currency conversion banner"
      accentClass={styles.accent}
      badgeIcon={<ArrowLeftRight size={13} aria-hidden="true" />}
      badgeLabel="Swap Center"
      headingLead="Swap VEs,"
      headingAccent="Get Rewards"
      description="Swap your VEs and redeem amazing vouchers and prizes."
      ctaLabel="Go to Swap Center"
      onAction={onAction}
      secondaryLabel="How It Works"
      secondaryIcon={<FileText size={16} aria-hidden="true" />}
      onSecondaryAction={onSecondaryAction}
      statItems={STAT_ITEMS}
      illustration={
        <IllustrationImage
          src={swapCenterImg}
          alt="A VEs coin swapping into another VEs coin, redeemable as Amazon, Flipkart and Paytm vouchers"
        />
      }
    />
  );
}
