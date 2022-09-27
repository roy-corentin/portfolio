import { VStack, Container, Text, Box, Heading, SimpleGrid, Divider } from "@chakra-ui/react"
import RubyIcon from "../public/icons/ruby"
import CIcon from "../public/icons/c"
import SectionProject from "../components/section_project"

const Projects = () => {
  return (
    <Box width="100M">
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>
      <VStack divider={<Divider />} spacing={1} align="stretch">
        <SectionProject title="Project" img="background.jpg" icons={[<CIcon />, <RubyIcon />]} delay={0.5}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel scelerisque eros, vel scelerisque augue. Curabitur in dui arcu. Quisque pretium, neque ut pharetra semper, velit felis facilisis lacus, a tempus dui ex sed augue. Pellentesque aliquam tempus orci, eget aliquet mi molestie in. Fusce eros purus, maximus sed feugiat ac, posuere eu enim. In eu odio et felis maximus placerat. Praesent vitae nisi erat. Praesent egestas augue nec arcu varius facilisis. Mauris bibendum efficitur enim, sed semper erat scelerisque at.
        </SectionProject>
        <SectionProject title="Project" img="background.jpg" icons={[<CIcon />, <RubyIcon />]} delay={0.5}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel scelerisque eros, vel scelerisque augue. Curabitur in dui arcu. Quisque pretium, neque ut pharetra semper, velit felis facilisis lacus, a tempus dui ex sed augue. Pellentesque aliquam tempus orci, eget aliquet mi molestie in. Fusce eros purus, maximus sed feugiat ac, posuere eu enim. In eu odio et felis maximus placerat. Praesent vitae nisi erat. Praesent egestas augue nec arcu varius facilisis. Mauris bibendum efficitur enim, sed semper erat scelerisque at.
        </SectionProject>
        <SectionProject title="Project" img="background.jpg" delay={0.5}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel scelerisque eros, vel scelerisque augue. Curabitur in dui arcu. Quisque pretium, neque ut pharetra semper, velit felis facilisis lacus, a tempus dui ex sed augue. Pellentesque aliquam tempus orci, eget aliquet mi molestie in. Fusce eros purus, maximus sed feugiat ac, posuere eu enim. In eu odio et felis maximus placerat. Praesent vitae nisi erat. Praesent egestas augue nec arcu varius facilisis. Mauris bibendum efficitur enim, sed semper erat scelerisque at.
        </SectionProject>
      </VStack>
    </Box >
  )
}

export default Projects
