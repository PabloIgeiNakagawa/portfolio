import React from 'react';

function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-12 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Información personal */}
          <div>
            <h3 className="text-lg font-semibold u-text-h3 mb-4">Pablo Igei Nakagawa</h3>
            <p className="u-text-p text-sm leading-relaxed">
              Desarrollador Full Stack apasionado por crear soluciones innovadoras 
              y experiencias digitales excepcionales.
            </p>
          </div>

          {/* Enlaces útiles */}
          <div>
            <h3 className="text-lg u-text-h3 font-semibold mb-4">Navegación</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
                  Sobre Mí
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
                  Proyectos
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Información de contacto */}
          <div>
            <h3 className="text-lg u-text-h3 font-semibold mb-4">Contacto</h3>
            <div className="space-y-2 text-sm u-text-p">
              <p>
                Buenos Aires, Argentina
              </p>
              <p>
                Disponible para proyectos
              </p>
              <p>
                Buscando oportunidades laborales
              </p>
            </div>
          </div>
        </div>

        {/* Separador */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="u-text-p text-sm">
                © {new Date().getFullYear()} Pablo. Todos los derechos reservados.
              </p>
            </div>

            {/* Información adicional */}
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm u-text-p">
              <span>
                Hecho con React y Tailwind CSS
              </span>
              <span>
                Diseño responsivo
              </span>
            </div>
          </div>
        </div>

        {/* Scroll to top button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 p-3 rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 hover:scale-110 group"
            aria-label="Volver arriba"
          >
            <svg 
              className="w-5 h-5 transform group-hover:-translate-y-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 15l7-7 7 7" 
              />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;