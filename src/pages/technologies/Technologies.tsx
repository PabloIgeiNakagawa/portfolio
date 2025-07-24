import { useState } from 'react';
import ButtonScroll from '../../components/ButtonScroll';
import { tecnologias } from './TechnologiesData';
import TechnologyCard from './TechnologyCard';

export default function Technologies() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <section id="technologies" className="py-20 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        {/* Título de sección */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold pb-4 u-text-h2">
            Tecnologías que manejo
          </h2>
          <p className="u-text-p text-lg max-w-2xl mx-auto">
            A lo largo de mi formación y proyectos personales he trabajado con distintas tecnologías. Estas son las herramientas que conozco y con las que he resuelto desafíos prácticos, tanto en la universidad como por mi cuenta.
          </p>
          <div className="u-linea-divisora"></div>
        </div>

        {/* Grid de tecnologías */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {tecnologias.map((tecnologia, index) => (
            <TechnologyCard
              key={index}
              tecnologia={tecnologia}
              onHover={setHoverIndex}
              isHovered={hoverIndex === index}
              index={index}
            />
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <ButtonScroll idDestino="projects" texto="Ver proyectos realizados" />
        </div>
      </div>
    </section>
  );
}
