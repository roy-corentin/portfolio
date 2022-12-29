import { VStack, Text, Box, Heading, Divider } from "@chakra-ui/react"
import SectionProject from "../components/section_project"
import { useTranslation } from 'react-i18next';
import projects from "../config/projects.json" assert {type: 'json'};
import { CIcon, CSIcon, RubyIcon, UnityIcon, PythonIcon } from "../public/icons/icons"

const Projects = () => {
  const icons = { c: <CIcon />, cs: <CSIcon />, ruby: <RubyIcon />, unity: <UnityIcon />, python: <PythonIcon /> }
  const { t } = useTranslation()

  return (
    <Box width="100M">
      <Heading as="h3" fontSize={20} mb={4}>
        {t("projects")}
      </Heading>
      <VStack divider={<Divider />} spacing={1} align="stretch">
        {projects.map((project) => {
          const project_icons = project["icons"] != undefined ? project["icons"].map((icon) => { return icons[icon] }) : undefined

          return <SectionProject title={project["title"]} img={project["img"]} img_hvr={project["img_hvr"]} icons={project_icons} delay={0.5}>
            <Text>{t(project["text"])}</Text>
          </SectionProject>
        })}
      </VStack>
    </Box >
  )
}

export default Projects
