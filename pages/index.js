import { Button, Container, Box, Heading, Image, useColorModeValue } from "@chakra-ui/react";
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons"
import NextLink from "next/link"
import Section from "../components/section"
import Paragraph from "../components/paragraph"

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")} p={3} mb={6} align="center">
        Hello I'm a student developer at Epitech Technology in Bordeaux 🇫🇷
      </Box>

      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Corentin Roy
          </Heading>
          <p>JilkoniX (Developer / Cinephile)</p>
        </Box>
        <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center">
          <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="full" src="/images/corentin.jpg" alt="Profile Image" />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Projects
        </Heading>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel scelerisque eros, vel scelerisque augue. Curabitur in dui arcu. Quisque pretium, neque ut pharetra semper, velit felis facilisis lacus, a tempus dui ex sed augue. Pellentesque aliquam tempus orci, eget aliquet mi molestie in. Fusce eros purus, maximus sed feugiat ac, posuere eu enim. In eu odio et felis maximus placerat. Praesent vitae nisi erat. Praesent egestas augue nec arcu varius facilisis. Mauris bibendum efficitur enim, sed semper erat scelerisque at.
        </Paragraph>

        <Box align="center" my={4}>
          <NextLink href="/projects">
            <Button leftIcon={<ChevronRightIcon />} rightIcon={<ChevronLeftIcon />} colorScheme="teal">
              My Portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

    </Container>
  );
};

export default Page;
