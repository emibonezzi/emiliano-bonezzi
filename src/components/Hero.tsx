const Hero = () => {
  return (
    <section
      id="hero"
      className="h-[100dvh] snap-center grid grid-cols-[2fr_1fr] justify-center items-center"
    >
      <div>
        <h1 className="text-[7.5rem] text-left tracking-tighter font-extrabold">
          Hi, this is Emi.
        </h1>
        <p className="text-2xl text-left  font-light">
          Web developer based in NYC.
        </p>
      </div>
      <img
        className="rounded-full shadow-2xl w-[350px] justify-self-center border-2 p-1"
        src="/src/assets/pro-pic.jpeg"
      />
    </section>
  );
};

export default Hero;
