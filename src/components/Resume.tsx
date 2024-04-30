import { resume } from "../data/resume";

const Resume = () => {
  return (
    <section
      id="resume"
      className="h-[100dvh] snap-mandatory snap-x overflow-x-scroll snap-center grid grid-cols-[85vw_100vw_100vw_100vw_100vw_100vw] items-center"
    >
      <div className="snap-center">
        <h1 className="text-[3em] pl-5 lg:text-[7.5rem] tracking-tight lg:tracking-tighter font-extrabold">
          Resume
        </h1>
      </div>
      {resume.map((experience) => (
        <div className="snap-center w-[80%] lg:w-[65%] grid items-center lg:grid-cols-[2fr_1fr]">
          <h1 className="text-[2em] leading-[30px] lg:leading-normal lg:text-6xl tracking-tight lg:tracking-tighter font-extrabold">
            {experience.position}
          </h1>
          <div className="flex flex-col mt-3 lg:mt-0 text-xs lg:text-sm lg:text-right font-light">
            <p>{experience.period}</p>
            <p className="italic">{experience.company}</p>
          </div>
          <ul className="mt-5 text-sm lg:text-xl font-light list-disc">
            {experience.bullet_points.map((point) => (
              <li className="mt-2">{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Resume;
