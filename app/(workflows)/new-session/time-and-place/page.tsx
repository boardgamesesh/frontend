"use client";

import React, { startTransition, useState } from "react";
import styles from "./time-and-place.module.css";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Page() {
  const [startDate, setDate] = useState(new Date());

  return (
    <>
      <div className={styles.container}>
        <div className={styles.container}>
          <h1 className={styles.title}> When is your next session?</h1>
          <form className={styles.timeAndDateForm}>
            <fieldset className={styles.fieldset}>
              <div className={styles.gameDate}>
                <label className={styles.label} htmlFor="date">
                  Date
                </label>
                <DatePicker
                  className={styles.datePicker}
                  calendarClassName="rasta-stripes"
                  showPopperArrow={false}
                  selected={startDate}
                  dateFormat="MMMM d, yyyy"
                  onChange={(date: any) => setDate(date)}
                  id="date"
                />
              </div>

              <div className={styles.gameTime}>
                <label className={styles.label} htmlFor="time">
                  Time
                </label>
                <DatePicker
                  className={styles.datePicker}
                  calendarClassName={styles.time}
                  selected={startDate}
                  onChange={(date: any) => setDate(date)}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={15}
                  timeCaption="Time"
                  placeholderText="Select a time"
                  showPopperArrow={false}
                  dateFormat="h:mm aa"
                  id="time"
                />
              </div>
            </fieldset>
            <fieldset className={styles.fieldset}>
              <div className={styles.location}>
                <label htmlFor="location" className={styles.label}>
                  Location
                </label>

                <input
                  type="text"
                  id="location"
                  name="location"
                  className={styles.locationInput}
                  placeholder="Enter a location"
                />
                <div aria-live="polite"> </div>
              </div>
            </fieldset>

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
      </div>
    </>
  );
}
