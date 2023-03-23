import React, { HTMLAttributes } from "react";
import clsx from "clsx";
import styles from "./Input.module.css";

type InputProps = {
  className?: string;
  type?: string;
  id?: string;
  placeholder?: string;
};

export const Input = ({
  className,
  type,
  id,
  ...attributes
}: InputProps) => (
  <input className={clsx(styles.base, className)} {...attributes} />
);
