import { Button, Center, Text, Container, Box, Heading, Image, useColorModeValue, Link, HStack } from "@chakra-ui/react";
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons"
import NextLink from "next/link"
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import { useTranslation } from 'react-i18next';
import { GithubIcon, LinkedinIcon } from "../public/icons/icons"

const Page = () => {
  const { t } = useTranslation()

  return (
    <Container>
      <Box borderRadius="lg" bg={useColorModeValue("blackAlpha.100", "whiteAlpha.200")} p={3} mb={6} align="center">
        {t("index.intro")}
        <br />
        {t("index.research")}
      </Box>

      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Corentin Roy
          </Heading>
          <p>{t("index.aka")}</p>
        </Box>
        <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center">
          <Image borderColor={useColorModeValue("blackAlpha.800", "whiteAlpha.800")} borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="full" src="/images/corentin.jpg" alt="Profile Image" />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          {t("index.profile")}
        </Heading>
        <Paragraph>
          {t("index.profile_text_1")}
        </Paragraph>
        <Paragraph>
          {t("index.profile_text_2")}
        </Paragraph>
        <Paragraph>
          {t("index.profile_text_3")}
        </Paragraph>
        <Paragraph>
          {t("index.profile_text_4")}
        </Paragraph>
        <Paragraph>
          {t("index.profile_text_5")}
          <Text as={'u'}>corentin.roy02@laposte.net</Text>
        </Paragraph>

        <Box align="center" pt={8} my={4}>
          <NextLink href="/projects">
            <Button leftIcon={<ChevronRightIcon />} rightIcon={<ChevronLeftIcon />} colorScheme="teal">
              {t("index.button_portfolio")}
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Box display={"flex"} justifyContent={"center"} >
        <HStack >
          <Link href={"https://www.linkedin.com/in/corentin-roy-a715922a/ "} isExternal> <LinkedinIcon boxSize={"2em"} /> </Link>
          <Link href={"https://github.com/roy-corentin"} isExternal> <GithubIcon boxSize={"2.2em"} /> </Link>
        </HStack>
      </Box>
    </Container >
  );
};

export default Page;
