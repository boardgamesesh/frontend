"use client";

import { ReactNode } from "react";
import { Header } from "~components/Header";
import { PageLayout } from "~honeycomb";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <PageLayout>
      <PageLayout.Header>
        <Header />
      </PageLayout.Header>
      <PageLayout.Main>{children}</PageLayout.Main>
    </PageLayout>
  );
}
