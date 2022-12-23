import "@styles/reset.css";
import "@styles/colours.css";
import { AppProps } from "next/app";
import Head from "next/head";

import { ApolloProvider } from "@apollo/client";
import client from "@lib/apollo";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Head>
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg" />
      </Head>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
