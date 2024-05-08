import { Icon } from "@iconify/react/dist/iconify.js";
import { projects } from "../data/projects";
/*  */
const Projects = () => {
  return (
    <section
      id="projects"
      className="h-screen snap-mandatory snap-x overflow-x-scroll snap-center grid grid-cols-[100vw_100vw_100vw_100vw] items-center scroll-smooth"
    >
      <div
        id="0"
        className="snap-center flex flex-col justify-center items-center"
      >
        <h1 className="text-[3em] lg:text-[7.5rem] text-center tracking-tight lg:tracking-tighter font-extrabold">
          Projects
        </h1>
        <a href="#1">
          <Icon
            className="text-[3em] lg:text-[4em] mt-3 arrow"
            icon="mingcute:arrows-right-fill"
          />
        </a>
      </div>
      {projects.map((project) => (
        <div
          id={project.id.toString()}
          className="snap-center px-[50px] lg:px-[200px]"
        >
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
                {link.icon}
              </a>
            ))}
          </div>
          <div className="flex justify-between">
            <a
              href={`#${project.id === 0 ? "0" : (project.id - 1).toString()}`}
            >
              <Icon
                className="text-[3em] lg:text-[4em] mt-3 arrow"
                icon="mingcute:arrows-left-fill"
              />
            </a>
            <a
              href={`#${
                project.id === projects.length
                  ? "0"
                  : (project.id + 1).toString()
              }`}
            >
              <Icon
                className="arrow text-[3em] lg:text-[4em] mt-3"
                icon="mingcute:arrows-right-fill"
              />
            </a>
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
