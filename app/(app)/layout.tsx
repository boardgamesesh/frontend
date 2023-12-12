import { auth } from '~auth';
import { ReactNode } from "react";
import { AppHeader } from "~components";
import { PageLayout } from "~honeycomb";
import styles from "./app-layout.module.css";
import { SessionProvider } from 'next-auth/react';

export default function AppLayout({ children }: { children: ReactNode }) {
  const session = auth();

  return (
    <>
      <SessionProvider session={session}>
        <PageLayout>
          <PageLayout.Header classNameExtend={styles.header}>
            <AppHeader />
          </PageLayout.Header>
          <PageLayout.Main>{children}</PageLayout.Main>
        </PageLayout>
      </SessionProvider>
    </>
  );
}
