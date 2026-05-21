import { useRef, useEffect } from 'react';
import { allTechnologies } from './TechnologiesData';
import TechnologyCard from './TechnologyCard';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionTitle from '../../../../components/SectionTitle';

export default function Technologies() {
  const containerRef = useRef<HTMLElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (!gridRef.current) return;

      const cards = gridRef.current.querySelectorAll('.tech-card');
      gsap.set(cards, { opacity: 0, y: 30 });

      ScrollTrigger.batch(cards, {
        start: 'top 85%',
        onEnter: batch => {
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: 'power3.out',
            stagger: 0.03
          });
        },
        once: true
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="technologies" ref={containerRef} className="py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        <SectionTitle 
          title="Tecnologias que manejo"
          paragraph='A lo largo de mi formación y proyectos personales he trabajado con distintas tecnologías. Estas son las herramientas que conozco y con las que he resuelto desafíos prácticos, tanto en la universidad como por mi cuenta.'
        />

        <div ref={gridRef} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
          {allTechnologies.map((tecnologia, index) => (
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
