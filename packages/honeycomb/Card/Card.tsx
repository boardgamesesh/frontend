import { ReactNode } from "react";
import styles from "./Card.module.css";
import clsx from "clsx";

export const Card = ({
  children,
  variant,
  classNameExtend,
}: {
  children: ReactNode;
  variant?: "highlight" | "section";
  classNameExtend?: string;
}) => (
  <div
    className={clsx(
      styles.base,
      {
        [styles.highlight]: variant === "highlight",
        [styles.section]: variant === "section",
      },
      classNameExtend
    )}
  >
    {children}
  </div>
);
