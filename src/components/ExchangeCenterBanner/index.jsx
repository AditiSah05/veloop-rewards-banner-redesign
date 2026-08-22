import { Wallet } from "lucide-react";
import BannerShell from "../shared/BannerShell";
import Illustration from "./Illustration";
import styles from "./ExchangeCenterBanner.module.css";

export default function ExchangeCenterBanner({ onAction }) {
  return (
    <BannerShell
      ariaLabel="Exchange center rewards redemption banner"
      accentClass={styles.accent}
      eyebrow="Exchange Center"
      heading="Exchange Your VEs, Unlock Rewards"
      description="Explore available redemption options and exchange eligible VEs for supported gift cards and payout options."
      rewardLabel="Redeem VEs for Amazon, Flipkart, Paytm & more"
      rewardIcon={<Wallet size={16} color="var(--purple)" aria-hidden="true" />}
      ctaLabel="Open Exchange Center"
      onAction={onAction}
      illustration={<Illustration />}
    />
  );
}
