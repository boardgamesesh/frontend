import { ReactNode } from "react";
import styles from "./Container.module.css";
import clsx from "clsx";

export const Container = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => <div className={clsx(styles.base, className)}>{children}</div>;
