import { resume } from "../data/resume";

const Skills = () => {
  return (
    <section
      id="hero"
      className="h-[100dvh] snap-mandatory snap-x overflow-x-scroll snap-center grid grid-cols-[85vw_100vw_100vw_100vw_100vw_100vw] items-center"
    >
      <div className="snap-center">
        <h1 className="text-9xl tracking-tighter text-center">Resume</h1>
      </div>
      {resume.map((experience) => (
        <div className="snap-center w-[65%] grid grid-cols-[2fr_1fr]">
          <h1 className="text-6xl font-bold tracking-tight">
            {experience.position}
          </h1>
          <div className="flex flex-col text-right font-light">
            <p className="text-lg">{experience.period}</p>
            <p className="italic">{experience.company}</p>
          </div>
          <ul className="mt-5 text-lg font-light list-disc">
            {experience.bullet_points.map((point) => (
              <li className="mt-2">{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Skills;
