import React from "react";
import { skills } from "../data/skills";

const NewSkills = () => {
  return (
    <>
      <section
        id="projects"
        className="h-[100dvh]  snap-center grid grid-cols-[280px] lg:grid-cols-[700px] justify-center items-center"
      >
        <div>
          <h1 className="text-[3em] lg:text-[7.5rem] tracking-tight lg:tracking-tighter font-extrabold">
            Skills
          </h1>
          <p className="text-lg lg:text-2xl font-light">
            My skills encompass a broad range of technical and creative areas,
            ensuring effective problem-solving and innovative project execution.
            I excel in adapting to new technologies and am committed to
            enhancing user experiences through continuous learning and
            application.
          </p>
        </div>
      </section>
      {skills.map((skill) => (
        <article className="h-[100dvh] snap-center grid grid-cols-[280px] lg:grid-cols-[700px] justify-center items-center">
          <div>
            <h1 className="text-[1.8em] leading-[38px] lg:leading-tight lg:text-[5em] tracking-tight lg:tracking-tighter font-extrabold">
              {skill.name}
            </h1>
            <p className="mt-5 text-sm lg:text-2xl font-light">
              {skill.description}
            </p>
          </div>
        </article>
      ))}
    </>
  );
};

export default NewSkills;
