import { Container } from "~honeycomb";
import { ReactNode } from "react";
import styles from "./PageLayout.module.css";
import clsx from "clsx";

export const PageLayout = ({
  children,
  classNameExtend,
}: {
  children: ReactNode;
  classNameExtend?: string;
}) => <div className={clsx([styles.layout, classNameExtend])}>{children}</div>;

export const PageHeader = ({
  children,
  classNameExtend,
}: {
  children: ReactNode;
  classNameExtend?: string;
}) => <header className={clsx([classNameExtend])}>{children}</header>;

export const PageMain = ({
  children,
  classNameExtend,
}: {
  children: ReactNode;
  classNameExtend?: string;
}) => (
  <main className={clsx([styles.main, classNameExtend])}>
    <Container>{children}</Container>
  </main>
);

PageLayout.Header = PageHeader;
PageLayout.Main = PageMain;
