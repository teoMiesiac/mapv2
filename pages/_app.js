import "../styles/globals.css";
import "../styles/contextMenu.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import { Layout } from "../components/layout/layout";
import { MapContextProvider } from "../context/mapContext";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <MapContextProvider>
          <Component {...pageProps} />
        </MapContextProvider>
      </Layout>
    </>
  );
}

export default MyApp;
