import { ArrowLeftRight } from "lucide-react";
import BannerShell from "../shared/BannerShell";
import Illustration from "./Illustration";
import styles from "./SwapCenterBanner.module.css";

export default function SwapCenterBanner({ onAction }) {
  return (
    <BannerShell
      ariaLabel="Swap center currency conversion banner"
      accentClass={styles.accent}
      eyebrow="Swap Center"
      heading="Swap Your VEs, Get Rewards"
      description="Convert eligible reward balances between supported currencies and manage your rewards more efficiently."
      rewardLabel="Instant VE ↔ SVE conversion"
      rewardIcon={<ArrowLeftRight size={16} color="var(--blue-soft)" aria-hidden="true" />}
      ctaLabel="Open Swap Center"
      onAction={onAction}
      illustration={<Illustration />}
    />
  );
}
