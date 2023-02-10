import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/layouts/main";
import theme from "../libs/theme";
import Head from "next/head";
import "../i18n/config";

const WebSite = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Layout router={router}>
        <Head>
          <meta name="viewport" content="width=device-width" />
          <title>Corentin Roy - Homepage </title>
          <link rel="icon" href="/images/BigBoss.png" />
        </Head>

        <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  );
};

export default WebSite;
