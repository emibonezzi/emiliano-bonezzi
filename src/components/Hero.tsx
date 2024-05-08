import { Icon } from "@iconify/react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen relative snap-center grid grid-cols-[280px] lg:grid-cols-[700px] justify-center items-center"
    >
      <div>
        <h1 className="text-[3em] lg:text-[7.5rem] tracking-tight lg:tracking-tighter font-extrabold">
          Hi, this is Emi.
        </h1>
        <p className="text-lg lg:text-2xl font-light">
          Web developer based in NYC.
          <br /> I like to create intuitive and visually appealing digital
          experiences.
        </p>
        <div className="flex text-white justify-center gap-5 mt-5 text-5xl lg:text-6xl">
          <a target="_blank" href="https://github.com/emibonezzi">
            <Icon icon="mdi:github" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/emiliano-bonezzi/"
          >
            <Icon icon="mdi:linkedin" />
          </a>
          <a href="#resume">
            <Icon icon="academicons:cv" />
          </a>
        </div>
      </div>
      {/*       <img
        className="rounded-full w-[290px] justify-self-end border-[1px] p-1 border-black"
        src="/src/assets/pro-pic.jpeg"
      /> */}
    </section>
  );
};

export default Hero;
