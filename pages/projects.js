import { VStack, Container, Text, Box, Heading, SimpleGrid, Divider } from "@chakra-ui/react"
import RubyIcon from "../public/icons/ruby"
import CIcon from "../public/icons/c"
import UnityIcon from "../public/icons/unity"
import PythonIcon from "../public/icons/python"
import SectionProject from "../components/section_project"
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation()

  return (
    <Box width="100M">
      <Heading as="h3" fontSize={20} mb={4}>
        {t("projects")}
      </Heading>
      <VStack divider={<Divider />} spacing={1} align="stretch">
        <SectionProject title="Blue" img="blue.png" img_hvr="blue.gif" icons={[<UnityIcon />, <CIcon />]} delay={0.5}>
          <Text>{t("projects_page.blue")}</Text>
        </SectionProject>
        <SectionProject title="Elements" img="background.jpg" icons={[<PythonIcon />]} delay={0.5}>
          <Text>{t('lorem_ipsum')}</Text>
        </SectionProject>
        <SectionProject title="Project" img="background.jpg" delay={0.5}>
          <Text>{t('lorem_ipsum')}</Text>
        </SectionProject>
      </VStack>
    </Box >
  )
}

export default Projects
