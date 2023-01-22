import { ReactNode } from "react";
import styles from "./Container.module.css";
import clsx from "clsx";

export const Container = ({ children }: { children: ReactNode }) => (
  <div className={clsx(styles.base)}>{children}</div>
);
