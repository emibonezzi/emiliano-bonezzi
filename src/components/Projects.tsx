import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="h-screen snap-mandatory snap-x overflow-x-scroll snap-center grid grid-cols-[75vw_100vw_100vw_100vw_100vw] items-center"
    >
      <div className="snap-center">
        <h1 className="text-[3em] pl-5 lg:text-[7.5rem] tracking-tight lg:tracking-tighter font-extrabold">
          Projects
        </h1>
      </div>
      {projects.map((project) => (
        <div className="snap-center w-[80%] lg:w-[65%]">
          <h1 className="text-[2.5em] leading-[38px] lg:leading-tight lg:text-[7.0em] tracking-tight lg:tracking-tighter font-extrabold">
            {project.name}
          </h1>
          <div className="flex gap-3">
            {project.stack.map((tech) => (
              <span className="text-[10px] lg:text-xs mt-5 bg-gray-300 uppercase text-black py-1 px-3">
                {tech}
              </span>
            ))}
          </div>
          <p className="mt-5 text-lg lg:text-2xl font-light">
            {project.description}
          </p>

          <div className="flex text-white justify-center gap-5 mt-5 text-5xl lg:text-6xl">
            {project.links.map((link) => (
              <a target="_blank" href={link.url}>
                {" "}
                {link.icon}{" "}
              </a>
            ))}
          </div>
        </div>
      ))}
      {/*       <img
        className="rounded-full w-[290px] justify-self-end border-[1px] p-1 border-black"
        src="/src/assets/pro-pic.jpeg"
      /> */}
      {/* <section
      id="projects"
      className="h-[100dvh] snap-center gap-y-2 grid grid-cols-[1fr] items-center justify-center"
    >
      <div className="snap-mandatory border-2 p-5 snap-x grid grid-cols-[95%_100%_100%_100%] items-center overflow-x-scroll">
        {projects.map((project) => (
          <ProjectCard
            name={project.name}
            thumbnail={project.thumbnail}
            description={project.description}
            stack={project.stack}
            links={project.links}
          />
        ))}
      </div>
    </section> */}
    </section>
  );
};

export default Projects;
