const Intro = () => {
  return (
    <section
      id="intro"
      className="h-screen  snap-center grid grid-cols-[280px] lg:grid-cols-[700px] justify-center items-center"
    >
      <div>
        <h1 className="text-[3em] lg:text-[7.5rem] tracking-tight lg:tracking-tighter font-extrabold">
          About Emi.
        </h1>
        <p className="text-lg lg:text-2xl font-light">
          I started off as a self-taught coder, building WordPress sites for
          clients as a side gig. Craving more freedom in design, I jumped into
          JavaScript and front-end development to really push the creative
          boundaries.
        </p>
      </div>
      {/*       <img
        className="rounded-full w-[290px] justify-self-end border-[1px] p-1 border-black"
        src="/src/assets/pro-pic.jpeg"
      /> */}
    </section>
  );
};

export default Intro;
