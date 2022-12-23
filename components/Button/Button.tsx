import { ReactNode } from "react";
import clsx from "clsx";
import styles from "./Button.module.css";

export const Button = ({
  children,
  intent,
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
      [styles.highlight]: intent === "highlight",
    })}
  >
    {children}
  </button>
);
