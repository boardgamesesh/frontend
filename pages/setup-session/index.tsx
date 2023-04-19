import React, { HTMLAttributes, useState } from "react";
import styles from "./setup-session.module.css";

export default function Page() {
  return (
    <>

    {/* Some random change for deploying test... */}
      <div className={styles.container}>
        <h1 className={styles.title}> When is your next session?</h1>
        <form className={styles.form}>
          <div className={styles.gameDate}>
            <label htmlFor="session-date" className={styles.label}>
              Date
            </label>

            <fieldset className={styles.dateDetails}>
              <section>
                <input
                  type="text"
                  name="session-date"
                  id="session-day"
                  placeholder="day"
                  className={styles.dateInput}
                />
                <div aria-live="polite"> </div>
              </section>

              <svg height="35" width="20">
                <line
                  x1="15"
                  y1="0"
                  x2="0"
                  y2="45"
                  className={styles.dateSeparator}
                />
              </svg>

              <section>
                <input
                  type="text"
                  name="session-date"
                  id="session-day"
                  placeholder="month"
                  className={styles.dateInput}
                />
                <div aria-live="polite"> </div>
              </section>

              <svg height="35" width="20">
                <line
                  x1="15"
                  y1="0"
                  x2="0"
                  y2="45"
                  className={styles.dateSeparator}
                />
              </svg>

              <section>
                <input
                  type="text"
                  name="session-date"
                  id="session-day"
                  placeholder="year"
                  className={styles.dateInput}
                />
                <div aria-live="polite"> </div>
              </section>
            </fieldset>
          </div>

          <div className={styles.gameTime}>
            <label htmlFor="session-time" className={styles.label}>
              Time
            </label>

            <fieldset className={styles.timeDetails}>
              <section>
                <input
                  type="text"
                  id="session-time"
                  name="session-time"
                  className={styles.timeInput}
                  placeholder="hours"
                />
                <div aria-live="polite"> </div>
              </section>

              <svg height="35" width="10">
                <circle cx="5" cy="15" r="1.5" className={styles.timeDot} />
                <circle cx="5" cy="25" r="1.5" className={styles.timeDot} />
              </svg>

              <section>
                <input
                  type="text"
                  id="session-time"
                  name="session-time"
                  className={styles.timeInput}
                  placeholder="minutes"
                />
                <div aria-live="polite"> </div>
              </section>
            </fieldset>
          </div>

          <div className={styles.location}>
            <label htmlFor="session-location" className={styles.label}>
              Location
            </label>
            <section className={styles.time}>
              <input
                type="text"
                id="session-location"
                name="session-location"
                className={styles.locationInput}
              />
              <div aria-live="polite" />
            </section>
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
