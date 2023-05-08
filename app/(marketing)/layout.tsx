import { List, Logo } from "~honeycomb";
import Link from "next/link";

import styles from "./marketing-layout.module.css";

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.pageWrapper}>
      <header>
        <div className={styles.contentWrapper}>
          <div className={styles.headerContent}>
            <Link href="/" className={styles.logoLink}>
              <Logo /> <span className={styles.logoText}>BoardgameSesh</span>
            </Link>
            <nav className={styles.nav}>
              <List horizontal alignY="centre" gap={16}>
                <li>
                  <Link
                    href="/#features"
                    className={styles.navLink}
                    scroll={false}
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/auth" className={styles.navLink}>
                    Login
                  </Link>
                </li>
                <li className={styles.callToAction}>
                  <Link href="/auth" className={styles.emphasis}>
                    Start sesh &rarr;
                  </Link>
                </li>
              </List>
            </nav>
          </div>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.contentWrapper}>{children}</div>
      </main>
      <footer className={styles.footer}>
        <div className={styles.contentWrapper}>
          <div className={styles.footerContent}>
            <div>Boardgamesesh &copy; 2023</div>
            <Link href="/terms-and-conditions" className={styles.link}>
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
