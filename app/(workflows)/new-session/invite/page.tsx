"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import styles from "./invite.module.css";
import Link from "next/link";
import { Button, TextField } from "~honeycomb";

export default function Page() {
  // Custom hooks for adding email
  const [email, setEmail] = useState<string>("");
  const [emails, setEmails] = useState<string[]>([]);

  const [error, setError] = useState<boolean>(false);
  const [message, setMessage] = useState<string>();

  // Custom hook for error messsage
  const useInput = (initialValue: string) => {
    const [value, setValue] = useState<string>(initialValue);
    const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
      setValue(e.target.value);

    return {
      value,
      error,
      onChange: handleChange,
      setError,
    };
  };

  const emailInput = useInput(`${email}`);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    validateInput(emailInput);
  };

  const validateInput = (input: {
    value: string;
    setError: (value: boolean) => void;
  }) => {
    if (!input.value.trim()) {
      input.setError(true);
    } else {
      input.setError(false);
    }
  };

  // Alert valid email
  const addEmail = () => {
    const regExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!email || !regExp.test(email)) {
      setError(true);
      setMessage("Please enter a valid email");
    } else {
      if (emails.includes(email)) {
        setError(true);
        setMessage("Email already added");
      } else {
        setError(false);
        setEmail("");
        setEmails([...emails, email]);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
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
          onChange={(e) => {
            setEmail(e.currentTarget.value);
          }}
          value={email}
          error={error}
          errorText={message}
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
