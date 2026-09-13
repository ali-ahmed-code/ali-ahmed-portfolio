import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Leadership from "./components/Leadership";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Leadership />
        <TechStack />
      </main>
      <Contact />
    </>
  );
}
