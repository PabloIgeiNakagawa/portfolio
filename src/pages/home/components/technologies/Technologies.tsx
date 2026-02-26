import { useRef, useEffect } from 'react';
import { backend, baseDeDatos, frontend, herramientasYEntornos } from './TechnologiesData';
import TechnologyCard from './TechnologyCard';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionTitle from '../../../../components/SectionTitle';

export default function Technologies() {
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(containerRef);

      // Animación de los cards
      gsap.set(q('.tech-card'), { opacity: 0, y: 30 });
      ScrollTrigger.batch(q('.tech-card'), {
        start: 'top 85%',
        onEnter: batch => {
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power3.out',
            stagger: 0.06
          });
        },
        once: true
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="technologies" ref={containerRef} className="py-20 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        <SectionTitle title="Tecnologias que manejo"
          paragraph='A lo largo de mi formación y proyectos personales he trabajado con distintas tecnologías. Estas son las herramientas que conozco y con las que he resuelto desafíos prácticos, tanto en la universidad como por mi cuenta.'
        />

        {/* Backend */}
        <h3 className="text-xl font-semibold mb-6 font-titulo border-l-4 border-gray-900 dark:border-white pl-3">Backend</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 mb-5">
          {backend.map((tecnologia, index) => (
            <div key={index} className="tech-card">
              <TechnologyCard
                tecnologia={tecnologia}
                index={index}
              />
            </div>
          ))}
        </div>

        {/* Base de Datos */}
        <h3 className="text-xl font-semibold mb-6 font-titulo border-l-4 border-gray-900 dark:border-white pl-3">Base de Datos</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 mb-5">
          {baseDeDatos.map((tecnologia, index) => (
            <div key={index} className="tech-card">
              <TechnologyCard
                tecnologia={tecnologia}
                index={index}
              />
            </div>
          ))}
        </div>

        {/* Frontend */}
        <h3 className="text-xl font-semibold mb-6 font-titulo border-l-4 border-gray-900 dark:border-white pl-3">Frontend</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-5">
          {frontend.map((tecnologia, index) => (
            <div key={index} className="tech-card">
              <TechnologyCard
                tecnologia={tecnologia}
                index={index}
              />
            </div>
          ))}
        </div>

        {/* Herramientas y Entornos de Desarrollo */}
        <h3 className="text-xl font-semibold mb-6 font-titulo border-l-4 border-gray-900 dark:border-white pl-3">Herramientas y Entornos de Desarrollo</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-5">
          {herramientasYEntornos.map((tecnologia, index) => (
            <div key={index} className="tech-card">
              <TechnologyCard
                tecnologia={tecnologia}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
