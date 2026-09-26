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
                  <span className="font-titulo font-semibold text-primary">¡Hola! Soy Pablo</span>, Desarrollador .NET 
                  y estudiante avanzado de la Licenciatura en Sistemas en la UNGS, donde ya completé el 70% de la carrera 
                  y me encuentro a un solo examen final de recibirme de Técnico Universitario en Informática. 
                  Me considero una persona curiosa y analítica, con una fuerte motivación por entender cómo funcionan las cosas para transformarlas en soluciones de software eficientes.
                </p>
            </div>
            
            <div className="about-content">
              <p className="text-base md:text-lg text-gray-700 dark:text-neutral-300 leading-relaxed font-texto">
                  Mi enfoque técnico se centra en el ecosistema <span className="font-medium text-gray-900 dark:text-white">.NET (C#)
                  </span> y <span className="font-medium text-gray-900 dark:text-white">SQL Server</span>, complementado con el desarrollo de interfaces web utilizando JavaScript 
                  y Bootstrap. En mis proyectos personales y académicos, he diseñado e implementado soluciones desde cero: desde la lógica de negocio aplicando 
                  Arquitectura Limpia/en Capas y principios SOLID, hasta la integración de APIs externas y servicios en tiempo real.
                </p>
            </div>
            
            <div className="about-content">
              <p className="text-base md:text-lg text-gray-700 dark:text-neutral-300 leading-relaxed font-texto">
                  Actualmente, busco mi primera experiencia profesional (<span className="font-titulo font-medium text-primary">Trainee / Junior / Pasantía</span>) en el sector IT. 
                  Estoy listo para aportar mi capacidad técnica, proactividad y mentalidad colaborativa en un equipo donde pueda seguir aprendiendo de expertos 
                  y contribuir al desarrollo de software con impacto real.
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
