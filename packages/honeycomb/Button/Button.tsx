import { ReactNode } from "react";
import clsx from "clsx";
import styles from "./Button.module.css";

export const Button = ({
  children,
  intent,
  size,
  mood,
  onClick,
}: {
  children: ReactNode;
  onClick: () => void;
  intent?: string;
  size?: string;
  mood?: string;
}) => (
  <button
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
