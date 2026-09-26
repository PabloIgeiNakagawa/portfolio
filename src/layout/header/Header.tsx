import { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import DropdownTema from './DropdownTema';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';

type Seccion = 'hero' | 'about' | 'skills' | 'technologies' | 'projects' | 'contact';
const secciones: Seccion[] = ['hero', 'about', 'skills', 'technologies', 'projects', 'contact'];

export default function Header() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [seccionActiva, setSeccionActiva] = useState<Seccion>('hero');
  const [menuAbierto, setMenuAbierto] = useState<boolean>(false);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const actualizarHeader = () => setScrolled(window.scrollY > 20);
    actualizarHeader();
    window.addEventListener('scroll', actualizarHeader, { passive: true });

    const elementos = secciones
      .map((seccion) => document.getElementById(seccion))
      .filter((elemento): elemento is HTMLElement => elemento !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibles = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        const id = visibles[0]?.target.id as Seccion | undefined;
        if (id) setSeccionActiva(id);
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 },
    );

    elementos.forEach((elemento) => observer.observe(elemento));

    return () => {
      window.removeEventListener('scroll', actualizarHeader);
      observer.disconnect();
    };
  }, [location.pathname]);

  const irASeccion = (idSeccion: Seccion) => {
    if (location.pathname !== '/') {
      navigate({ pathname: '/', hash: `#${idSeccion}` }, { state: { seccionScroll: idSeccion } });
    } else {
      const elemento = document.getElementById(idSeccion);
      if (elemento) {
        elemento.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
        window.history.replaceState(window.history.state, '', `/#${idSeccion}`);
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
        <a
          className="text-2xl font-bold hover:scale-105 transition-transform duration-200 cursor-pointer font-titulo"
          onClick={(event) => {
            event.preventDefault();
            irASeccion('hero');
          }}
          href="/#hero"
          aria-label="Ir al inicio"
        >
          {'{p}'}
        </a>
        
        <nav className="hidden lg:flex items-center gap-1">
          <ul className="flex items-center gap-1">
            {secciones.map((seccion) => (
              <li key={seccion}>
                <a
                  href={`/#${seccion}`}
                  onClick={(event) => {
                    event.preventDefault();
                    irASeccion(seccion);
                  }}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer ${
                    seccionActiva === seccion 
                      ? 'text-primary dark:text-primary bg-primary/10' 
                      : 'text-gray-600 dark:text-neutral-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-neutral-800'
                  }`}
                  aria-current={seccionActiva === seccion ? 'location' : undefined}
                >
                  {nombresSeccion[seccion as Seccion]}
                </a>
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
            ref={menuButtonRef}
            onClick={toggleMenu}
            className="flex justify-center items-center w-8 h-8 cursor-pointer"
            aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuAbierto}
            aria-controls="mobile-navigation"
          >
            <div className="relative w-5 h-5">
              <span className={`absolute top-1/2 left-0 w-full h-0.5 bg-gray-600 dark:bg-neutral-400 transition-all duration-300 ${menuAbierto ? 'rotate-45' : '-translate-y-1'}`}></span>
              <span className={`absolute top-1/2 left-0 w-full h-0.5 bg-gray-600 dark:bg-neutral-400 transition-all duration-300 ${menuAbierto ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}></span>
              <span className={`absolute top-1/2 left-0 w-full h-0.5 bg-gray-600 dark:bg-neutral-400 transition-all duration-300 ${menuAbierto ? '-rotate-45' : 'translate-y-1'}`}></span>
            </div>
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        aria-hidden={!menuAbierto}
        inert={!menuAbierto}
        onKeyDown={(event) => {
          if (event.key === 'Escape') {
            setMenuAbierto(false);
            menuButtonRef.current?.focus();
          }
        }}
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-out ${
        menuAbierto ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <nav className="bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border-t border-gray-200/80 dark:border-neutral-800/80">
          <ul className="flex flex-col py-2">
            {secciones.map((seccion) => (
              <li key={seccion}>
                <a
                  href={`/#${seccion}`}
                  onClick={(event) => {
                    event.preventDefault();
                    irASeccion(seccion);
                    menuButtonRef.current?.focus();
                  }}
                  className={`w-full text-left px-6 py-3 mx-2 my-0.5 rounded-lg transition-all duration-150 ${
                    seccionActiva === seccion 
                      ? 'text-primary dark:text-primary bg-primary/10 font-medium' 
                      : 'text-gray-700 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-800'
                  }`}
                  aria-current={seccionActiva === seccion ? 'location' : undefined}
                >
                  {nombresSeccion[seccion as Seccion]}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
