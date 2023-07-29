import Head from "next/head";
import Navbar from "../Navbar";
import { Box, Container } from "@chakra-ui/react";

const Main = ({ children, router }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width" />
        <title>Corentin Roy - Homepage </title>
        <link rel="icon" href="/images/BigBoss.png" />
      </Head>
      <Box as="main" pb={8}>
        <Navbar path={router.asPath} />

        <Container maxW="container.md" pt={14}>
          {children}
        </Container>
      </Box>
    </>
  );
};

export default Main;
