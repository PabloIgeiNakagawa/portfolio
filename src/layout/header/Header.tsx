import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import DropdownTema from './DropdownTema';

type Seccion = 'hero' | 'about' | 'skills' | 'technologies' | 'projects' | 'contact';

export default function Header() {
  const [_, setEstaEnDesplazamiento] = useState<boolean>(false);
  const [seccionActiva, setSeccionActiva] = useState<Seccion>('hero');
  const [menuAbierto, setMenuAbierto] = useState<boolean>(false);
  const location = useLocation();
  const estaEnDetalle = location.pathname.startsWith('/projects/');
  const navigate = useNavigate();
  const navlinkClass = "relative cursor-pointer transition-colors duration-300 text-black hover:text-black/50 dark:text-white dark:hover:text-white/50 font-texto";
  const buttonSpan = "block w-6 h-0.5 bg-gray-700 dark:bg-neutral-300 transition-all duration-300"

  useEffect(() => {
    const manejarDesplazamiento = () => {
      setEstaEnDesplazamiento(window.scrollY > 50);
      
      const secciones: Seccion[] = ['hero', 'about', 'skills','technologies', 'projects', 'contact'];
      const posicionScroll = window.scrollY + 100; // Offset para mejor detección
      
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
    <header className="fixed top-0 left-0 w-full z-40 transition-all duration-300 bg-white/60 dark:bg-neutral-950/50 backdrop-blur-xs border-b border-gray-200 dark:border-neutral-700">
      <div className="container mx-auto flex justify-between items-center p-4 max-w-7xl">
        {/* Logo con efecto hover */}
        <h1 
          className="text-xl sm:text-2xl font-extrabold hover:scale-105 transition-transform cursor-pointer font-titulo"
          onClick={() => irASeccion('hero')}
        >
          {'{p}'}
        </h1>
        
        {/* Navegación para desktop */}
        <nav className="hidden lg:block px-5 ">
          <ul className="flex space-x-8 text-lg">
            {['hero', 'about', 'skills','technologies', 'projects', 'contact'].map((seccion) => (
              <li key={seccion}>
                <button
                  onClick={() => irASeccion(seccion as Seccion)}
                  className={`${navlinkClass} ${
                    seccionActiva === seccion 
                      ? 'font-bold animate-pulse' 
                      : ''
                  }`}
                >
                  {nombresSeccion[seccion as Seccion]}
                  {/* Indicador activo */}
                  {seccionActiva === seccion && (
                    <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-black dark:bg-white rounded-full animate-pulse"></span>
                  )}
                </button>
              </li>
            ))}
            <li>
              <DropdownTema />
            </li>
          </ul>
        </nav>
        
        {/* Contenedor flexible para móvil - Dropdown + Botón hamburguesa */}
        <div className="lg:hidden flex items-center space-x-2">
          {/* Dropdown para móvil */}
          <DropdownTema />
          
          {/* Botón hamburguesa */}
          <button
            onClick={toggleMenu}
            className="flex flex-col justify-center items-center w-8 h-8 space-y-1 group"
            aria-label="Abrir menú"
          >
            <span className={`${buttonSpan} ${menuAbierto ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`${buttonSpan} ${menuAbierto ? 'opacity-0' : ''}`}></span>
            <span className={`${buttonSpan} ${menuAbierto ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Menú celulares */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
        menuAbierto ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <nav className="bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border-t border-gray-200 dark:border-neutral-700">
          <ul className="flex flex-col">
            {['hero', 'about', 'skills','technologies', 'projects', 'contact'].map((seccion) => (
              <li key={seccion}>
                <button
                  onClick={() => irASeccion(seccion as Seccion)}
                  className={`w-full text-left px-6 py-4 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors duration-300 ${
                    seccionActiva === seccion 
                      ? 'bg-gray-100 dark:bg-neutral-800' 
                      : 'text-gray-700 dark:text-neutral-300'
                  }`}
                >
                  {nombresSeccion[seccion as Seccion]}
                  {/* Indicador activo para móvil */}
                  {seccionActiva === seccion && (
                    <span className="ml-2 text-xs">●</span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
