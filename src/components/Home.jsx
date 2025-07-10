import { useState, useEffect } from 'react';
import CV from '../assets/CV_PabloIgeiNakagawa.pdf';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/PabloIgeiNakagawa',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w</svg>-6 h-6">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/pablo-igei-nakagawa-4aaa06367/',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w</svg>-6 h-6">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: 'Email',
      url: 'mailto:pabloigeinaka@gmail.com',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
        </svg>
      )
    },
    {
      name: 'CV',
      url: CV,
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5 20h14v-2H5v2zm7-18a1 1 0 011 1v10.586l3.293-3.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L11 13.586V3a1 1 0 011-1z" />
        </svg>
      ),
      download: true
    }
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden"
    >

      {/* Contenido principal */}
      <div className={`relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

        {/* Nombre principal */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 drop-shadow-2xl u-text-h1">
          <span>
            Pablo Igei
          </span>
          <br />
          <span>
            Nakagawa
          </span>
        </h1>

        {/* Título profesional fijo */}
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold u-text-h2">
            Estudiante de Sistemas | React & .NET
          </h2>
        </div>

        {/* Descripción mejorada */}
        <p className="max-w-2xl mb-8 text-lg sm:text-xl leading-relaxed u-text-p">
          Especializado en transformar ideas en experiencias digitales únicas. 
          Creo interfaces modernas y funcionales con React, .NET y Tailwind CSS.
        </p>

        {/* Enlaces sociales */}
        <div className="flex justify-center gap-6 mb-10">
          {socialLinks.map((link, index) => (
            <div key={index} className="relative group flex flex-col items-center">
              {/* El botón social con padding y fondo */}
              <a
                href={link.url}
                target={link.name !== 'Email' ? '_blank' : undefined}
                rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                className="u-a-social"
                aria-label={link.name}
                {...(link.download ? { download: true } : {})}
              >
                <div className="text-gray-900 dark:text-white transition-colors duration-300">
                  {link.icon}
                </div>
              </a>

              {/* Tooltip fuera del botón, justo arriba */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs px-4 py-1 rounded shadow-lg z-20 whitespace-nowrap min-w-max pointer-events-none">
                {link.name}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-4 border-transparent border-t-gray-900 dark:border-t-white"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Botón de acción principal */}
        <div className="flex justify-center">
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-100 text-white dark:text-gray-900 font-semibold py-4 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-3"
          >
            <span className="relative z-10">Conoce más sobre mí</span>
            <svg 
              className="w-5 h-5 text-white dark:text-gray-900 animate-bounce relative z-10" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}