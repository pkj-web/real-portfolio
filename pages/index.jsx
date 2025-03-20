// Check if your index.jsx looks something like this
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Navbar from '../components/Navbar';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      
      
      <Contact />
      <Footer />
    </div>
  );
}