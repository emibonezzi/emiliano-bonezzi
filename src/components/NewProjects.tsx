import { Icon } from "@iconify/react/dist/iconify.js";
import { projects } from "../data/projects";

const NewProjects = () => {
  return (
    <>
      <section
        id="projects"
        className="h-screen  snap-center grid grid-cols-[280px] lg:grid-cols-[700px] justify-center items-center"
      >
        <div>
          <h1 className="text-[3em] lg:text-[7.5rem] tracking-tight lg:tracking-tighter font-extrabold">
            Projects
          </h1>
          <p className="text-lg lg:text-2xl font-light">
            While working as a data analyst, I started building websites for
            small businesses and working on my own projects to learn more about
            web development. Take a look at my work that has helped me grow into
            a web developer.
          </p>
        </div>
      </section>
      {projects.map((project) => (
        <article
          id={project.id.toString()}
          className="h-screen  snap-center grid grid-cols-[280px] lg:grid-cols-[700px] justify-center items-center"
        >
          <div>
            <h1 className="text-[2em] leading-[38px] lg:leading-tight lg:text-[5em] tracking-tight lg:tracking-tighter font-extrabold">
              {project.name}
            </h1>
            <div className="flex gap-3">
              {project.stack.map((tech) => (
                <span className="text-[10px] lg:text-xs mt-5 bg-gray-300 uppercase text-black py-1 px-3">
                  {tech}
                </span>
              ))}
            </div>
            <p className="mt-5 text-sm lg:text-2xl font-light">
              {project.description}
            </p>

            <div className="flex text-white justify-center gap-5 mt-5 text-5xl lg:text-6xl">
              {project.links.map((link) => (
                <a target="_blank" href={link.url}>
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </article>
      ))}
    </>
  );
};

export default NewProjects;
