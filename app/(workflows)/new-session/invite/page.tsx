"use client";

import { useState } from "react";
import styles from "./invite.module.css";
import Link from "next/link";
import clsx from "clsx";
import { Button, TextField } from "~honeycomb";

export default function Page() {
  const [email, setEmail] = useState<string>("");
  const [emails, setEmails] = useState<string[]>([]);
  const [focus, setFocus] = useState<boolean>(false);

  const addEmail = () => {
    // Validation can be improved or replaced with a library such as joi.dev
    const regExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (!email || !regExp.test(email)) {
      alert("Please enter a valid email");
    } else {
      if (emails.includes(email)) {
        alert("Email already added");
      } else {
        setEmail("");
        setEmails([...emails, email]);
      }
    }
  };

  return (
    <form
      onKeyDown={(e: { key: string; preventDefault: () => void }) => {
        if (e.key === "Enter") {
          e.preventDefault();
          addEmail();
        }
      }}
    >
      <h1 className={styles.title}>Who&apos;s invited?</h1>
      <div className={styles.invitesContainer}>
        <TextField
          type="email"
          id="email"
          name="email"
          label="Enter your friend's email address bellow"
          placeholder="mary.poppins@email.com"
          onChange={(e) => {
            setEmail(e.currentTarget.value);
          }}
          value={email}
        ></TextField>

        <Button
          id="add"
          type="button"
          onClick={() => {
            addEmail();
          }}
          size="small"
        >
          Add
        </Button>
      </div>

      {/* only render when there are emails */}
      {emails.length > 0 && (
        <ul className={styles.addedEmails}>
          {emails.map((email) => (
            <li className={styles.emailAdded} key={email}>
              {email}
              <button
                className={styles.deleteEmail}
                aria-label="remove"
                type="button"
                onClick={() => {
                  setEmails(emails.filter((em) => em !== email));
                }}
                onFocus={() => setFocus(true)}
              >
                &times;
              </button>
            </li>
          ))}
        </ul>
      )}
      <div className={styles.actionButtons}>
        <Button onClick={() => {}} type="submit">
          Invite friends
        </Button>
        <Button onClick={() => {}} type="button" intent="secondary">
          Copy invite link
        </Button>

        <Link href="/dashboard" className={styles.skipStep}>
          Skip this step
        </Link>
      </div>
    </form>
  );
}
