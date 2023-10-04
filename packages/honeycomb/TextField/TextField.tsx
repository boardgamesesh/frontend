import React, { InputHTMLAttributes, LabelHTMLAttributes } from "react";
import clsx from "clsx";
import styles from "./TextField.module.css";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: "text" | "email";
  name?: string;
  label: string;
  onChange: () => void;
}

export const TextField = ({ name, type, label, ...props }: TextFieldProps) => (
  <>
    <label htmlFor={name} className={clsx(styles.base)}>
      {label}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      className={clsx(styles.base)}
      {...props}
    />
  </>
);
