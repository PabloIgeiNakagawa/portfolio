import { useState } from 'react';
import BotonScroll from '../common/BotonScroll';
import HighlightCard from './HighlightCard';

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
      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        
        {/* Título de sección */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 u-text-h2">
            Sobre mí
          </h2>
          <div className="u-linea-divisora"></div>
        </div>

        {/* Contenido principal */}
        <div className="mb-16">
          
          {/* Imagen y info personal */}
          <div className="text-center lg:text-left flex flex-col justify-center items-center mb-6">
            <div className="relative inline-block mb-8">
              <div className="absolute inset-0 bg-gray-400 dark:bg-gray-600 rounded-full blur opacity-20"></div>
              <img
                src="https://via.placeholder.com/350x350.png?text=Pablo+Nakagawa"
                alt="Pablo Igei Nakagawa"
                className={`relative rounded-full w-80 h-80 object-cover shadow-2xl border-4 border-gray-200 dark:border-gray-700 transition-all duration-700 ${
                  imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                onLoad={() => setImageLoaded(true)}
              />
            </div>

            {/* Información personal */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold u-text-h3">Pablo Igei Nakagawa</h3>
              <p className="u-text-p text-lg">Full Stack Developer</p>
            </div>
          </div>


          {/* Descripción ampliada */}
          <div className="space-y-6 prose prose-lg u-text-p text-xl leading-relaxed">
            <p>
              ¡Hola! Me llamo Pablo, soy una persona curiosa, honesta y empática. Me apasiona el fútbol, la música y los videojuegos, y disfruto aprender cosas nuevas, especialmente si me permiten mejorar o crear algo útil. Siempre trato de ir un poco más allá, de entender cómo funcionan las cosas y de buscarle la vuelta a los desafíos.
            </p>
            <p>
              Actualmente estudio Licenciatura en Sistemas en la Universidad Nacional de General Sarmiento (UNGS), y en paralelo desarrollo proyectos propios donde aplico lo que aprendo y experimento con nuevas tecnologías. Me estoy formando como Full Stack Developer, con un enfoque en React y .NET, y me gusta trabajar tanto en la lógica como en el diseño de las interfaces.
            </p>
            <p>
              Estoy buscando mi primera experiencia profesional donde pueda seguir creciendo, aportar lo que sé y aprender de otros. Valoro los equipos que comparten conocimientos, tienen buena comunicación y disfrutan construir cosas juntos.
            </p>
          </div>

        </div>

        {/* Highlights/Características */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <HighlightCard items={highlights} />
        </div>
      </div>
      <div className="flex justify-center mt-16">
        <BotonScroll idDestino="technologies" texto="Ver tecnologías que uso" />
      </div>
    </section>
  );
}