import "@styles/globals.css";
import { AppProps } from "next/app";
import Head from "next/head";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
