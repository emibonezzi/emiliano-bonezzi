import "./App.css";
import Contacts from "./components/Contacts";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Hero />
      <Intro />
      <Projects />
      <Skills />
      <Contacts />
    </>
  );
}

export default App;
