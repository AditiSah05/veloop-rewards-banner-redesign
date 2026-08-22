import { Gift, User, Coins, Sparkles } from "lucide-react";
import Float from "../shared/Float";
import StatCard from "../shared/StatCard";
import stage from "../shared/Stage.module.css";
import styles from "./ReferEarnBanner.module.css";

export default function Illustration() {
  return (
    <div className={stage.stage} role="img" aria-label="Two friends sharing a gift box that unlocks reward coins">
      <StatCard label="You Earn" value="500 VEs" tone="gold" className={stage.top} />

      <div className={`${stage.node} ${stage.center} ${styles.giftNode}`}>
        <Gift size={40} strokeWidth={1.75} color="#211705" />
      </div>

      <Float delay={0} duration={3.4} className={`${stage.node} ${stage.topLeft} ${styles.userNode}`}>
        <User size={20} strokeWidth={2} color="#0f1120" />
      </Float>

      <Float delay={0.6} duration={3.8} className={`${stage.node} ${stage.bottomRight} ${styles.userNode}`}>
        <User size={20} strokeWidth={2} color="#0f1120" />
      </Float>

      <Float delay={0.3} duration={2.6} distance={6} className={`${stage.node} ${stage.topRight} ${styles.coinNode}`}>
        <Coins size={16} color="#211705" />
      </Float>

      <Float delay={1} duration={3} distance={6} className={`${stage.node} ${stage.bottomLeft} ${styles.coinNode}`}>
        <Sparkles size={16} color="#211705" />
      </Float>
    </div>
  );
}
