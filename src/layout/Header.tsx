import { useEffect, useState, useRef } from 'react';

type Seccion = 'hero' | 'about' | 'skills' | 'technologies' | 'projects' | 'contact';

export default function Header() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [seccionActiva, setSeccionActiva] = useState<Seccion | null>(null);
  const [menuAbierto, setMenuAbierto] = useState<boolean>(false);
  const highlightTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const manejarDesplazamiento = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', manejarDesplazamiento);
    return () => window.removeEventListener('scroll', manejarDesplazamiento);
  }, []);

  useEffect(() => {
    const secciones: Seccion[] = ['hero', 'about', 'skills', 'technologies', 'projects', 'contact'];

    const detectarSeccion = () => {
      const scrollPos = window.scrollY + 120;
      let seccionDetectada: Seccion = 'hero';

      for (const id of secciones) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          seccionDetectada = id;
        }
      }

      setSeccionActiva(seccionDetectada);
    };

    detectarSeccion();
    window.addEventListener('scroll', detectarSeccion, { passive: true });
    return () => window.removeEventListener('scroll', detectarSeccion);
  }, []);

  const irASeccion = (idSeccion: Seccion) => {
    const elemento = document.getElementById(idSeccion);
    if (elemento) {
      elemento.scrollIntoView({ behavior: 'smooth' });
      
      if (highlightTimeoutRef.current) {
        clearTimeout(highlightTimeoutRef.current);
      }
      
      setTimeout(() => {
        elemento.classList.add('ring-2', 'ring-steam-blue/30', 'rounded-sm', 'transition-all', 'duration-300');
        highlightTimeoutRef.current = setTimeout(() => {
          elemento.classList.remove('ring-2', 'ring-steam-blue/30', 'rounded-sm', 'transition-all', 'duration-300');
        }, 2000);
      }, 600);
    }
    setSeccionActiva(idSeccion);

    setMenuAbierto(false);
  };

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  const nombresSeccion: Record<Seccion, string> = {
    hero: 'Inicio',
    about: 'Sobre Mí',
    skills: 'Habilidades',
    technologies: 'Tecnologías',
    projects: 'Proyectos',
    contact: 'Contacto'
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
      scrolled 
        ? 'bg-steam-bg/95 backdrop-blur-md shadow-sm border-b border-steam-border' 
        : 'bg-steam-bg/80 backdrop-blur-sm border-b border-transparent'
    }`}>
        <div className="container mx-auto flex justify-between items-center h-24 px-4 max-w-7xl">
        <h1 
          className="text-2xl font-bold hover:scale-105 transition-transform duration-200 cursor-pointer font-titulo"
          onClick={() => irASeccion('hero')}
        >
          {'{p}'}
        </h1>
        
        <nav className="hidden lg:flex items-center justify-center flex-1">
          <ul className="flex items-center gap-4">
            {['hero', 'about', 'skills','technologies', 'projects', 'contact'].map((seccion) => (
              <li key={seccion}>
                <button
                  onClick={() => irASeccion(seccion as Seccion)}
                  className={`relative py-2 text-sm font-bold uppercase tracking-[0.02em] [text-shadow:0_0_1px_currentColor] transition-colors duration-150 cursor-pointer after:content-[''] after:absolute after:bottom-[7px] after:left-0 after:w-full after:h-0.5 after:bg-[#1a9fff] after:rounded-sm after:origin-center after:scale-x-0 after:transition-transform after:duration-200 hover:text-white/95 hover:after:scale-x-100 ${
                    seccionActiva === seccion 
                      ? 'text-[#1a9fff] after:scale-x-100' 
                      : 'text-steam-text'
                  }`}
                >
                  {nombresSeccion[seccion as Seccion]}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="lg:hidden flex items-center gap-2">
          
          <button
            onClick={toggleMenu}
            className="flex justify-center items-center w-8 h-8 cursor-pointer"
            aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
          >
            <div className="relative w-5 h-5">
              <span className={`absolute top-1/2 left-0 w-full h-0.5 bg-steam-text transition-all duration-300 ${menuAbierto ? 'rotate-45' : '-translate-y-1'}`}></span>
              <span className={`absolute top-1/2 left-0 w-full h-0.5 bg-steam-text transition-all duration-300 ${menuAbierto ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}></span>
              <span className={`absolute top-1/2 left-0 w-full h-0.5 bg-steam-text transition-all duration-300 ${menuAbierto ? '-rotate-45' : 'translate-y-1'}`}></span>
            </div>
          </button>
        </div>
      </div>

      <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-out ${
        menuAbierto ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <nav className="bg-steam-bg/95 backdrop-blur-md border-t border-steam-border">
          <ul className="flex flex-col py-2">
            {['hero', 'about', 'skills','technologies', 'projects', 'contact'].map((seccion) => (
              <li key={seccion}>
                <button
                  onClick={() => irASeccion(seccion as Seccion)}
                  className={`w-full text-left px-6 py-3 mx-2 my-0.5 rounded-sm transition-all duration-150 font-bold uppercase tracking-wide text-sm ${
                    seccionActiva === seccion 
                      ? 'text-steam-white bg-steam-panel border-l-4 border-steam-blue' 
                      : 'text-steam-text hover:bg-steam-panel-hover hover:text-steam-white'
                  }`}
                >
                  {nombresSeccion[seccion as Seccion]}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
