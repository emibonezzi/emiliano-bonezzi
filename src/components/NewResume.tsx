import { resume } from "../data/resume";

const NewResume = () => {
  return (
    <>
      <section
        id="resume"
        className="h-[100dvh]  snap-center grid grid-cols-[280px] lg:grid-cols-[700px] justify-center items-center"
      >
        <div>
          <h1 className="text-[3em] lg:text-[7.5rem] tracking-tight lg:tracking-tighter font-extrabold">
            Resume
          </h1>
          <p className="text-lg lg:text-2xl font-light">
            My background is unconventional, but I thrive on passion and a
            commitment to constant improvement. I've pursued my interests with
            dedication, learning and adapting along the way. This approach has
            empowered me to excel and bring innovative solutions to my work,
            regardless of the starting point.
          </p>
        </div>
      </section>
      {resume.map((experience) => (
        <article className="h-[100dvh] snap-center grid grid-cols-[280px] lg:grid-cols-[700px] justify-center items-center">
          <div>
            <h1 className="text-[1.5em] leading-[30px] lg:leading-normal lg:text-6xl tracking-tight lg:tracking-tighter font-extrabold">
              {experience.position}
            </h1>
            <div className="flex flex-col mt-3 lg:mt-0 text-xs lg:text-sm font-light">
              <p>{experience.period}</p>
              <p className="italic">{experience.company}</p>
            </div>
            <ul className="mt-5 text-sm lg:text-xl font-light list-disc lg:col-span-2">
              {experience.bullet_points.map((point) => (
                <li className="mt-2">{point}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </>
  );
};

export default NewResume;
