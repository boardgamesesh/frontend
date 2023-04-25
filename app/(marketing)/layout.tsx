import { List, Logo } from "~honeycomb";
import Link from "next/link";

import styles from "./marketing-layout.module.css";

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header>
        <div className={styles.container}>
          <div className={styles.headerContent}>
            <Link href="/" className={styles.logoLink}>
              <Logo /> BoardgameSesh
            </Link>
            <nav>
              <List horizontal alignY="centre" gap={16}>
                <li>
                  <Link href="/#features" className={styles.navLink}>
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/auth" className={styles.navLink}>
                    Login
                  </Link>
                </li>
                <li>
                  <Link href="/auth" className={styles.navCallToAction}>
                    Start sesh &rarr;
                  </Link>
                </li>
              </List>
            </nav>
          </div>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.container}>{children}</div>
      </main>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerContent}>
            Boardgamesesh &copy; 2022
            <Link href="/terms-and-conditions" className={styles.link}>
              Terms &amp; Conditions
            </Link>
            <a
              href="https://netlify.com"
              target="_blank"
              rel="noreferrer noopener"
              className={styles.link}
            >
              Powered by Netlify
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
