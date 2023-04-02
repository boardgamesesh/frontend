import { ReactNode } from "react";
import styles from "./Tabs.module.css";
import clsx from "clsx";
import { List } from "~honeycomb";

export const Tabs = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => <List>{children}</List>;
