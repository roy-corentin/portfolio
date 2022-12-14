import { VStack, Box, Heading, Divider } from "@chakra-ui/react";
import SectionProject from "../components/section_project";
import { useTranslation } from "react-i18next";
import projects from "../config/projects.json" assert { type: "json" };
import { CIcon, CSIcon, RubyIcon, UnityIcon, PythonIcon, CPPIcon, ReactIcon } from "../public/icons/icons";
import { cloneElement } from "react";

const Projects = () => {
  const icons = {
    c: <CIcon />,
    cs: <CSIcon />,
    ruby: <RubyIcon />,
    unity: <UnityIcon />,
    python: <PythonIcon />,
    cpp: <CPPIcon />,
    react: <ReactIcon />
  };
  const { t } = useTranslation();

  return (
    <Box width="100M">
      <Heading as="h3" fontSize={20} mb={4}>
        {t("projects")}
      </Heading>

      <VStack divider={<Divider />} spacing={1} align="stretch">
        {projects.map((project) => {
          const name = project.title;
          const title = name != undefined ? name.charAt(0).toUpperCase() + name.slice(1) : "";
          const project_icons =
            project["icons"] != undefined
              ? project["icons"].map((icon) => {
                  return cloneElement(icons[icon], { key: title + icon });
                })
              : undefined;
          const project_gif = project["gif"];
          const project_download = project["download"];
          const project_repo = project["repo"];

          return (
            <SectionProject
              key={title}
              title={title}
              img={name + ".png"}
              img_hvr={project_gif}
              icons={project_icons}
              delay={0.5}
              download={project_download}
              repo={project_repo}
            >
              {t("projects_page." + name)}
            </SectionProject>
          );
        })}
      </VStack>
    </Box>
  );
};

export default Projects;
