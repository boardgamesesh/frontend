"use client";

import React, { startTransition, useState } from "react";
import styles from "./time-and-place.module.css";
import { Button, TextField } from "~honeycomb";

import { DatePicker, TimePicker } from "@mui/x-date-pickers";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";
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
                      inputRef={Date}
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
                      viewRenderers={{
                        hours: renderTimeViewClock,
                        minutes: renderTimeViewClock,
                        seconds: renderTimeViewClock,
                      }}
                    />
                  </LocalizationProvider>
                </label>
              </div>
            </fieldset>
            <TextField
              label="Location"
              type="text"
              name="location"
              onChange={() => {}}
              placeholder="Enter a location"
              value=""
            ></TextField>
            <Button onClick={() => {}} type="submit">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
