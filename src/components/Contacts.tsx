const Contacts = () => {
  return (
    <section
      id="contacts"
      className="h-[100dvh] relative snap-center grid grid-cols-[280px] lg:grid-cols-[700px] justify-center items-center"
    >
      <div>
        <h1 className="text-[3em] lg:text-[7.5rem] tracking-tight lg:tracking-tighter font-extrabold">
          Let's connect
        </h1>
        <p className="text-2xl font-light">
          You can find me at: me@emilianobonezzi.com
        </p>
      </div>
      {/*       <img
        className="rounded-full w-[290px] justify-self-end border-[1px] p-1 border-black"
        src="/src/assets/pro-pic.jpeg"
      /> */}
    </section>
  );
};

export default Contacts;
