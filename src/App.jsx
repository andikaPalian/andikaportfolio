import "./App.css";
import { Navbar } from "./components/Navbar";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Project from "./pages/Project";

function App() {
  return (
    <div className="relative w-full min-h-screen">
      <Navbar />

      <div className="relative z-10">
        <Home />
        <About />
        <Skills />
        <Project />
        <Contact />
      </div>
    </div>
  );
}

export default App;
