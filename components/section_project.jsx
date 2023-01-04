import Section from "./section"
import Project from "./project"

const SectionProject = ({ children, title, img, img_hvr, icons = [], delay = 0, download = undefined, repo = undefined }) => {
  return (
    <Section delay={delay} >
      <Project title={title} img={img} img_hvr={img_hvr} icons={icons} delay={delay + 0.5} download={download} repo={repo}>
        {children}
      </Project>
    </Section>
  )
}

export default SectionProject
