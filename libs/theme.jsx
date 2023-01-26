import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    body: {
      bg: mode("#ffffff", "#1a202c")(props)
    }
  })
};

const components = {
  Heading: {
    variants: {
      "section-title": {
        textDecoration: "underline",
        fontSize: 20,
        textDecorationColor: "#525252",
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      },
      "projects-title": {
        fontSize: 17,
        color: "#88ccca",
        fontWeight: "bold",
        marginBottom: 2
      },
      "projects-info": {
        fontSize: 17,
        fontWeight: "medium",
        marginBottom: 9
      }
    }
  },
  Link: {
    baseStyle: (props) => ({
      color: mode("#3d7aed", "#ff63c3")(props),
      txtUnderLineOffset: 3
    })
  }
};

const fonts = {
  heading: "'M Plus rounded 1c'"
};

const colors = {
  glassTeal: "#88ccca"
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true
};

const theme = extendTheme({
  config,
  styles,
  components,
  colors,
  fonts
});

export default theme;
