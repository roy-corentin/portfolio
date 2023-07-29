import { Box, useColorModeValue } from "@chakra-ui/react";
import { AiFillPlayCircle } from "react-icons/ai";

export const PlayIconProject = ({ state = "none" }) => {
  const mobileStyle = { display: state, position: "absolute", left: "25%" };
  const style = { display: state, position: "absolute", left: "5%" };
  return (
    <Box display="flex">
      <AiFillPlayCircle color={useColorModeValue("black", "white")} fontSize={34} style={mobileStyle} />
    </Box>
  );
};
