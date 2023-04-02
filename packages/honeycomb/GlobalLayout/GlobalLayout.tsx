import { Container } from "~honeycomb";
import { ReactNode } from "react";
import styles from "./GlobalLayout.module.css";

export const GlobalLayout = ({ children }: { children: ReactNode }) => (
  <div className={styles.layout}>{children}</div>
);

export const GlobalHeader = ({ children }: { children: ReactNode }) => (
  <header>{children}</header>
);

export const GlobalMain = ({ children }: { children: ReactNode }) => (
  <main className={styles.main}>
    <Container>{children}</Container>
  </main>
);
