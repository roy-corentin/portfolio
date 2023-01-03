import { HStack, Box, Text, Image, Heading, useColorModeValue, Link } from "@chakra-ui/react"
import { MotionDiv } from "./section"
import { useState } from "react"

const Project = ({ children, title, img, img_hvr, icons = [], delay = 0, download = undefined, repo = undefined }) => {
  const [image, setImage] = useState(img);
  if (img_hvr === undefined) {
    img_hvr = img
  }

  return (
    <Box display={{ md: "flex" }} p={2} borderRadius={10}>
      <Box align="center">
        <MotionDiv
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: delay }}
        >
          <Image borderRadius={10}
            maxWidth="200px"
            src={`/images/${image}`}
            alt="Demo Project"
            onMouseEnter={() => { setImage(img_hvr) }}
            onMouseOut={() => { setImage(img) }} />
        </MotionDiv>
      </Box>
      <Box ml={2}>
        <MotionDiv
          initial={{ x: 10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: delay }}
        >
          <HStack >
            <Heading key={title} as="h3" variant="section-title" >
              {title}
            </Heading>
            {icons}
          </HStack>
        </MotionDiv>
        <Text>
          {children}
          {console.log(download)}
          {download != undefined ? <Text as="b"> <Link href={download} isExternal>(download)</Link> </Text> : <></>}
          {repo != undefined ? <Text as="b"> <Link href={repo} isExternal>(repo)</Link> </Text> : <></>}
        </Text>
      </Box>
    </Box>
  )
}

export default Project
