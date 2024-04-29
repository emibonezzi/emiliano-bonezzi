import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="h-[100dvh] grid items-center snap-center">
      <h1 className="text-[5.5rem] tracking-normal font-extrabold">Projects</h1>
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
