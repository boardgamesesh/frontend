import clsx from "clsx";
import { ReactNode } from "react";
import styles from "./List.module.css";

export const List = ({
  children,
  className,
  dividers,
  ...attributes
}: {
  children: ReactNode;
  className?: string;
  dividers?: boolean;
}) => (
  <ul
    className={clsx(
      styles.base,
      {
        [styles.dividers]: dividers,
      },
      className
    )}
    {...attributes}
  >
    {children}
  </ul>
);
