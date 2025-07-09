import { useState, useEffect } from 'react';

export default function Header() {
  const [estaEnDesplazamiento, setEstaEnDesplazamiento] = useState(false);
  const [seccionActiva, setSeccionActiva] = useState('home');
  const [menuAbierto, setMenuAbierto] = useState(false);

  useEffect(() => {
    const manejarDesplazamiento = () => {
      setEstaEnDesplazamiento(window.scrollY > 50);
      
      // Detectar sección activa automáticamente
      const secciones = ['home', 'about', 'technologies', 'projects', 'contact'];
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
  }, []);

  const irASeccion = (idSeccion) => {
    const elemento = document.getElementById(idSeccion);
    if (elemento) {
      elemento.scrollIntoView({ behavior: 'smooth' });
      setSeccionActiva(idSeccion);
    }
    // Cerrar menú móvil al hacer clic
    setMenuAbierto(false);
  };

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  const nombresSeccion = {
    home: 'Inicio',
    about: 'Sobre Mí',
    technologies: 'Tecnologías',
    projects: 'Proyectos',
    contact: 'Contacto'
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-gray-900/95 backdrop-blur-md shadow-xl">
      <div className="container mx-auto flex justify-between items-center p-4 max-w-7xl">
        {/* Logo con efecto hover */}
        <h1 
          className="text-xl sm:text-2xl font-extrabold hover:scale-105 transition-transform cursor-pointer"
          onClick={() => irASeccion('home')}
        >
          P. Igei Nakagawa
        </h1>
        
        {/* Navegación para desktop */}
        <nav className="hidden lg:block px-5">
          <ul className="flex space-x-8 text-lg">
            {['home', 'about', 'technologies', 'projects', 'contact'].map((seccion) => (
              <li key={seccion}>
                <button
                  onClick={() => irASeccion(seccion)}
                  className={`relative hover:text-blue-400 transition-colors duration-300 ${
                    seccionActiva === seccion ? 'text-blue-400' : 'text-white'
                  }`}
                >
                  {nombresSeccion[seccion]}
                  {/* Indicador activo */}
                  {seccionActiva === seccion && (
                    <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Botón para celulares */}
        <button
          onClick={toggleMenu}
          className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 group"
          aria-label="Abrir menú"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuAbierto ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuAbierto ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuAbierto ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Menú celulares */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
        menuAbierto ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <nav className="bg-gray-900/95 backdrop-blur-md border-t border-gray-700">
          <ul className="flex flex-col">
            {['home', 'about', 'technologies', 'projects', 'contact'].map((seccion) => (
              <li key={seccion}>
                <button
                  onClick={() => irASeccion(seccion)}
                  className={`w-full text-left px-6 py-4 hover:bg-gray-800 transition-colors duration-300 ${
                    seccionActiva === seccion ? 'text-blue-400 bg-gray-800' : 'text-white'
                  }`}
                >
                  {nombresSeccion[seccion]}
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