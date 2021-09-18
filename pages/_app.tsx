import { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../components/Layout";

const TITLE = "Permzwitter";

const App = ({ Component, pageProps }: AppProps) => (
  <Layout title={TITLE}>
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      {/* <link rel="shortcut icon" href="/favicon.png" key="shortcutIcon" /> */}
      {/* <link rel="manifest" href="/manifest.json" /> */}
    </Head>
    <Component {...pageProps} />
  </Layout>
);

export default App;
