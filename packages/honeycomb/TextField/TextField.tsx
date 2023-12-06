import React, { InputHTMLAttributes } from "react";
import { useId, ChangeEvent } from "react";
import clsx from "clsx";
import styles from "./TextField.module.css";


interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: "text" | "email" | "password";
  label?: string;
  value?: string;
  name?: string;
  error?: boolean;
  errorText?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
export type { TextFieldProps };

export const TextField = ({
  type,
  label,
  value,
  name,
  error,
  onChange,
  errorText,
  ...props
}: TextFieldProps) => {
  const id = useId();

  return (
    <div className={clsx(styles.inputWrapper)}>
      <label htmlFor={id} className={clsx(styles.label)}>
        {label}
      </label>
      <input
        className={clsx(styles.input)}
        type={type}
        aria-describedby={id}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        {...props}
      />
      {error && <p className={styles.error}>{errorText}</p>}
    </div>
  );
};
