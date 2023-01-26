import { Box, useColorModeValue } from "@chakra-ui/react";
import { AiFillPlayCircle } from "react-icons/ai";

export const PlayIconProject = ({ state = "none" }) => {
  return (
    <Box display={{ sm: "none", md: "inline" }}>
      <AiFillPlayCircle
        color={useColorModeValue("black", "white")}
        fontSize={34}
        style={{ display: state, position: "absolute", left: "5%" }}
      />
    </Box>
  );
};

export const PlayIconProjectMobile = ({ state = "none" }) => {
  return (
    <Box display={{ sm: "inline", md: "none" }}>
      <AiFillPlayCircle
        color={useColorModeValue("black", "white")}
        fontSize={34}
        style={{ display: state, position: "absolute", left: "35%" }}
      />
    </Box>
  );
};
