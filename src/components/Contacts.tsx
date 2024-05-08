const Contacts = () => {
  return (
    <section
      id="contacts"
      className="h-[100dvh]  snap-center grid grid-cols-[280px] lg:grid-cols-[700px] justify-center items-center"
    >
      <div>
        <h1 className="text-[3em] lg:text-[7.5rem] tracking-tight lg:tracking-tighter font-extrabold">
          Let's connect
        </h1>
        <div className="flex gap-3 lg:justify-between items-center">
          <img
            className="rounded-full w-[80px] lg:w-[100px] border-[1px] border-black"
            src="https://media.licdn.com/dms/image/D4D03AQFVX-RWjIIyjA/profile-displayphoto-shrink_800_800/0/1698223282520?e=1720051200&v=beta&t=tzYp6V4oYhjZ8qhpmG-x_oIl86UtsR8fjULAWxUQY9E"
          />
          <p className="text-lg lg:text-2xl font-light">
            Reach out via email
            <br />
            <span className="underline">
              <a href="mailto:me@emilianobonezzi.com">me@emilianobonezzi.com</a>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
