import styles from "./SwapScene.module.css";

export default function SwapScene() {
  return (
    <div
      className={styles.scene}
      role="img"
      aria-label="Your 12,450 VEs balance swapping into SVEs at a live rate of 1 VE equals 0.9 SVE, with two currency cards linked by a rotating swap icon"
    >
      <svg viewBox="0 0 380 260" className={styles.svg} aria-hidden="true">
        <defs>
          <radialGradient id="swapGlow" cx="50%" cy="48%" r="60%">
            <stop offset="0%" stopColor="var(--blue-glow)" stopOpacity="0.22" />
            <stop offset="100%" stopColor="var(--blue-glow)" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="veCoinGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--gold-soft)" />
            <stop offset="100%" stopColor="var(--gold)" />
          </linearGradient>
          <linearGradient id="sveCoinGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--blue-soft)" />
            <stop offset="100%" stopColor="var(--purple)" />
          </linearGradient>
          <linearGradient id="swapArrowGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--blue-glow)" />
            <stop offset="100%" stopColor="var(--purple-glow)" />
          </linearGradient>
        </defs>

        <circle cx="190" cy="140" r="140" fill="url(#swapGlow)" />

        <g>
          <rect x="115" y="18" width="150" height="30" rx="15" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.14)" />
          <text x="190" y="38" textAnchor="middle" className={styles.rateText}>
            1 VE = 0.9 SVE
          </text>
        </g>

        <g>
          <rect x="22" y="88" width="118" height="118" rx="20" fill="var(--surface)" stroke="rgba(255,255,255,0.08)" />
          <circle cx="81" cy="140" r="34" fill="url(#veCoinGrad)" />
          <text x="81" y="147" textAnchor="middle" className={styles.coinLabelDark}>
            VEs
          </text>
          <text x="81" y="188" textAnchor="middle" className={styles.balanceText}>
            12,450
          </text>
        </g>

        <g>
          <rect x="240" y="88" width="118" height="118" rx="20" fill="var(--surface)" stroke="rgba(255,255,255,0.08)" />
          <circle cx="299" cy="140" r="34" fill="url(#sveCoinGrad)" />
          <text x="299" y="147" textAnchor="middle" className={styles.coinLabelLight}>
            SVEs
          </text>
          <text x="299" y="188" textAnchor="middle" className={styles.balanceText}>
            11,205
          </text>
        </g>

        <g className={styles.swapIcon} style={{ transformOrigin: "190px 140px" }}>
          <path d="M 160 122 A 40 40 0 0 1 220 122" fill="none" stroke="url(#swapArrowGrad)" strokeWidth="5" strokeLinecap="round" />
          <polygon points="220,122 209,113 209,130" fill="var(--purple-glow)" />
          <path d="M 220 158 A 40 40 0 0 1 160 158" fill="none" stroke="url(#swapArrowGrad)" strokeWidth="5" strokeLinecap="round" />
          <polygon points="160,158 171,167 171,150" fill="var(--blue-glow)" />
        </g>

        <circle cx="48" cy="55" r="3" fill="var(--purple-glow)" opacity="0.7" />
        <circle cx="336" cy="60" r="3" fill="var(--blue-glow)" opacity="0.7" />
        <circle cx="352" cy="222" r="2.5" fill="var(--gold-glow)" opacity="0.6" />
        <circle cx="28" cy="228" r="2.5" fill="var(--blue-soft)" opacity="0.6" />
      </svg>
    </div>
  );
}