import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AnimatedBackground from './components/AnimatedBackground';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Projects from './pages/projects/Projects';
import Contact from './pages/contact/Contact';
import Technologies from './pages/technologies/Technologies';
import Footer from './components/Footer';
import ProjectDetail from './pages/projects/ProjectDetail';
import './App.css';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

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

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AnimatedBackground />
      <div className="relative z-10">
        <Header />
        <Routes>
          <Route path="/projects/:id" element={<ProjectDetail />} />   
          <Route
            path="*"
            element={
              <>
                <ScrollToSeccion />
                <main>
                  <Home />
                  <About />
                  <Technologies />
                  <Projects />
                  <Contact />
                </main>
              </>
            }
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
