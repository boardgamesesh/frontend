import { ReactNode } from "react";
import clsx from "clsx";
import styles from "./Label.module.css";

export type LabelProps = {
  children: ReactNode;
  for?: string;
  className?: string;
  size?: "32";
};

export const Label = ({ ...attributes }: LabelProps) => (
  <label
    className={clsx(
      styles.base,
      attributes.className
    )}
    {...attributes}
  ></label>
);
