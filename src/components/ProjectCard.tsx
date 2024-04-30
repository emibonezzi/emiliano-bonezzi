import { ReactNode } from "react";

interface Props {
  name: string;
  thumbnail: string;
  description: string;
  stack: string[];
  links: { icon: ReactNode; title: string; url: string }[];
}

const ProjectCard = (props: Props) => {
  return (
    <article className="snap-center gap-x-5 grid grid-cols-2">
      <video
        className="p-4 rounded-lg h-[450px] w-[600px]"
        autoPlay
        loop
        muted
        playsInline
        src={props.thumbnail}
      ></video>
      <div className="flex flex-col gap-3">
        <h1 className="text-7xl">{props.name}</h1>
        <div className="flex gap-3">
          {props.stack.map((tech) => (
            <span className="text-xs bg-gray-300 uppercase text-black py-1 px-3">
              {tech}
            </span>
          ))}
        </div>
        <p className="text-xl font-light">{props.description}</p>
        <div className="flex mt-5 gap-5 items-center justify-center">
          {props.links.map((link) => (
            <a className="text-blue-800" target="_blank" href={link.url}>
              <div className="flex justify-center text-white items-center gap-2">
                <span className="text-6xl">{link.icon}</span>
                <span className="text-xl">{link.title} </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
