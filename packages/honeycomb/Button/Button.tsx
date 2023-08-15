import { ReactNode } from "react";
import clsx from "clsx";
import styles from "./Button.module.css";

export const Button = ({
  children,
  intent,
  size,
  mood,
  onClick,
  type
}: {
  children: ReactNode;
  onClick: () => void;
  intent?: string;
  size?: string;
  mood?: string;
  type?: "submit" | "button" | "reset"
}) => (
  <button
    onClick={onClick}
    className={clsx(styles.base, {
      [styles.secondary]: intent === "secondary",
      [styles.negative]: mood === "negative",
      [styles.small]: size === "small",
      [styles.large]: size === "large",
    })}
    type={type}
  >
    {children}
  </button>
);
