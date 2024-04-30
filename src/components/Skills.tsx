import { skills } from "../data/skills";

const Skills = () => {
  return (
    <section
      id="skills"
      className={`h-screen snap-mandatory snap-x overflow-x-scroll snap-center grid grid-cols-[75vw_100vw_100vw_100vw_100vw_100vw_100vw] items-center`}
    >
      <div className="snap-center">
        <h1 className="text-[3em] pl-5 lg:text-[7.5rem] tracking-tight lg:tracking-tighter font-extrabold">
          Skills
        </h1>
      </div>
      {skills.map((skill) => (
        <div className="snap-center w-[80%] lg:w-[65%]">
          <h1 className="text-[2.5em] leading-[30px] lg:leading-tight lg:text-[7.5em] tracking-tight lg:tracking-tighter font-extrabold">
            {skill.name}
          </h1>
          <p className="mt-5 text-lg lg:text-2xl font-light">
            {skill.description}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Skills;
