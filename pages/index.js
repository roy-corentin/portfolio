import { Button, Container, Box, Heading, Image, useColorModeValue } from "@chakra-ui/react";
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons"
import NextLink from "next/link"
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import { useTranslation } from 'react-i18next';

const Page = () => {
  const { t } = useTranslation()

  return (
    <Container>
      <Box borderRadius="lg" bg={useColorModeValue("blackAlpha.100", "whiteAlpha.200")} p={3} mb={6} align="center">
        {t("index.intro")}
      </Box>

      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Corentin Roy
          </Heading>
          <p>{t("index.aka")}</p>
        </Box>
        <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center">
          <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="full" src="/images/corentin.jpg" alt="Profile Image" />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          {t("index.projects")}
        </Heading>
        <Paragraph>
          {t("lorem_ipsum")}
        </Paragraph>

        <Box align="center" pt={8} my={4}>
          <NextLink href="/projects">
            <Button leftIcon={<ChevronRightIcon />} rightIcon={<ChevronLeftIcon />} colorScheme="teal">
              {t("index.button_portfolio")}
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  );
};

export default Page;
