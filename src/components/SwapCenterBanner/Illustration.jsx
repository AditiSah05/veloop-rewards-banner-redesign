import { RefreshCw } from "lucide-react";
import Float from "../shared/Float";
import StatCard from "../shared/StatCard";
import stage from "../shared/Stage.module.css";
import styles from "./SwapCenterBanner.module.css";

export default function Illustration() {
  return (
    <div className={stage.stage} role="img" aria-label="VE and SVE currency cards converting into each other through a swap icon">
      <StatCard label="Your Balance" value="12.4K VEs" tone="blue" className={stage.top} />

      <div className={`${stage.node} ${stage.center} ${styles.hubNode}`}>
        <RefreshCw size={36} strokeWidth={1.75} color="#0f1120" className={styles.spin} />
      </div>

      <Float delay={0} duration={3.4} className={`${stage.node} ${stage.topLeft} ${styles.cardNode}`}>
        <span>VE</span>
      </Float>

      <Float delay={0.5} duration={3.6} className={`${stage.node} ${stage.bottomRight} ${styles.cardNode} ${styles.alt}`}>
        <span>SVE</span>
      </Float>
    </div>
  );
}
