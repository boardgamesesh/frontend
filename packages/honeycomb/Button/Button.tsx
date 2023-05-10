import { ReactNode } from "react";
import clsx from "clsx";
import styles from "./Button.module.css";

export const Button = ({
  children,
  intent,
  size,
  mood,
  type,
  onClick,
}: {
  children: ReactNode;
  onClick: () => void;
  intent?: string;
  size?: string;
  mood?: string;
  type?: "button" | "submit" | "reset";
}) => (
  <button
    type={type || "button"}
    onClick={onClick}
    className={clsx(styles.base, {
      [styles.secondary]: intent === "secondary",
      [styles.negative]: mood === "negative",
      [styles.small]: size === "small",
      [styles.large]: size === "large",
    })}
  >
    {children}
  </button>
);
