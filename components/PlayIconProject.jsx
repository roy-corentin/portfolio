import { Box, useColorModeValue } from "@chakra-ui/react";
import { AiFillPlayCircle } from "react-icons/ai";

export const PlayIconProject = ({ state = "none" }) => {
  return (
    <>
      <Box display={{ base: "flex", md: "none" }}>
        <AiFillPlayCircle
          color={useColorModeValue("black", "white")}
          fontSize={34}
          style={{ display: state, position: "absolute", left: "25%" }}
        />
      </Box>
      <Box display={{ base: "none", md: "flex" }}>
        <AiFillPlayCircle
          color={useColorModeValue("black", "white")}
          fontSize={34}
          style={{ display: state, position: "absolute", left: "5%" }}
        />
      </Box>
    </>
  );
};
