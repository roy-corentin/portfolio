import { HStack, Box, Text, Image, Heading, useColorModeValue } from "@chakra-ui/react"
import { MotionDiv } from "./section"

const Project = ({ children, title, img, icons = [], delay = 0 }) => {
  return (
    <Box display={"flex"} p={2} borderRadius={10}>
      <Box>
        <MotionDiv
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: delay }}
        >
          <Image borderRadius={10} maxWidth="200px" src={`/images/${img}`} alt="Demo Project" />
        </MotionDiv>
      </Box>
      <Box ml={2}>
        <MotionDiv
          initial={{ x: 10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: delay }}
        >
          <HStack >
            <Heading as="h3" variant="section-title" >
              {title}
            </Heading>
            {icons}
          </HStack>
        </MotionDiv>
        <Text>
          {children}
        </Text>
      </Box>
    </Box>
  )
}

export default Project
