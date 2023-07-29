import { VStack, Box, Heading, Divider } from "@chakra-ui/react";
import SectionProject from "../components/SectionProject";
import { useTranslation } from "react-i18next";
import projects from "../config/projects.json" assert { type: "json" };

const Projects = () => {
  const { t } = useTranslation();

  return (
    <Box width="100M">
      <Heading as="h3" fontSize={20} mb={4} variant="section-title">
        {t("projects")}
      </Heading>
      <Heading as="h4" variant="projects-title">
        {t("projects_page.title_intro")}
      </Heading>
      <Heading as="h4" variant="projects-info">
        {t("projects_page.intro")}
      </Heading>

      <Divider mb={2} />
      <VStack divider={<Divider mb={4} mt={4} />} spacing={1} align="stretch">
        {projects.map((project) => {
          return (
            <SectionProject key={project.title} project={project} delay={0.5}>
              {t("projects_page." + project.title)}
            </SectionProject>
          );
        })}
      </VStack>
    </Box>
  );
};

export default Projects;
