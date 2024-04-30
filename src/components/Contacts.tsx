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
        src="https://media.licdn.com/dms/image/D4D03AQFVX-RWjIIyjA/profile-displayphoto-shrink_800_800/0/1698223282520?e=1720051200&v=beta&t=tzYp6V4oYhjZ8qhpmG-x_oIl86UtsR8fjULAWxUQY9E"
      />
    </section>
  );
};

export default Contacts;
