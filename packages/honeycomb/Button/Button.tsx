import clsx from "clsx";
import styles from "./Button.module.css";
import React, {ReactNode, ButtonHTMLAttributes} from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  onClick: () => void;
  intent?: string;
  size?: string;
  mood?: string;
}

export const Button = ({
  children,
  intent,
  size,
  mood,
  ...props
}: ButtonProps) => (
  <button
    className={clsx(styles.base, {
      [styles.secondary]: intent === "secondary",
      [styles.negative]: mood === "negative",
      [styles.small]: size === "small",
      [styles.large]: size === "large",
    })}
    {...props}
  >
    {children}
  </button>
);
