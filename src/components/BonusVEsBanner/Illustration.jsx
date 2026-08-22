import { PackageOpen, Coins, Sparkles } from "lucide-react";
import Float from "../shared/Float";
import StatCard from "../shared/StatCard";
import stage from "../shared/Stage.module.css";
import styles from "./BonusVEsBanner.module.css";

export default function Illustration() {
  return (
    <div className={stage.stage} role="img" aria-label="Reward box opening with bonus VE coins and a 2x multiplier badge">
      <StatCard label="Bonus Balance" value="3,250 VEs" tone="gold" className={stage.top} />

      <div className={`${stage.node} ${stage.center} ${styles.boxNode}`}>
        <PackageOpen size={40} strokeWidth={1.75} color="#211705" />
      </div>

      <Float delay={0} duration={3.2} className={`${stage.node} ${stage.topLeft} ${styles.coinNode}`}>
        <Coins size={16} color="#211705" />
      </Float>

      <Float delay={0.7} duration={3.6} className={`${stage.node} ${stage.bottomLeft} ${styles.coinNode}`}>
        <Sparkles size={16} color="#211705" />
      </Float>

      <div className={`${stage.node} ${stage.bottomRight} ${styles.badgeNode}`}>x2</div>
    </div>
  );
}
