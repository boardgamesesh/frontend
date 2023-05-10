"use client";

import { ReactNode } from "react";
import { ApolloProvider } from "@apollo/client";
import { Header } from "~components/AppHeader";
import { PageLayout } from "~honeycomb";
import apolloClient from "~lib/apollo";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <PageLayout>
      <PageLayout.Header>
        <Header />
      </PageLayout.Header>
      <PageLayout.Main>
        <ApolloProvider client={apolloClient}>
          {children}
        </ApolloProvider>
      </PageLayout.Main>
    </PageLayout>
  );
}
