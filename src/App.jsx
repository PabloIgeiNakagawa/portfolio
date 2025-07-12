import AnimatedBackground from './AnimatedBackground';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Technologies from './components/technologies/Technologies';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  return (
    <>
      <AnimatedBackground />
      <div className="relative z-10">
        <Header />
        <div className="min-h-screen">
          <main>
            <Home />
            <About />
            <Technologies />
            <Projects />
            <Contact />
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;