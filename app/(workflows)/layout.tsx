"use client";

import Link from "next/link";
import { ApolloProvider } from "@apollo/client";
import { ReactNode } from "react";
import { PageLayout } from "~honeycomb";
import apolloClient from "~lib/apollo";

import styles from "./workflow-layout.module.css";

export default function WorkflowLayout({ children }: { children: ReactNode }) {
  return (
    <PageLayout>
      <PageLayout.Header>
        <Link href="/">BoardgameSesh</Link>
      </PageLayout.Header>
      <PageLayout.Main classNameExtend={styles.container}>
        <ApolloProvider client={apolloClient}>
          {children}
        </ApolloProvider>
      </PageLayout.Main>
    </PageLayout>
  );
}
