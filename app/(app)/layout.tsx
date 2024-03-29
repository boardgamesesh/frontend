"use client";

import { ReactNode } from "react";
import { AppHeader } from "~components";
import { PageLayout } from "~honeycomb";
import styles from "./app-layout.module.css";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <PageLayout>
      <PageLayout.Header classNameExtend={styles.header}>
        <AppHeader />
      </PageLayout.Header>
      <PageLayout.Main>{children}</PageLayout.Main>
    </PageLayout>
  );
}
