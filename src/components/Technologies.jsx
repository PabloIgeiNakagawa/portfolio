import { useState } from 'react';

const tecnologias = [
  // Frontend
  { 
    nombre: "HTML5", 
    icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    categoria: "Frontend"
  },
  { 
    nombre: "CSS3", 
    icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    categoria: "Frontend"
  },
  { 
    nombre: "JavaScript", 
    icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    categoria: "Frontend"
  },
  { 
    nombre: "React", 
    icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    categoria: "Frontend (Aprendiendo)"
  },
  { 
    nombre: "Tailwind CSS", 
    icono: "https://www.svgrepo.com/show/374118/tailwind.svg",
    categoria: "Frontend"
  },
  { 
    nombre: "Bootstrap", 
    icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    categoria: "Frontend"
  },
  // Backend
  { 
    nombre: ".NET", 
    icono: "https://www.vectorlogo.zone/logos/dotnet/dotnet-official.svg",
    categoria: "Backend"
  },
  { 
    nombre: "C#", 
    icono: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Logo_C_sharp.svg",
    categoria: "Backend"
  },

  // Base de Datos
  { 
    nombre: "SQL Server", 
    icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
    categoria: "Base de Datos"
  },

  // Herramientas
  { 
    nombre: "Git", 
    icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    categoria: "Herramientas"
  },
  { 
    nombre: "Visual Studio", 
    icono: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Visual_Studio_Icon_2022.svg",
    categoria: "Herramientas"
  },
  { 
    nombre: "Trello", 
    icono: "https://www.vectorlogo.zone/logos/trello/trello-icon.svg",
    categoria: "Herramientas"
  }
];

export default function Technologies() {
  const [tecnologiaHover, setTecnologiaHover] = useState(null);

  return (
    <section id="technologies" className="py-20 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        
        {/* Título de sección */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold pb-4 u-text-h2">
            Stack Tecnológico
          </h2>
          <p className="u-text-p text-lg max-w-2xl mx-auto">
            Tecnologías y Herramientas que utilizo para desarrollar soluciones eficientes y escalables.
          </p>
          <div className="u-linea-divisora"></div>
        </div>

        {/* Grid de tecnologías */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {tecnologias.map((tecnologia, indice) => (
            <div
              key={indice}
              className="group relative bg-white dark:bg-gray-900 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:scale-105 cursor-pointer shadow-lg"
              onMouseEnter={() => setTecnologiaHover(indice)}
              onMouseLeave={() => setTecnologiaHover(null)}
            >
              {/* Efecto de brillo al hover */}
              <div className="absolute inset-0 bg-gray-100 dark:bg-gray-700 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              
              {/* Contenido */}
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-4 flex items-center justify-center">
                  <img
                    src={tecnologia.icono}
                    alt={tecnologia.nombre}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-16 h-16 bg-gray-800 dark:bg-gray-200 rounded-lg hidden items-center justify-center text-white dark:text-gray-900 font-bold text-xl">
                    {tecnologia.nombre.charAt(0)}
                  </div>
                </div>
                
                <h3 className="u-text-h3 font-semibold mb-2 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                  {tecnologia.nombre}
                </h3>
                
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {tecnologia.categoria}
                </span>
              </div>

              {/* Tooltip mejorado */}
              {tecnologiaHover === indice && (
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-3 py-2 rounded-lg text-sm whitespace-nowrap z-20 border border-gray-700 dark:border-gray-300 shadow-lg">
                  <div className="font-medium">{tecnologia.nombre}</div>
                  <div className="text-xs text-gray-300 dark:text-gray-600">{tecnologia.categoria}</div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900 dark:border-t-gray-100"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="group inline-flex items-center gap-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <span>Ver proyectos realizados</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}