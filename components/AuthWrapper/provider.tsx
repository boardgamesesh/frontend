import { type FC } from 'react';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

interface AppWrapperProps {
  Component: FC;
  pageProps: {
    session?: Session;
    [key: string]: any;
  };
}

const AppWrapper: FC<AppWrapperProps> = ({ Component, pageProps: { session, ...restProps } }) => (
  <SessionProvider session={session}>
    <Component {...restProps} />
  </SessionProvider>
);

export default AppWrapper;
