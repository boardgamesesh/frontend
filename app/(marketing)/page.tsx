import Link from "next/link";
import type { Metadata } from "next";
import styles from "./marketing-layout.module.css";

export const metadata: Metadata = {
  title: "BoardgameSesh",
  description: "Organise your next boardgame session with ease.",
  openGraph: {
    images: ["/logomark.png"],
  },
};

export default function Page() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Bring everyone together.</h1>
        <p className={styles.heroText}>
          The best way to gather your friends under one roof
          <br />
          to roll some dice, shuffle cards and put mini&apos;s on a board.
        </p>
        <Link href="/new-session/invite" className={styles.heroCallToAction}>
          Start sesh &rarr;
        </Link>
      </div>
    </div>
  );
}
