import { List, ListProps } from "~honeycomb";
import clsx from "clsx";
import { Children, ReactNode } from "react";
import styles from "./Actions.module.css";

export type ActionPops = ListProps & {
  children: ReactNode;
  className?: string;
};

export const Actions = ({ children, className, ...props }: ActionPops) => (
  <List classNameExtend={clsx(styles.base, {}, className)} {...props}>
    {Children.map(children, (child) => (
      <li>{child}</li>
    ))}
  </List>
);
