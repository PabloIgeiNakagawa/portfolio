import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionTitle from '../../../../components/SectionTitle';
import usePrefersReducedMotion from '../../../../hooks/usePrefersReducedMotion';

export default function About() {
  const containerRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useLayoutEffect(() => {
    if (prefersReducedMotion) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(containerRef);

      gsap.set(q('.about-content'), { opacity: 0, y: 30 });
      gsap.set(q('.animated-border'), { scaleY: 0, transformOrigin: 'top center' });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          once: true,
        },
      });

      tl.to(q('.animated-border'), { scaleY: 1, duration: 5, ease: 'power2.out' }, 0)
        .to(q('.about-content'), { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.2 }, 0);

    }, containerRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section id="about" ref={containerRef} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        <SectionTitle title="Sobre mí" />

        <div className="w-full pl-6 md:pl-8 relative">
          
          <div className="animated-border absolute left-0 top-0 bottom-0 w-[1px] bg-gray-300/50 dark:bg-border-neutral-600/50"></div>

          <div className="space-y-5">
            <div className="about-content">
              <p className="text-base md:text-lg text-gray-700 dark:text-neutral-300 leading-relaxed font-texto">
                <span className="font-titulo font-semibold text-primary">¡Hola! Soy Pablo,</span> Desarrollador .NET y estudiante avanzado de la Licenciatura en Sistemas en la UNGS. Actualmente me desempeño como desarrollador backend, trabajando principalmente con C#, .NET y SQL Server en soluciones orientadas a servicios y APIs.
              </p>
            </div>
            
            <div className="about-content">
              <p className="text-base md:text-lg text-gray-700 dark:text-neutral-300 leading-relaxed font-texto">
                Mi formación y experiencia se complementan con proyectos personales y académicos en los que he diseñado e implementado aplicaciones desde cero, aplicando Arquitectura Limpia, principios SOLID, Entity Framework Core, APIs REST y bases de datos relacionales. También cuento con experiencia en el desarrollo de interfaces web utilizando HTML, CSS, JavaScript y Bootstrap.
              </p>
            </div>
            
            <div className="about-content">
              <p className="text-base md:text-lg text-gray-700 dark:text-neutral-300 leading-relaxed font-texto">
                Me interesa especialmente el desarrollo backend y seguir profundizando en el ecosistema .NET, mejorando tanto mis conocimientos técnicos como mi capacidad para diseñar soluciones mantenibles y escalables. Disfruto entender cómo funcionan las cosas, resolver problemas y aprender nuevas tecnologías a través de proyectos y desafíos reales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
