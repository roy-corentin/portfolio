import { HStack, Box, Text, Image, Heading } from "@chakra-ui/react";
import { MotionDiv } from "./Section";
import { useState } from "react";
import { PlayIconProject, PlayIconProjectMobile } from "./PlayIconProject";
import DownloadLink from "./DownloadLink";
import RepoLink from "./RepoLink";

const Project = ({ children, title, img, img_hvr, icons = [], delay = 0, download = undefined, repo = undefined }) => {
  const [image, setImage] = useState(img);
  const playIconDefaultState = img_hvr === null ? "none" : "inline";
  const [playIconState, setPlayIconState] = useState(playIconDefaultState);

  if (img_hvr === null) {
    img_hvr = img;
  }

  return (
    <Box display={{ md: "flex" }} p={2} borderRadius={10}>
      <Box align="center" position="relative">
        <MotionDiv initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: delay }}>
          <PlayIconProject state={playIconState} />
          <PlayIconProjectMobile state={playIconState} />
          <Image
            borderRadius={10}
            maxWidth="200px"
            src={`/images/${image}`}
            alt="Demo Project"
            onMouseEnter={() => {
              setImage(img_hvr);
              setPlayIconState("none");
            }}
            onMouseOut={() => {
              setImage(img);
              setPlayIconState(playIconDefaultState);
            }}
            zIndex={1}
          />
        </MotionDiv>
      </Box>
      <Box ml={2}>
        <MotionDiv initial={{ x: 10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: delay }}>
          <HStack>
            <Heading key={title} as="h3" variant="section-title">
              {title}
            </Heading>
            {icons}
          </HStack>
          <Text> {children} </Text>
          <DownloadLink download={download} />
          <RepoLink repo={repo} />
        </MotionDiv>
      </Box>
    </Box>
  );
};

export default Project;
