"use client";

import React, { HTMLAttributes, useState } from "react";
import styles from "./time-and-place.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Page() {
  const [date, setDate] = useState(new Date());
  const weekend = (date: any) => new Date() < date;

  return (
    <div className={styles.container}>
      <h1 className={styles.datePickerTitle}>
        Select a date and time for your session
      </h1>
      <form className={styles.datePickerForm}>
        <div className={styles.datePickerContainer}>
          <DatePicker
            className={styles.datePicker}
            calendarClassName={styles.calendar}
            selected={date}
            dateFormat="MMMM d, yyyy h:mmaa"
            calendarStartDay={1}
            showTimeSelect
            fixedHeight
            onChange={(date: any) => setDate(date)}
          />
          <button
            type="submit"
            id="setup-session"
            className={styles.setupBtn}
            onClick={(e) => e.preventDefault()}
          >
            Submit
          </button>
        </div>
      </form>

      {/* <div className={styles.container}>
        <h1 className={styles.title}> When is your next session?</h1>
        <form className={styles.form}>
          <div className={styles.gameDate}>
            <fieldset className={styles.dateDetails}>
              <legend className={styles.label}> Date </legend>
              <section>
                <label htmlFor="day"></label>
                <input
                  type="text"
                  name="day"
                  id="day"
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
                <label htmlFor="month"></label>
                <input
                  type="text"
                  name="month"
                  id="month"
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
                <label htmlFor="year"></label>
                <input
                  type="text"
                  name="year"
                  id="year"
                  placeholder="year"
                  className={styles.dateInput}
                />
                <div aria-live="polite"> </div>
              </section>
            </fieldset>
          </div>

          <div className={styles.gameTime}>
            <fieldset className={styles.timeDetails}>
              <legend className={styles.label}>Time</legend>
              <section>
                <label htmlFor="hours"></label>
                <input
                  type="text"
                  id="hours"
                  name="hours"
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
                <label htmlFor="minutes"></label>
                <input
                  type="text"
                  id="minutes"
                  name="minutes"
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
                id="location"
                name="location"
                className={styles.locationInput}
              />
              <div aria-live="polite"> </div>
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
      </div> */}
    </div>
  );
}
