import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

type AppWrapperProps = {
  Component: any;
  pageProps: {
    session?: Session;
    [key: string]: any;
  };
}

export const AppWrapper = ({ Component, pageProps: { session, ...restProps } }: AppWrapperProps) => (
  <SessionProvider session={session}>
    <Component {...restProps} />
  </SessionProvider>
);
