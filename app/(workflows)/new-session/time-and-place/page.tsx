"use client";

import React, { startTransition, useState } from "react";
import styles from "./time-and-place.module.css";
import { Button, TextField } from "~honeycomb";

import { DatePicker, TimePicker, TimeClock } from "@mui/x-date-pickers";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

export default function Page() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.container}>
          <h1 className={styles.title}> When is your next session?</h1>
          <form className={styles.timeAndDateForm}>
            <fieldset className={styles.fieldset}>
              <div className={styles.gameDate}>
                <label className={styles.label}>Date</label>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    className={styles.inputDT}
                    label="Select a date"
                    slotProps={{
                      textField: {
                        helperText: "MM/DD/YYYY",
                      },
                    }}
                  />
                </LocalizationProvider>
              </div>

              <div className={styles.gameTime}>
                <label className={styles.label}>Time</label>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <TimePicker
                    className={styles.inputDT}
                    label="Select a time"
                    slotProps={{
                      textField: {
                        helperText: "HH:MM AM/PM",
                      },
                    }}
                  />
                </LocalizationProvider>
              </div>
            </fieldset>
            <TextField
              label="Location"
              type="text"
              id="loc"
              name="loc"
              onChange={() => {}}
              placeholder="Enter a location"
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
