import { Repeat, FileText, ShieldCheck, Gift, Zap, Trophy, Star } from "lucide-react";
import BannerShell from "../shared/BannerShell";
import IllustrationImage from "../shared/IllustrationImage";
import FeatureStrip from "../shared/FeatureStrip";
import exchangeCenterImg from "../../assets/illustrations/exchange-center.webp";
import styles from "./ExchangeCenterBanner.module.css";

const STAT_ITEMS = [
  { icon: <Repeat size={14} aria-hidden="true" />, label: "Easy Exchange" },
  { icon: <ShieldCheck size={14} aria-hidden="true" />, label: "Secure & Safe" },
  { icon: <Gift size={14} aria-hidden="true" />, label: "Exciting Rewards" },
];

const FEATURE_ITEMS = [
  { icon: <Repeat size={17} aria-hidden="true" />, title: "Flexible Exchange", subtitle: "Wide range of options to match your needs." },
  { icon: <Zap size={17} aria-hidden="true" />, title: "Instant Processing", subtitle: "Quick exchange and faster rewards." },
  { icon: <ShieldCheck size={17} aria-hidden="true" />, title: "100% Secure", subtitle: "Protected transactions with full security." },
  { icon: <Trophy size={17} aria-hidden="true" />, title: "More Value", subtitle: "Get the best value for your VEs." },
  { icon: <Star size={17} aria-hidden="true" />, title: "Better Experience", subtitle: "Smooth, easy and rewarding journey." },
];

export default function ExchangeCenterBanner({ onAction, onSecondaryAction }) {
  return (
    <div className="d-flex flex-column gap-3">
      <BannerShell
        ariaLabel="Exchange center rewards redemption banner"
        accentClass={styles.accent}
        badgeIcon={<Repeat size={13} aria-hidden="true" />}
        badgeLabel="Exchange Center"
        headingLead="Exchange Your VEs,"
        headingAccent="Unlock More Rewards!"
        description="Use your VEs to exchange for amazing vouchers, crypto, gift cards and much more."
        statItems={STAT_ITEMS}
        ctaLabel="Go to Exchange Center"
        onAction={onAction}
        secondaryLabel="How It Works"
        secondaryIcon={<FileText size={16} aria-hidden="true" />}
        onSecondaryAction={onSecondaryAction}
        illustration={
          <IllustrationImage
            src={exchangeCenterImg}
            alt="A VEs coin exchanging into a treasure chest bursting with Amazon, Flipkart, Paytm and Google Play reward cards"
          />
        }
      />
      <FeatureStrip
        items={FEATURE_ITEMS}
        accentClass={styles.accent}
        ariaLabel="Why exchange VEs on VELOOP"
      />
    </div>
  );
}
