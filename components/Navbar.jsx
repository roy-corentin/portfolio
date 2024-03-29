import Logo from "./Logo";
import NextLink from "next/link";
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
  Divider
} from "@chakra-ui/react";
import { HamburgerIcon, ChevronDownIcon } from "@chakra-ui/icons";
import ThemeToggleButton from "./ThemeToggleButton";
import { useTranslation } from "react-i18next";
import FlagIcon from "./FlagIcon";
import ReactCountryFlag from "react-country-flag";

const LanguageItem = ({ t, i18n }) => {
  return (
    <>
      {t("language")}
      <ReactCountryFlag countryCode={i18n.language} style={{ marginLeft: "4px" }} />
      <ChevronDownIcon />
    </>
  );
};

const LinkItem = ({ href, path, children }) => {
  const active = path === href;
  const inativeColor = useColorModeValue("gray.600", "whiteAlpha.900");

  return (
    <NextLink href={href}>
      <Link p={2} bg={active ? "glassTeal" : undefined} color={active ? "#202023" : inativeColor}>
        {children}
      </Link>
    </NextLink>
  );
};

const Navbar = (props) => {
  const { path } = props;
  const { t, i18n } = useTranslation();

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#FBFBFA", "#1d2028")}
      style={{ backdropFilter: "blur(10px)" }}
      zIndex={1}
      {...props}
    >
      <Container display="flex" p={2} maxW="container.md" wrap="wrap" align="center" justify="space-between">
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            <Logo />
          </Heading>
        </Flex>

        <Flex
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, nmd: 0 }}
          gap={5}
        >
          <LinkItem href="/projects" path={path}>
            {t("projects")}
          </LinkItem>
          <Menu>
            <MenuButton variant="outline" aria-label="Languages">
              <LanguageItem t={t} i18n={i18n} />
            </MenuButton>
            <MenuList>
              <MenuItem
                key={"fr"}
                onClick={() => {
                  i18n.changeLanguage("fr");
                }}
              >
                <FlagIcon locale={"fr"} />
              </MenuItem>
              <MenuItem
                key={"gb"}
                onClick={() => {
                  i18n.changeLanguage("gb");
                }}
              >
                <FlagIcon locale={"gb"} />
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>

        <Box flex={1} align="right">
          <ThemeToggleButton />
          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu>
              <MenuButton as={IconButton} icon={<HamburgerIcon />} variant="outline" aria-label="Options" />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}> {t("about")} </MenuItem>
                </NextLink>
                <NextLink href="/projects" passHref>
                  <MenuItem as={Link}> {t("projects")} </MenuItem>
                </NextLink>
                <Divider />
                <MenuItem key={"fr"} onClick={() => i18n.changeLanguage("fr")}>
                  <FlagIcon locale={"fr"} />
                </MenuItem>
                <MenuItem key={"gb"} onClick={() => i18n.changeLanguage("gb")}>
                  <FlagIcon locale={"gb"} />
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
