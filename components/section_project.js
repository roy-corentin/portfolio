import Section from "./section"
import Project from "./project"

const SectionProject = ({ children, title, img, icons = [], delay = 0 }) => {
  return (
    <Section delay={delay}>
      <Project title={title} img={img} icons={icons} delay={delay + 0.5}>
        {children}
      </Project>
    </Section>
  )
}

export default SectionProject
