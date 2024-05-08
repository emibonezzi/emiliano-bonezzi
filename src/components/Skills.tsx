import { Icon } from "@iconify/react/dist/iconify.js";
import { skills } from "../data/skills";

const Skills = () => {
  return (
    <section
      id="skills"
      className={`h-screen snap-mandatory snap-x overflow-x-scroll snap-center grid grid-cols-[100vw_100vw_100vw_100vw_100vw_100vw_100vw] items-center`}
    >
      <div
        id="0skill"
        className="snap-center flex flex-col justify-center items-center"
      >
        <h1 className="text-[3em] text-center lg:text-[7.5rem] tracking-tight lg:tracking-tighter font-extrabold">
          Skills
        </h1>
        <a href="#1skill">
          <Icon
            className="text-[2em] lg:text-[4em] mt-3 arrow"
            icon="mingcute:arrows-right-fill"
          />
        </a>
      </div>
      {skills.map((skill) => (
        <div
          id={`${skill.id.toString()}skill`}
          className="snap-center px-[50px] lg:px-[200px]"
        >
          <h1 className="text-[2.5em] leading-[30px] lg:leading-tight lg:text-[7.5em] tracking-tight lg:tracking-tighter font-extrabold">
            {skill.name}
          </h1>
          <p className="mt-5 text-lg lg:text-2xl font-light">
            {skill.description}
          </p>
          <div className="flex justify-between">
            <a
              href={`#${
                skill.id === 0 ? "0skill" : `${(skill.id - 1).toString()}skill`
              }`}
            >
              <Icon
                className="text-[2em] lg:text-[4em] mt-3 arrow"
                icon="mingcute:arrows-left-fill"
              />
            </a>
            <a
              href={`#${
                skill.id === skills.length
                  ? "0skill"
                  : `${(skill.id + 1).toString()}skill`
              }
              `}
            >
              <Icon
                className="arrow text-[2em] lg:text-[4em] mt-3"
                icon="mingcute:arrows-right-fill"
              />
            </a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
