import "./App.css";
import Contacts from "./components/Contacts";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import NewProjects from "./components/NewProjects";
import Resume from "./components/Resume";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <div
        id="container"
        className="snap-mandatory h-screen overflow-y-scroll snap-y scroll-smooth"
      >
        <Hero />
        <Intro />
        <NewProjects />
        <Resume />
        <Skills />
        <Contacts />
      </div>
    </>
  );
}

export default App;
