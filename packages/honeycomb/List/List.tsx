import clsx from "clsx";
import { ReactNode } from "react";
import styles from "./List.module.css";

type ListProps = {
  children: ReactNode;
  classNameExtend?: string;
  dividers?: boolean;
  horizontal?: boolean;
  alignX?: "centre";
  alignY?: "centre";
  gap?: number;
};

export const List = ({
  children,
  classNameExtend,
  dividers,
  alignX,
  alignY,
  horizontal,
  gap = 8,
  ...attributes
}: ListProps) => {
  return (
    <ul
      className={clsx(
        styles.base,
        {
          [styles.dividers]: dividers,
          [styles.horizontal]: horizontal,
          [styles["align-x-centre"]]: alignX === "centre",
          [styles["align-y-centre"]]: alignY === "centre",
        },
        classNameExtend
      )}
      style={{ gap: `var(--space-${gap})` }}
      {...attributes}
    >
      {children}
    </ul>
  );
};
