import TopBar from './components/TopBar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Now from './components/Now';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background from './components/Background';
import { useReveal } from './hooks/useReveal';

export default function App() {
  useReveal();
  return (
    <>
      <Background />
      <TopBar />
      <main className="relative pt-14">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Now />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
