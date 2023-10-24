import React, { InputHTMLAttributes } from "react";
import { useId, ChangeEvent, FC } from "react";
import clsx from "clsx";
import styles from "./TextField.module.css";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  type: "text" | "email";
  label: string;
  value: string;
  name: string;
  error?: boolean;
  disabled?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const TextField: FC<TextFieldProps> = ({
  type,
  label,
  value,
  name,
  error,
  disabled,
  onChange,
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
      {/* {error && <p className={styles.error}>Input field can't be empty!</p>} */}
    </div>
  );
};
