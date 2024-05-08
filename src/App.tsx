import "./App.css";
import Contacts from "./components/Contacts";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import NewProjects from "./components/NewProjects";
import NewResume from "./components/NewResume";
import NewSkills from "./components/NewSkills";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <div
        id="container"
        className="snap-mandatory h-[100dvh] overflow-y-scroll snap-y scroll-smooth"
      >
        <Hero />
        <Intro />
        <NewProjects />
        <NewResume />
        <NewSkills />
        <Contacts />
      </div>
    </>
  );
}

export default App;
