"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { PageLayout } from "~honeycomb";

import styles from "./workflow-layout.module.css";

export default function WorkflowLayout({ children }: { children: ReactNode }) {
  return (
    <PageLayout>
      <PageLayout.Header>
        <Link href="/">BoardgameSesh</Link>
      </PageLayout.Header>
      <PageLayout.Main classNameExtend={styles.container}>
        {children}
      </PageLayout.Main>
    </PageLayout>
  );
}
