import { List } from "~honeycomb";
import clsx from "clsx";
import { Children, ReactNode } from "react";
import styles from "./Actions.module.css";

export const Actions = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <List classNameExtend={clsx(styles.base, {}, className)}>
    {Children.map(children, (child) => (
      <li>{child}</li>
    ))}
  </List>
);
