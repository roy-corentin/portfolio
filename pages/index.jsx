import { ChevronLeftIcon, ChevronRightIcon, WarningTwoIcon } from "@chakra-ui/icons";
import { Box, Button, Container, HStack, Heading, Image, Link, Text, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";
import { useTranslation } from "react-i18next";
import Paragraph from "../components/Paragraph";
import Section from "../components/Section";
import { GithubIcon, LinkedinIcon } from "../public/icons/icons";

const Page = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Box borderRadius="lg" bg={useColorModeValue("blackAlpha.100", "whiteAlpha.200")} p={3} mb={6} align="center">
        {t("index.intro")}
      </Box>
      <Box borderRadius="lg" bg={useColorModeValue("darkorange", "orangered")} p={3} mb={6} align="center">
        <WarningTwoIcon />
        {t("index.research")}
        {/* <Text as={"b"}>{t("index.date")}</Text> */}
        <WarningTwoIcon />
      </Box>

      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Corentin Roy
          </Heading>
          <p>{t("index.aka")}</p>
        </Box>
        <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center">
          <Image
            borderColor={useColorModeValue("blackAlpha.800", "whiteAlpha.800")}
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/corentin.jpg"
            alt="Profile Image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          {t("index.profile")}
        </Heading>
        <Paragraph>{t("index.profile_text_1")}</Paragraph>
        <br />
        <Paragraph>{t("index.profile_text_2")}</Paragraph>
        <br />
        <Paragraph>{t("index.profile_text_3")}</Paragraph>
        <br />
        <Paragraph>{t("index.profile_text_4")}</Paragraph>
        <br />
        <br />
        <Paragraph>
          {t("index.profile_text_5")}
          <a
            style={{ textDecoration: "underline", color: "royalblue" }}
            href="mailto:corentin.roy02@laposte.net?subject=Business&&body=You are so great !"
            target="_blank"
          >
            corentin.roy02@laposte.net
          </a>
        </Paragraph>

        <Box align="center" pt={8} my={4}>
          <NextLink href="/projects">
            <Button leftIcon={<ChevronRightIcon />} rightIcon={<ChevronLeftIcon />} colorScheme="teal">
              {t("index.button_portfolio")}
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Box display={"flex"} justifyContent={"center"}>
        <HStack>
          <Link href={"https://www.linkedin.com/in/corentin-roy-a715922a"} isExternal>
            {" "}
            <LinkedinIcon boxSize={"2em"} />{" "}
          </Link>
          <Link href={"https://github.com/roy-corentin"} isExternal>
            {" "}
            <GithubIcon boxSize={"2.2em"} />{" "}
          </Link>
        </HStack>
      </Box>
    </Container>
  );
};

export default Page;
