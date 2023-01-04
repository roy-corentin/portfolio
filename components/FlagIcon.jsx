import { Box } from "@chakra-ui/react";
import ReactCountryFlag from "react-country-flag";

const FlagIcon = ({ locale }) => {
  return (
    <Box fontSize="14px">
      <ReactCountryFlag countryCode={locale.toUpperCase()} svg style={{ marginRight: "12px" }} />
      {locale.toUpperCase()}
    </Box>
  )
}

export default FlagIcon
