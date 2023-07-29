import { Box } from "@chakra-ui/react";
import ReactCountryFlag from "react-country-flag";

const FlagIcon = ({ locale }) => {
  const localeName = locale === "gb" ? "EN" : locale.toUpperCase();

  return (
    <Box fontSize="14px">
      <ReactCountryFlag countryCode={locale.toUpperCase()} svg style={{ marginRight: "12px" }} />
      {localeName}
    </Box>
  );
};

export default FlagIcon;
