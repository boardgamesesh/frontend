import type { Metadata } from "next";
import styles from "./landing-page.module.css";
import { Hero } from "~components";

export const metadata: Metadata = {
  title: "BoardgameSesh",
  description: "Organise your next boardgame session with ease.",
  openGraph: {
    images: ["/logomark.png"],
  },
};

export default function Page() {
  return (
    <>
      <Hero
        title="Bring everyone together."
        description={
          <>
            The best way to gather your friends under one roof to roll some
            dice, shuffle cards and put mini&apos;s on a board.
          </>
        }
        callToAction={{
          href: "/new-session/invite",
          text: <>Start sesh for free &rarr;</>,
        }}
      />
      <section>
        <h2 id="features" className={styles.sectionHeader}>
          Features
        </h2>
        <div className={styles.featureContainer}>
          <ul className={styles.columns}>
            <li className={styles.column}>
              <h3>📩 Invite</h3>
              <p>
                Whether you&apos;re setting up a sesh with one time only people
                or long time friends, you can invite them via email, usernames
                or an invite link.
              </p>
            </li>
            <li className={styles.column}>
              <h3>♻️ Save &amp; Repeat</h3>
              <p>
                Easily setup new or recurring sesh&apos;s, at the same location
                with different groups. With a click, you can reference any pass
                locations you&apos;ve played at!
              </p>
            </li>
            <li className={styles.column}>
              <h3>🎲 Fair game picking</h3>
              <p>
                Make sure everyone in your group get&apos;s an equal chance to
                pick the next game to play, even if they missed a sesh,
                we&apos;ll hold their place in line to pick a game when they
                next RSVP.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
