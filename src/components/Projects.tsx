import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section id="projects">
      <h1>Projects</h1>
      <div className="grid grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            name={project.name}
            thumbnail={project.thumbnail}
            description={project.description}
            stack={project.stack}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
