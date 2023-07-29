import { HStack, Box, Text, Image, Heading } from "@chakra-ui/react";
import { MotionDiv } from "./Section";
import { useState } from "react";
import { PlayIconProject } from "./PlayIconProject";
import { CIcon, CSIcon, RubyIcon, UnityIcon, PythonIcon, CPPIcon, ReactIcon } from "../public/icons/icons";
import { cloneElement } from "react";
import DownloadLink from "./DownloadLink";
import RepoLink from "./RepoLink";

const Project = ({ children, project, delay }) => {
  const [image, setImage] = useState(project.img);
  const playIconDefaultState = project.img === project.imgHvr ? "none" : "inline";
  const [playIconState, setPlayIconState] = useState(playIconDefaultState);
  const icons = {
    c: <CIcon />,
    cs: <CSIcon />,
    ruby: <RubyIcon />,
    unity: <UnityIcon />,
    python: <PythonIcon />,
    cpp: <CPPIcon />,
    react: <ReactIcon />
  };

  return (
    <Box display={{ md: "flex" }} p={2} borderRadius={10}>
      <Box align="center" position="relative">
        <MotionDiv
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: delay }}
        >
          <PlayIconProject state={playIconState} />
          <Image
            borderRadius={10}
            maxWidth="200px"
            src={`/images/${image}`}
            alt="Demo Project"
            onMouseEnter={() => {
              setImage(project.imgHvr);
              setPlayIconState("none");
            }}
            onMouseOut={() => {
              setImage(project.img);
              setPlayIconState(playIconDefaultState);
            }}
          />
        </MotionDiv>
      </Box>
      <Box ml={2}>
        <MotionDiv
          initial={{ x: 10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: delay }}
        >
          <HStack>
            <Heading key={project.title} as="h3" variant="section-title">
              {project.title}
            </Heading>
            {project.icons.map((icon) => cloneElement(icons[icon], { key: project.title + icon }))}
          </HStack>
          <Text> {children} </Text>
          <DownloadLink download={project.download} />
          <RepoLink repo={project.repo} />
        </MotionDiv>
      </Box>
    </Box>
  );
};

export default Project;
