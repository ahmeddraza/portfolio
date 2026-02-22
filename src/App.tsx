import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;
