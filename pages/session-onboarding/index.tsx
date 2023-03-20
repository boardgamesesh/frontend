// import Link from "next/link";
import React, { HTMLAttributes } from "react";
// import { Heading, Button, Input, Text, Label } from "@honeycomb";

import styles from "./session-onboarding.module.css";

export default function Page() {
  return (
    <>
      <div className={styles.container}>
        <h3 className={styles.title}>Who's invited?</h3>
        {/* Text/Header component*/}
        <div className={styles.invitesContainer}>
          <input
            type="text"
            placeholder="Enter friend's email"
            className={styles.invites}
          />
          {/* Could be an Input component since the app will contain more than one*/}
          <button className={styles.add} type="submit">
            Add
          </button>
          {/* Text component maybe  */}
        </div>
        <div className={styles.addedEmails}>
          {/* Text component maybe */}
          <p className={styles.emailAdded}>
            Tywin@lanister.com <span className={styles.deleteEmail}> &#10005; </span> {/* Text component*/}
          </p>
          {/* Text component maybe */}
          <p className={styles.emailAdded}>
            madKing@lanister.com <span className={styles.deleteEmail}> &#10005; </span>
          </p>
        </div>

        <div className={styles.actionButtons}>
          {/* Text component maybe */}
          <button className={styles.inviteButton}>Invite friends</button>
          <button className={styles.copyButton}> Copy invite link </button>
          <button className={styles.skipButton}>Skip this step</button>
        </div>
      </div>
    </>
  );
}
