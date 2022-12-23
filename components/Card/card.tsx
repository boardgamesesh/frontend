import { ReactNode } from "react";
import styles from "./Card.module.css";
import clsx from "clsx";

export const Card = ({
  children,
  variant,
  className,
}: {
  children: ReactNode;
  variant?: string;
  className?: string;
}) => (
  <div
    className={clsx(
      styles.base,
      {
        [styles.highlight]: variant === "highlight",
      },
      className
    )}
  >
    {children}
  </div>
);
