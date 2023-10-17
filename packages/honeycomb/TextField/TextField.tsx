import React, { InputHTMLAttributes, LabelHTMLAttributes } from "react";
import { useId } from "react";
import clsx from "clsx";
import styles from "./TextField.module.css";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: "text" | "email";
  name?: string;
  label: string;
  onChange: () => void;
}

export const TextField = ({ name, type, label, ...props }: TextFieldProps) => {
  const id = useId();

  return (
    <div className={clsx(styles.base)}>
      <label htmlFor={id} className={clsx(styles.label)}>
        {label}
      </label>
      <input
        className={clsx(styles.input)}
        type={type}
        aria-describedby={id}
        id={id}
        name={name}
        {...props}
      />
    </div>
  );
};
