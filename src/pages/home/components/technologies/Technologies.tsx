import { useRef, useEffect } from 'react';
import { backend, baseDeDatos, frontend, herramientasYEntornos } from './TechnologiesData';
import TechnologyCard from './TechnologyCard';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionTitle from '../../../../components/SectionTitle';

const categories = [
  { id: 'backend', title: 'Backend', data: backend },
  { id: 'database', title: 'Base de Datos', data: baseDeDatos },
  { id: 'frontend', title: 'Frontend', data: frontend },
  { id: 'tools', title: 'Herramientas', data: herramientasYEntornos },
];

export default function Technologies() {
  const containerRef = useRef<HTMLElement | null>(null);
  const categoryRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      categoryRefs.current.forEach((categoryRef) => {
        if (!categoryRef) return;

        const q = gsap.utils.selector(categoryRef);
        
        gsap.set(q('.category-title'), { opacity: 0, x: -20 });
        gsap.set(q('.tech-card'), { opacity: 0, y: 30 });

        ScrollTrigger.batch(q('.tech-card'), {
          start: 'top 85%',
          onEnter: batch => {
            gsap.to(batch, {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: 'power3.out',
              stagger: 0.05
            });
          },
          once: true
        });

        gsap.to(q('.category-title'), {
          opacity: 1,
          x: 0,
          duration: 0.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: categoryRef,
            start: 'top 85%',
            once: true,
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="technologies" ref={containerRef} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        <SectionTitle 
          title="Tecnologias que manejo"
          paragraph='A lo largo de mi formación y proyectos personales he trabajado con distintas tecnologías. Estas son las herramientas que conozco y con las que he resuelto desafíos prácticos, tanto en la universidad como por mi cuenta.'
        />

        <div className="space-y-12">
          {categories.map((category, categoryIndex) => (
            <div 
              key={category.id}
              ref={(el) => { categoryRefs.current[categoryIndex] = el; }}
              className="relative"
            >
              <div className="flex items-center gap-3 mb-6">
                <h3 className="category-title text-lg font-titulo font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  <span className="w-1 h-5 bg-primary rounded-full"></span>
                  {category.title}
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-gray-300/50 dark:from-neutral-700/50 to-transparent"></div>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {category.data.map((tecnologia, index) => (
                  <div key={index} className="tech-card">
                    <TechnologyCard
                      tecnologia={tecnologia}
                      index={index}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
