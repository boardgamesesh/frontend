import clsx from "clsx";
import { ReactNode } from "react";
import styles from "./List.module.css";

type ListProps = {
  children: ReactNode;
  className?: string;
  dividers?: boolean;
  horizontal?: boolean;
  alignX?: "centre";
  alignY?: "centre";
};

export const List = ({
  children,
  className,
  dividers,
  alignX,
  alignY,
  horizontal,
  ...attributes
}: ListProps) => (
  <ul
    className={clsx(
      styles.base,
      {
        [styles.dividers]: dividers,
        [styles.horizontal]: horizontal,
        [styles["align-x-centre"]]: alignX === "centre",
        [styles["align-y-centre"]]: alignY === "centre",
      },
      className
    )}
    {...attributes}
  >
    {children}
  </ul>
);
