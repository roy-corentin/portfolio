import { AnimatePresence, motion } from "framer-motion"
import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react"
import { SunIcon, MoonIcon } from "@chakra-ui/icons"

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode()

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div style={{ display: "inline-block" }}
        key={useColorModeValue("light", "dark")}
        initial={{ rotate: -60 }}
        animate={{ rotate: 0 }}
        transition={{ ease: "easeOut", duration: 0.2 }}>
        <IconButton
          aria-label="Toggle Theme"
          colorScheme={useColorModeValue("purple", "orange")}
          icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
          onClick={toggleColorMode} />
      </motion.div>
    </AnimatePresence>
  )
}

export default ThemeToggleButton
