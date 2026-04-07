import PillNav from './components/effects/PillNav';
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
      <PillNav
        logo="/logo.svg"
        logoAlt="Tosin"
        baseColor="#0a0a0b"
        pillColor="#a78bfa"
        hoveredPillTextColor="#ffffff"
        pillTextColor="#0a0a0b"
        items={[
          { label: 'Who I Am', href: '#about' },
          { label: "What I've Built", href: '#projects' },
          { label: 'My Stack', href: '#skills' },
          { label: 'Track Record', href: '#experience' },
          { label: 'Now', href: '#now' },
          { label: "Let's Talk", href: '#contact' },
        ]}
      />
      <main className="relative">
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
