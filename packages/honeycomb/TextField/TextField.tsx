import React, { InputHTMLAttributes, LabelHTMLAttributes } from "react";
import clsx from "clsx";
import styles from "./TextField.module.css";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: "text" | "email";
  name?: string;
  label: string;
  title?: string;
  field?: string;
  onChange: () => void;
}

export const TextField = ({
  name,
  type,
  label,
  title,
  field,
  ...props
}: TextFieldProps) => (
  <fieldset className={clsx(styles.base)}>
    <label
      htmlFor={name}
      className={clsx(styles.base, { [styles.locationLabel]: title === "locationLabel" })}
    >
      {label}
    </label>
    <input
      className={clsx(styles.base, {
        [styles.locationInput]: field === "locationInput",
      })}
      type={type}
      id={name}
      name={name}
      {...props}
    />
  </fieldset>
);
