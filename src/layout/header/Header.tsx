import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import DropdownTema from './DropdownTema';

type Seccion = 'hero' | 'about' | 'skills' | 'technologies' | 'projects' | 'contact';

export default function Header() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [seccionActiva, setSeccionActiva] = useState<Seccion>('hero');
  const [menuAbierto, setMenuAbierto] = useState<boolean>(false);
  const location = useLocation();
  const estaEnDetalle = location.pathname.startsWith('/projects/');
  const navigate = useNavigate();
  const buttonSpan = "block w-6 h-0.5 bg-gray-600 dark:bg-neutral-400 transition-all duration-300 origin-center"

  useEffect(() => {
    const manejarDesplazamiento = () => {
      setScrolled(window.scrollY > 20);
      
      const secciones: Seccion[] = ['hero', 'about', 'skills','technologies', 'projects', 'contact'];
      const posicionScroll = window.scrollY + 100;
      
      for (const seccion of secciones) {
        const elemento = document.getElementById(seccion);
        if (elemento) {
          const { offsetTop, offsetHeight } = elemento;
          if (posicionScroll >= offsetTop && posicionScroll < offsetTop + offsetHeight) {
            setSeccionActiva(seccion);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', manejarDesplazamiento);
    return () => window.removeEventListener('scroll', manejarDesplazamiento);
  }, [estaEnDetalle]);

  const irASeccion = (idSeccion: Seccion) => {
    const estaEnDetalle = location.pathname.startsWith('/projects/');

    if (estaEnDetalle || location.pathname !== '/') {
      navigate('/', { state: { seccionScroll: idSeccion } });
      } else {
        const elemento = document.getElementById(idSeccion);
      if (elemento) {
        elemento.scrollIntoView({ behavior: 'smooth' });
        setSeccionActiva(idSeccion);
      }
    }
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
        ? 'bg-white/90 dark:bg-neutral-950/90 backdrop-blur-md shadow-sm border-gray-200/50 dark:border-neutral-800/50' 
        : 'bg-white/60 dark:bg-neutral-950/50 backdrop-blur-sm border-gray-200 dark:border-neutral-800'
    }`}>
      <div className="container mx-auto flex justify-between items-center h-16 px-4 max-w-7xl">
        <h1 
          className="text-2xl font-bold hover:scale-105 transition-transform duration-200 cursor-pointer font-titulo"
          onClick={() => irASeccion('hero')}
        >
          {'{p}'}
        </h1>
        
        <nav className="hidden lg:flex items-center gap-1">
          <ul className="flex items-center gap-1">
            {['hero', 'about', 'skills','technologies', 'projects', 'contact'].map((seccion) => (
              <li key={seccion}>
                <button
                  onClick={() => irASeccion(seccion as Seccion)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer ${
                    seccionActiva === seccion 
                      ? 'text-primary dark:text-primary bg-primary/10' 
                      : 'text-gray-600 dark:text-neutral-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-neutral-800'
                  }`}
                >
                  {nombresSeccion[seccion as Seccion]}
                </button>
              </li>
            ))}
          </ul>
          <div className="ml-2 pl-2 border-l border-gray-200 dark:border-neutral-700">
            <DropdownTema />
          </div>
        </nav>
        
        <div className="lg:hidden flex items-center gap-2">
          <DropdownTema />
          
          <button
            onClick={toggleMenu}
            className="flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors duration-200"
            aria-label="Abrir menú"
          >
            <span className={`${buttonSpan} ${menuAbierto ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
            <span className={`${buttonSpan} my-1.5 ${menuAbierto ? 'opacity-0 scale-0' : ''}`}></span>
            <span className={`${buttonSpan} ${menuAbierto ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
          </button>
        </div>
      </div>

      <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-out ${
        menuAbierto ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <nav className="bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border-t border-gray-200 dark:border-neutral-800">
          <ul className="flex flex-col py-2">
            {['hero', 'about', 'skills','technologies', 'projects', 'contact'].map((seccion) => (
              <li key={seccion}>
                <button
                  onClick={() => irASeccion(seccion as Seccion)}
                  className={`w-full text-left px-6 py-3 transition-colors duration-200 ${
                    seccionActiva === seccion 
                      ? 'text-primary dark:text-primary bg-primary/5 font-medium' 
                      : 'text-gray-700 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-800'
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
