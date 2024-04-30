const Contacts = () => {
  return (
    <section
      id="contacts"
      className="h-[100dvh] relative snap-center px-3 lg:pl-10 grid grid-cols-[2fr_1fr] justify-center items-center"
    >
      <div>
        <h1 className="text-[2.5em] lg:text-[7.5rem] tracking-tight lg:tracking-tighter font-extrabold">
          Let's connect
        </h1>
        <p className="text-lg lg:text-2xl font-light">
          Send an email to:
          <br />
          <span className="underline">
            <a href="mailto:me@emilianobonezzi.com">me@emilianobonezzi.com</a>
          </span>
        </p>
      </div>
      <img
        className="rounded-full w-[290px] border-[1px] p-1 border-black"
        src="../assets/pro-pic.jpeg"
      />
    </section>
  );
};

export default Contacts;
