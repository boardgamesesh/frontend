"use client";

import React, { startTransition, useState } from "react";
import styles from "./time-and-place.module.css";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

// import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DateField } from "@mui/x-date-pickers/DateField";

export default function Page() {
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
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker className={styles.datePicker}/>
                </LocalizationProvider>
              </div>

              <div className={styles.gameTime}>
                <label className={styles.label} htmlFor="time">
                  Time
                </label>
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
