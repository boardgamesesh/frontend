// import Link from "next/link";
import React, { HTMLAttributes } from "react";
// import { Heading, Button, Input, Text, Label } from "../../packages/honeycomb";
import styles from "./session-onboarding.module.css";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className={styles.container}>
        <form>
          <h1 className={styles.title}>Who&apos;s invited?</h1>
          {/* Text/Header component*/}
          <div className={styles.invitesContainer}>
            <label htmlFor="email" className={styles.emailLabel}>
              Enter your friend&apos;s email address bellow
            </label>
            <div className={styles.enterEmail}>
              <input
                type="email"
                id="email"
                name="email"
                className={styles.emailInput}
              />
              {/* Could be an Input component since the app will contain more than one*/}
              <button className={styles.addButton} type="button">
                Add
              </button>
            </div>

            {/* Text component maybe  */}
          </div>

          <div className={styles.addedEmails}>
            {/* Text component maybe */}

            {/* These would be added dinamicaly. A scroll bar for this section would come in handy for cases where the list of emails ends up being rather long*/}
            <div className={styles.emailAdded}>
              Tywin@lanister.com
              <button
                className={styles.deleteEmail}
                aria-label="remove"
                type="button"
              >
                &times;
              </button>
            </div>
            <div className={styles.emailAdded}>
              averylongemail.address_here@email.com
              <button
                className={styles.deleteEmail}
                aria-label="remove"
                type="button"
              >
                &times;
              </button>
            </div>

            {/* Text component maybe */}
            <div className={styles.emailAdded}>
              madKing@lanister.com
              <button className={styles.deleteEmail} aria-label="remove">
                &times;
              </button>
            </div>
          </div>

          <div className={styles.actionButtons}>
            {/* Text component maybe */}
            <button className={styles.inviteButton} type="button">
              Invite friends
            </button>
            <button className={styles.copyButton} type="button">
              Copy invite link
            </button>
            <Link href="/dashboard" className={styles.skipStep}>
              Skip this step
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
