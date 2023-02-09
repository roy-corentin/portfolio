import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Html, Main, NextScript } from "next/document";
import Head from "next/head";
import theme from "../libs/theme";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="viewport" content="width=device-width" />
          <title>Corentin Roy - Homepage </title>
          <link rel="icon" href="/images/BigBoss.png" />
        </Head>

        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
