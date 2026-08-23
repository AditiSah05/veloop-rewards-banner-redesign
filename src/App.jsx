import ReferEarnBanner from "./components/ReferEarnBanner/ReferEarnBanner";
import SwapCenterBanner from "./components/SwapCenterBanner/SwapCenterBanner";
import BonusVEsBanner from "./components/BonusVEsBanner/BonusVEsBanner";
import CaptchaTasksBanner from "./components/CaptchaTasksBanner/CaptchaTasksBanner";
import ExchangeCenterBanner from "./components/ExchangeCenterBanner/ExchangeCenterBanner";
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
        <ReferEarnBanner onAction={() => goTo(ROUTES.refer)} onSecondaryAction={() => goTo(`${ROUTES.refer}/how-it-works`)} />
        <SwapCenterBanner onAction={() => goTo(ROUTES.swap)} onSecondaryAction={() => goTo(`${ROUTES.swap}/how-it-works`)} />
        <BonusVEsBanner onAction={() => goTo(ROUTES.bonus)} onSecondaryAction={() => goTo(`${ROUTES.bonus}/how-it-works`)} />
        <CaptchaTasksBanner onAction={() => goTo(ROUTES.captcha)} onSecondaryAction={() => goTo(`${ROUTES.captcha}/rewards`)} />
        <ExchangeCenterBanner onAction={() => goTo(ROUTES.exchange)} onSecondaryAction={() => goTo(`${ROUTES.exchange}/how-it-works`)} />
      </div>
    </main>
  );
}

export default App;
