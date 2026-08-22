import ReferEarnBanner from "./components/ReferEarnBanner";
import SwapCenterBanner from "./components/SwapCenterBanner";
import BonusVEsBanner from "./components/BonusVEsBanner";
import CaptchaTasksBanner from "./components/CaptchaTasksBanner";
import ExchangeCenterBanner from "./components/ExchangeCenterBanner";
import styles from "./App.module.css";

const ROUTES = {
  refer: "/refer-earn",
  swap: "/swap-center",
  bonus: "/bonus-ves",
  captcha: "/captcha-tasks",
  exchange: "/exchange-center",
};

function goTo(route) {
  // eslint-disable-next-line no-console
  console.info(`Navigate → ${route}`);
}

function App() {
  return (
    <main className={`container ${styles.page}`}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>VELOOP Rewards</p>
        <h1 className={styles.title}>Earning &amp; Engagement</h1>
      </header>

      <div className="d-flex flex-column gap-4">
        <ReferEarnBanner onAction={() => goTo(ROUTES.refer)} />
        <SwapCenterBanner onAction={() => goTo(ROUTES.swap)} />
        <BonusVEsBanner onAction={() => goTo(ROUTES.bonus)} />
        <CaptchaTasksBanner onAction={() => goTo(ROUTES.captcha)} />
        <ExchangeCenterBanner onAction={() => goTo(ROUTES.exchange)} />
      </div>
    </main>
  );
}

export default App;
