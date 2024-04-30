import "./App.css";
import Contacts from "./components/Contacts";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Resume from "./components/Resume";

function App() {
  return (
    <div
      id="container"
      className="snap-mandatory h-[100dvh] overflow-y-scroll snap-y"
    >
      <Hero />
      <Intro />
      <Projects />
      <Resume />
      <Contacts />
    </div>
  );
}

export default App;
