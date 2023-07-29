"use client";

import { ReactNode } from "react";
import { AppHeader } from "~components";
import { PageLayout } from "~honeycomb";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <PageLayout>
      <PageLayout.Header>
        <AppHeader />
      </PageLayout.Header>
      <PageLayout.Main>{children}</PageLayout.Main>
    </PageLayout>
  );
}
