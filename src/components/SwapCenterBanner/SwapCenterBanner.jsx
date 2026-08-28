import { ArrowLeftRight, FileText, Zap, ShieldCheck, Gift, Crown } from "lucide-react";
import BannerShell from "../shared/BannerShell";
import IllustrationImage from "../shared/IllustrationImage";
import FeatureStrip from "../shared/FeatureStrip";
import swapCenterImg from "../../assets/illustrations/swap-center.webp";
import styles from "./SwapCenterBanner.module.css";

const STAT_ITEMS = [
  { icon: <ArrowLeftRight size={14} aria-hidden="true" />, label: "Easy Swap" },
  { icon: <ShieldCheck size={14} aria-hidden="true" />, label: "Secure" },
  { icon: <Gift size={14} aria-hidden="true" />, label: "Great Rewards" },
];

const FEATURE_ITEMS = [
  { icon: <Zap size={17} aria-hidden="true" />, title: "Swap Instantly", subtitle: "Convert your VEs in just a few clicks." },
  { icon: <Gift size={17} aria-hidden="true" />, title: "Amazing Vouchers", subtitle: "Redeem for shopping, recharge and more." },
  { icon: <ShieldCheck size={17} aria-hidden="true" />, title: "Safe & Trusted", subtitle: "Secured platform for all your transactions." },
  { icon: <Crown size={17} aria-hidden="true" />, title: "More Benefits", subtitle: "Better rewards, more happiness!" },
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
        headingAccent="Get Rewards"
        description="Swap your VEs and redeem amazing vouchers and prizes."
        statItems={STAT_ITEMS}
        ctaLabel="Go to Swap Center"
        onAction={onAction}
        secondaryLabel="How It Works"
        secondaryIcon={<FileText size={16} aria-hidden="true" />}
        onSecondaryAction={onSecondaryAction}
        illustration={
          <IllustrationImage
            src={swapCenterImg}
            alt="A VEs coin swapping into another VEs coin, redeemable as Amazon, Flipkart and Paytm vouchers"
          />
        }
      />
      <FeatureStrip
        items={FEATURE_ITEMS}
        accentClass={styles.accent}
        ariaLabel="Why swap VEs on VELOOP"
      />
    </div>
  );
}
