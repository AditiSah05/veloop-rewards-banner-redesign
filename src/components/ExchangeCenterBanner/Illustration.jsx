import { Wallet, ArrowRight } from "lucide-react";
import Float from "../shared/Float";
import StatCard from "../shared/StatCard";
import stage from "../shared/Stage.module.css";
import styles from "./ExchangeCenterBanner.module.css";

export default function Illustration() {
  return (
    <div className={stage.stage} role="img" aria-label="Wallet exchanging VEs for Amazon, Flipkart, Paytm and Google Play gift cards">
      <StatCard label="Your Balance" value="12.4K VEs" tone="blue" className={stage.top} />

      <div className={`${stage.node} ${stage.center} ${styles.walletNode}`}>
        <Wallet size={38} strokeWidth={1.75} color="#0f1120" />
      </div>

      <Float delay={0} duration={3.2} className={`${stage.node} ${stage.topRight} ${styles.brandNode}`}>
        <span>Amazon</span>
      </Float>

      <Float delay={0.5} duration={3.4} className={`${stage.node} ${stage.bottomRight} ${styles.brandNode}`}>
        <span>Flipkart</span>
      </Float>

      <Float delay={0.9} duration={3} className={`${stage.node} ${stage.bottomLeft} ${styles.brandNode}`}>
        <span>Paytm</span>
      </Float>

      <div className={`${stage.node} ${stage.topLeft} ${styles.brandNode}`} aria-hidden="true">
        <ArrowRight size={16} color="var(--purple)" />
      </div>
    </div>
  );
}
