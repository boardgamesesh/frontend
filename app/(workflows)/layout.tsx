"use client";

import { ReactNode } from "react";
import { PageLayout } from "~honeycomb";

import styles from "./workflow-layout.module.css";
import { WorkflowHeader } from "~components";

export default function WorkflowLayout({ children }: { children: ReactNode }) {
  return (
    <PageLayout>
      <PageLayout.Header>
        <WorkflowHeader />
      </PageLayout.Header>
      <PageLayout.Main classNameExtend={styles.container}>
        {children}
      </PageLayout.Main>
    </PageLayout>
  );
}
