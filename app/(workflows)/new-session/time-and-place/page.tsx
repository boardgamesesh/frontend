"use client";

import React, { startTransition, useState } from "react";
import styles from "./time-and-place.module.css";
import { Button } from "~honeycomb";

import { DatePicker, TimePicker } from "@mui/x-date-pickers";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { format } from "date-fns";

export default function Page() {
  const [value, setValue] = useState<Date | string | null>(new Date());
  
  return (
    <>
      <div className={styles.container}>
        <div className={styles.container}>
          <h1 className={styles.title}> When is your next session?</h1>
          <form className={styles.timeAndDateForm}>
            <fieldset className={styles.fieldset}>
              <div className={styles.gameDate}>
                <label className={styles.label}>
                  Date
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      className={styles.inputDT}
                      value={value}
                      onChange={(newValue) => setValue(newValue)}
                    />
                  </LocalizationProvider>
                </label>
              </div>

              <div className={styles.gameTime}>
                <label className={styles.label}>
                  Time
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <TimePicker
                      className={styles.inputDT}
                      value={value}
                      onChange={(newValue) => setValue(newValue)}
                    />
                  </LocalizationProvider>
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

            <Button onClick={() => {}} type="submit">
              {" "}
              Submit{" "}
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
