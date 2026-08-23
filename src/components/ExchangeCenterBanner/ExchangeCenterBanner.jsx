import { Repeat, FileText, ShieldCheck } from "lucide-react";
import BannerShell from "../shared/BannerShell";
import IllustrationImage from "../shared/IllustrationImage";
import exchangeCenterImg from "../../assets/illustrations/exchange-center.webp";
import styles from "./ExchangeCenterBanner.module.css";

export default function ExchangeCenterBanner({ onAction, onSecondaryAction }) {
  return (
    <BannerShell
      ariaLabel="Exchange center rewards redemption banner"
      accentClass={styles.accent}
      badgeIcon={<Repeat size={13} aria-hidden="true" />}
      badgeLabel="Exchange Center"
      headingLead="Exchange Your VEs,"
      headingAccent="Unlock More Rewards"
      description="Use your VEs to exchange for amazing vouchers, gift cards and much more."
      noteIcon={<ShieldCheck size={14} aria-hidden="true" />}
      noteLabel="Secure & Safe"
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
  );
}
