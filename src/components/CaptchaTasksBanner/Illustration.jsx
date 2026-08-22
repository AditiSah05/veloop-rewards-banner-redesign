import { ShieldCheck, CheckCircle2, KeyRound } from "lucide-react";
import Float from "../shared/Float";
import stage from "../shared/Stage.module.css";
import styles from "./CaptchaTasksBanner.module.css";

export default function Illustration() {
  return (
    <div className={stage.stage} role="img" aria-label="Verification shield confirming a completed captcha task and rewarding VE coins">
      <div className={`${stage.node} ${stage.center} ${styles.shieldNode}`}>
        <ShieldCheck size={40} strokeWidth={1.75} color="#0f1120" />
      </div>

      <Float delay={0} duration={2.8} className={`${stage.node} ${stage.topRight} ${styles.checkNode}`}>
        <CheckCircle2 size={18} color="#0f1120" />
      </Float>

      <Float delay={0.5} duration={3.4} className={`${stage.node} ${stage.bottomLeft} ${styles.checkNode}`}>
        <KeyRound size={16} color="#0f1120" />
      </Float>

      <Float delay={0.9} duration={3} distance={6} className={`${stage.node} ${stage.topLeft} ${styles.coinNode}`}>
        <span>VE</span>
      </Float>

      <Float delay={1.2} duration={3.2} distance={6} className={`${stage.node} ${stage.bottomRight} ${styles.coinNode}`}>
        <span>VE</span>
      </Float>
    </div>
  );
}
