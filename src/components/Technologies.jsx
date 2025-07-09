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
    categoria: "Frontend"
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
  { 
    nombre: "Node.js", 
    icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
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
  }
];


export default function Technologies() {
  const [tecnologiaHover, setTecnologiaHover] = useState(null);

  return (
    <section id="technologies" className="py-20 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500 to-purple-500 opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-bl from-purple-500 to-pink-500 opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        
        {/* Título de sección */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold pb-4">
            Stack Tecnológico
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Tecnologías y herramientas que domino para crear soluciones completas
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Grid de tecnologías */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {tecnologias.map((tecnologia, indice) => (
            <div
              key={indice}
              className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20 hover:scale-105 cursor-pointer"
              onMouseEnter={() => setTecnologiaHover(indice)}
              onMouseLeave={() => setTecnologiaHover(null)}
            >
              {/* Efecto de brillo al hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
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
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg hidden items-center justify-center text-white font-bold text-xl">
                    {tecnologia.nombre.charAt(0)}
                  </div>
                </div>
                
                <h3 className="text-white font-semibold mb-2 group-hover:text-blue-300 transition-colors">
                  {tecnologia.nombre}
                </h3>
                
                <span className="text-xs text-gray-400">
                  {tecnologia.categoria}
                </span>
              </div>

              {/* Tooltip mejorado */}
              {tecnologiaHover === indice && (
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/90 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap z-20 border border-white/20">
                  <div className="font-medium">{tecnologia.nombre}</div>
                  <div className="text-xs text-gray-300">{tecnologia.categoria}</div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black/90"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
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