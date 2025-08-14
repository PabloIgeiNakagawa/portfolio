import { useState, useRef, useEffect } from 'react';
import { tecnologias } from './data/TechnologiesData';
import TechnologyCard from './components/TechnologyCard';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionTitle from '../../../../components/SectionTitle';

export default function Technologies() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
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

        {/* Grid de tecnologías */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
          {tecnologias.map((tecnologia, index) => (
            <div key={index} className="tech-card">
              <TechnologyCard
                tecnologia={tecnologia}
                onHover={setHoverIndex}
                isHovered={hoverIndex === index}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
