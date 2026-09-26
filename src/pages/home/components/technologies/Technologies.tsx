import { useRef, useLayoutEffect } from 'react';
import { allTechnologies } from './TechnologiesData';
import TechnologyCard from './TechnologyCard';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionTitle from '../../../../components/SectionTitle';
import usePrefersReducedMotion from '../../../../hooks/usePrefersReducedMotion';

export default function Technologies() {
  const containerRef = useRef<HTMLElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useLayoutEffect(() => {
    if (prefersReducedMotion) return;
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
  }, [prefersReducedMotion]);

  return (
    <section id="technologies" ref={containerRef} className="py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        <SectionTitle 
          title="Tecnologías"
          paragraph="Lenguajes, frameworks y herramientas"
        />

        <div ref={gridRef} className="-m-1 flex flex-wrap justify-center">
          {allTechnologies.map((tecnologia) => (
            <div key={tecnologia.nombre} className="tech-card w-1/2 p-1 sm:w-1/3 lg:w-1/4">
              <TechnologyCard tecnologia={tecnologia} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
