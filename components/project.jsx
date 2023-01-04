import { HStack, Box, Text, Image, Heading, useColorModeValue, Link } from "@chakra-ui/react"
import { MotionDiv } from "./section"
import { useState } from "react"
import { GithubIcon } from "../public/icons/icons"

const Project = ({ children, title, img, img_hvr, icons = [], delay = 0, download = undefined, repo = undefined }) => {
  const [image, setImage] = useState(img);
  if (img_hvr === undefined) {
    img_hvr = img
  }

  return (
    <Box display={{ md: "flex" }} p={2} borderRadius={10}>
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
          <Text> {children} </Text>
          {download != undefined ? <Link href={download} isExternal><Text as="b"> (download) </Text></Link> : <></>}
          {repo != undefined ? <Link href={repo} isExternal><Text as="b"> (Repo <GithubIcon boxSize={"1.5rem"} />)</Text></Link> : <></>}
        </MotionDiv>
      </Box>
    </Box>
  )
}

export default Project
