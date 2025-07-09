import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Technologies from './components/Technologies'
import './App.css'

function App() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-blue-800 via-purple-900 to-blue-900 text-white">
        <Header />
        <main>
          <Home />
          <About />
          <Technologies />
          <Projects />
          <Contact />
        </main>
      </div>
    </>
  );
}


export default App
