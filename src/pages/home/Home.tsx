import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Technologies from "./components/technologies/Technologies";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

function ScrollToSeccion() {
  const location = useLocation();

  useEffect(() => {
    const scrollTarget = location.state?.seccionScroll;
    if (scrollTarget) {
      const el = document.getElementById(scrollTarget);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return null;
}

const Home = () => {
  return (
    <>
    <ScrollToSeccion/>
    <main>
      <Hero />
      <About />
      <Technologies />
      <Projects/>
      <Contact />
    </main>
    </>
    
  );
};

export default Home;