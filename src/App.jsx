import './App.css';
import Navbar from './components/Navbar';
import About from './pages/About';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Project from './pages/Project';
import Particles from './components/background/Particles'; // import Particles

function App() {
  return (
    <div className="relative w-full min-h-screen">
      <Navbar />

      {/* Global Particles Background */}
      <div className="fixed inset-0 z-10 pointer-events-none">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={400}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Halaman-halaman lain di atas Particles */}
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
