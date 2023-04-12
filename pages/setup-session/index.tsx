import React, { HTMLAttributes, useState } from "react";
import styles from "./setup-session.module.css";

export default function Page() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}> When is your next session?</h1>
        <form className={styles.form}>
          <div className={styles.date} aria-live="polite">
            <label htmlFor="session-date" className={styles.label}>
              Enter the date bellow
            </label>
            <input
              type="text"
              name="session-date"
              id="session-date"
              placeholder="dd/mm/yyyy"
              className={styles.dateInput}
            />
          </div>

          <div className={styles.details}>
            <div className={styles.time} aria-live="polite">
              <label htmlFor="session-time" className={styles.label}>
                Time
              </label>
              <input
                type="text"
                id="session-time"
                name="session-time"
                className={styles.detailInput}
              />
            </div>

            <div className={styles.location} aria-live="polite">
              <label htmlFor="session-location" className={styles.label}>
                Location
              </label>
              <input
                type="text"
                id="session-location"
                name="session-location"
                className={styles.detailInput}
              />
            </div>
          </div>

          <button
            type="submit"
            id="setup-session"
            className={styles.setupBtn}
            onClick={(e) => e.preventDefault()}
          >
            Setup session
          </button>
        </form>
      </div>
    </>
  );
}
