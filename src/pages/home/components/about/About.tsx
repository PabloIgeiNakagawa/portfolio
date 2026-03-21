import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionTitle from '../../../../components/SectionTitle';

export default function About() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(containerRef);

      gsap.set(q('.about-content'), { opacity: 0, y: 30 });
      ScrollTrigger.batch(q('.about-content'), {
        start: 'top 80%',
        onEnter: batch => {
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.1,
          });
        },
        once: true,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        <SectionTitle title="Sobre mí" />

        <div className="w-full">
          <div className="relative bg-white dark:bg-neutral-900/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 lg:p-10 border border-gray-200/50 dark:border-neutral-700/50 shadow-lg">
            <div className="absolute top-0 left-0 w-16 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-br-full"></div>
            
            <div className="space-y-5">
              <div className="about-content">
                <p className="text-base md:text-lg text-gray-700 dark:text-neutral-300 leading-relaxed font-texto">
                  ¡Hola! Soy <span className="font-titulo font-semibold text-primary">Pablo</span>, Desarrollador .NET y estudiante avanzado de la Licenciatura en Sistemas en la UNGS. Me considero una persona curiosa y analítica, apasionada por resolver problemas, con una fuerte motivación por entender cómo funcionan las cosas para transformarlas en soluciones útiles y eficientes.
                </p>
              </div>
              
              <div className="about-content">
                <p className="text-base md:text-lg text-gray-700 dark:text-neutral-300 leading-relaxed font-texto">
                  Mi enfoque técnico se centra en el ecosistema <span className="font-medium text-gray-900 dark:text-white">.NET (C#)</span> y bases de datos <span className="font-medium text-gray-900 dark:text-white">SQL Server</span>, complementado con el desarrollo de interfaces web modernas y responsivas utilizando JavaScript, HTML/CSS y Bootstrap. He diseñado e implementado desde cero soluciones integrales que van desde la lógica de negocio con arquitectura en capas y principios SOLID, hasta la integración de APIs externas para servicios de tiempo real.
                </p>
              </div>
              
              <div className="about-content">
                <p className="text-base md:text-lg text-gray-700 dark:text-neutral-300 leading-relaxed font-texto">
                  Actualmente, busco mi primera experiencia profesional como <span className="font-titulo font-medium text-primary">Trainee o Junior</span> para aportar mi capacidad técnica y proactividad en un equipo colaborativo. Estoy entusiasmado por la oportunidad de crecer profesionalmente, aprender de expertos en el campo y contribuir al desarrollo de proyectos innovadores que tengan un impacto positivo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
