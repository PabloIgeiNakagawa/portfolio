import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Skills from './components/skills/Skills';
import Sidebar from './components/sidebar/Sidebar';
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
      <div className="bg-[linear-gradient(180deg,rgba(23,26,33,0)_0%,rgba(23,26,33,0.6)_30%,rgba(23,26,33,0.9)_100%)] rounded">
        <Hero />

          <div className="p-6">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-1 min-w-0 flex flex-col gap-6">
                <About />
                <Skills />
                <Technologies />
                <Projects/>
                <Contact />
              </div>

              <aside className="w-full lg:w-[300px] shrink-0 flex flex-col gap-6">
                <Sidebar />
              </aside>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
