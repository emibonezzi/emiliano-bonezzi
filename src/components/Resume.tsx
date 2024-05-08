import { Icon } from "@iconify/react/dist/iconify.js";
import { resume } from "../data/resume";

const Resume = () => {
  return (
    <section
      id="resume"
      className="h-screen snap-mandatory snap-x overflow-x-scroll snap-center grid grid-cols-[100vw_100vw_100vw_100vw_100vw_100vw] items-center scroll-smooth"
    >
      <div
        id="0resume"
        className="snap-center flex flex-col justify-center items-center"
      >
        <h1 className="text-[3em] text-center lg:text-[7.5rem] tracking-tight lg:tracking-tighter font-extrabold">
          Resume
        </h1>
        <a href="#1resume">
          <Icon
            className="text-[2em] lg:text-[4em] mt-3 arrow"
            icon="mingcute:arrows-right-fill"
          />
        </a>
      </div>
      {resume.map((experience) => (
        <div
          id={`${experience.id.toString()}resume`}
          className="snap-center grid items-center lg:grid-cols-[2fr_1fr] px-[50px] lg:px-[200px]"
        >
          <h1 className="text-[2em] leading-[30px] lg:leading-normal lg:text-6xl tracking-tight lg:tracking-tighter font-extrabold">
            {experience.position}
          </h1>
          <div className="flex flex-col mt-3 lg:mt-0 text-xs lg:text-sm lg:text-right font-light">
            <p>{experience.period}</p>
            <p className="italic">{experience.company}</p>
          </div>
          <ul className="mt-5 text-sm lg:text-xl font-light list-disc lg:col-span-2">
            {experience.bullet_points.map((point) => (
              <li className="mt-2">{point}</li>
            ))}
          </ul>
          <div className="flex justify-between mt-[20px] lg:col-span-2">
            <a
              href={`#${
                experience.id === 0
                  ? "0resume"
                  : `${(experience.id - 1).toString()}resume`
              }`}
            >
              <Icon
                className="text-[2em] lg:text-[4em] mt-3 arrow"
                icon="mingcute:arrows-left-fill"
              />
            </a>
            <a
              href={`#${
                experience.id === resume.length
                  ? "0resume"
                  : `${(experience.id + 1).toString()}resume`
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

export default Resume;
