import { useState } from 'react';

export default function About() {
  const [imageLoaded, setImageLoaded] = useState(false);

  const highlights = [
    { icon: '🎯', title: 'Orientado a resultados', desc: 'Enfoque en soluciones efectivas y escalables' },
    { icon: '🚀', title: 'Siempre aprendiendo', desc: 'Constantemente explorando nuevas tecnologías' },
    { icon: '👥', title: 'Trabajo en equipo', desc: 'Comunicación clara y colaboración efectiva' },
    { icon: '⚡', title: 'Desarrollo ágil', desc: 'Entregas rápidas manteniendo la calidad' }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-blue-500 to-purple-500 opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-500 to-pink-500 opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        
        {/* Título de sección */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Sobre mí
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Contenido principal */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          
          {/* Imagen y info personal */}
          <div className="text-center lg:text-left">
            <div className="relative inline-block mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-20"></div>
              <img
                src="https://via.placeholder.com/350x350.png?text=Pablo+Nakagawa"
                alt="Pablo Igei Nakagawa"
                className={`relative rounded-full w-80 h-80 object-cover shadow-2xl transition-all duration-700 ${
                  imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                onLoad={() => setImageLoaded(true)}
              />
            </div>

            {/* Información personal */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Pablo Igei Nakagawa</h3>
              <p className="text-blue-300 text-lg">Full Stack Developer</p>
            </div>
          </div>

          {/* Descripción ampliada */}
          <div className="space-y-6">
            
            {/* Descripción concisa */}
            <div className="prose prose-lg text-gray-200">
              <p className="text-xl leading-relaxed">
                Estudiante de Licenciatura en Sistemas en la Universidad Nacional de General Sarmiento (UNGS), donde complemento la formación académica con proyectos propios y desafíos técnicos que me permiten aplicar y profundizar mis conocimientos.
              </p>
              <p className="text-xl leading-relaxed mt-6">
                Me desempeño como Full Stack Developer Junior con enfoque en React y .NET, habiendo desarrollado diversas aplicaciones que integran buenas prácticas, lógica de negocio y una interfaz cuidada. 
                Busco siempre mejorar lo que construyo, explorando nuevas herramientas y abordando cada proyecto con curiosidad técnica y atención al detalle. 
                Estoy preparado para integrarme a un equipo de desarrollo y seguir perfeccionando mis habilidades en un entorno profesional.
              </p>
            </div>
          </div>
        </div>

        {/* Highlights/Características */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div 
              key={index} 
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300 border border-white/10"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h4 className="text-white font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-300 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <button
            onClick={() => document.getElementById('technologies')?.scrollIntoView({ behavior: 'smooth' })}
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <span>Ver tecnologías que uso</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}