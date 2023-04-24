import React, { HTMLAttributes, useState } from "react";
import styles from "./session-onboarding.module.css";
import Link from "next/link";
import clsx from "clsx";

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
    <>
      <div className={styles.container}>
        <form
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              addEmail();
            }
          }}
        >
          <h1 className={styles.title}>Who&apos;s invited?</h1>

          {/* Text/Header component*/}
          <div className={styles.invitesContainer}>
            <label htmlFor="email" className={styles.emailLabel}>
              Enter your friend&apos;s email address bellow
            </label>
            <div
              className={clsx(styles.enterEmail, {
                [styles.darkborder]: focus,
              })}
            >
              {/* Could be an Input component since the app will contain more than one*/}
              <input
                type="email"
                id="email"
                name="email"
                placeholder="mary.poppins@email.com"
                className={styles.emailInput}
                onChange={(e) => {
                  setEmail(e.currentTarget.value);
                }}
                value={email}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
              />
              <div aria-live="assertive" role="alert">
                {" "}
              </div>
              <button
                id="add"
                className={styles.addButton}
                type="button"
                onClick={() => {
                  addEmail();
                  setFocus(true);
                }}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
              >
                Add
              </button>
            </div>
          </div>

          {/* only render when there are emails */}
          {emails.length > 0 && (
            <ul className={styles.addedEmails}>
              {/* Text component maybe */}
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
            {/* Text component maybe */}
            <button className={styles.inviteButton} type="submit">
              Invite friends
            </button>
            <button className={styles.copyButton} type="button">
              Copy invite link
            </button>
            <Link href="/dashboard" className={styles.skipStep}>
              Skip this step
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
