import { List } from "honeycomb-design-system/List";
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
  <List className={clsx(styles.base, {}, className)}>
    {Children.map(children, (child) => (
      <li>{child}</li>
    ))}
  </List>
);
