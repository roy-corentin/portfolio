import Section from "./Section";
import Project from "./Project";

const SectionProject = ({ children, project, delay }) => {
  return (
    <Section delay={delay}>
      <Project project={project} delay={delay}>
        {children}
      </Project>
    </Section>
  );
};

export default SectionProject;
