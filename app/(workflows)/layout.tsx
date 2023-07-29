"use client";

import { ReactNode } from "react";
import { PageLayout } from "~honeycomb";

import styles from "./workflow-layout.module.css";
import { WorkflowHeader } from "~components";

export default function WorkflowLayout({ children }: { children: ReactNode }) {
  return (
    <PageLayout classNameExtend={styles.container}>
      <PageLayout.Header>
        <WorkflowHeader />
      </PageLayout.Header>
      <PageLayout.Main classNameExtend={styles.main}>
        {children}
      </PageLayout.Main>
      <PageLayout.Footer />
    </PageLayout>
  );
}
