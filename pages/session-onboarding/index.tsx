// import Link from "next/link";
import React, { HTMLAttributes } from "react";
// import { Heading, Button, Input, Text, Label } from "@honeycomb";
import styles from "./session-onboarding.module.css";

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
              <input
                type="email"
                id="email"
                name="email"
                className={styles.emailInput}
              />
            </label>

            {/* Could be an Input component since the app will contain more than one*/}
            <button className={styles.add} type="button">
              Add
            </button>
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
            <button className={styles.skipButton} type="button">
              Skip this step
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
