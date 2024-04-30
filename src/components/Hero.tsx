import { Icon } from "@iconify/react";
const Hero = () => {
  return (
    <section
      id="hero"
      className="h-[100dvh] relative snap-center grid grid-cols-[700px] justify-center items-center"
    >
      <div>
        <h1 className="text-[7.5rem] text-left tracking-tighter font-extrabold">
          Hi, this is Emi.
        </h1>
        <p className="text-2xl text-left font-light">
          Web developer based in NYC.
          <br /> I like to create intuitive and visually appealing digital
          experiences.
        </p>
        <div className="flex text-white justify-center gap-5 mt-5 text-6xl">
          <Icon icon="mdi:github" />
          <Icon icon="mdi:linkedin" />
          <Icon icon="academicons:cv" />
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
