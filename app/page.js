import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import CommandPalette from '@/components/CommandPalette';
import CustomCursor from '@/components/CustomCursor';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <CustomCursor />
      <ParticleBackground />
      <CommandPalette />

      <Navbar />

      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
