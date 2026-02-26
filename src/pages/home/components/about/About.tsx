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

      // Animación aparicion
      gsap.set(q('.efecto-aparicion'), { opacity: 0, y: 30 });
      ScrollTrigger.batch(q('.efecto-aparicion'), {
        start: 'top 85%',
        onEnter: batch => {
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            stagger: 0.15,
          });
        },
        once: true,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);


  return (
    <section id="about" ref={containerRef} className="py-20 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        <SectionTitle title="Sobre mí" />

        {/* Contenido principal */}
        <div className="mb-16">
          {/* Descripción ampliada */}
          <div className="space-y-6 prose prose-lg text-xl leading-relaxed font-texto">
            <p className="efecto-aparicion">
              ¡Hola! Soy <strong>Pablo</strong>, Desarrollador .NET y estudiante avanzado de la Licenciatura en Sistemas en la UNGS. Me defino como una persona curiosa y analítica, con una fuerte motivación por entender cómo funcionan las cosas para transformarlas en soluciones útiles y eficientes.
            </p>
            
            <p className="efecto-aparicion">
              Mi enfoque técnico se centra en el ecosistema <strong>.NET (C#)</strong> y bases de datos <strong>SQL Server</strong>, complementado con el desarrollo de interfaces dinámicas y responsivas utilizando JavaScript, HTML/CSS y Bootstrap. He diseñado e implementado soluciones integrales que van desde la lógica de negocio con arquitectura en capas y principios SOLID, hasta la integración de APIs externas para servicios de tiempo real. Me apasiona escribir código limpio, escalable y orientado a resolver problemas reales.
            </p>
            
            <p className="efecto-aparicion">
              Actualmente, busco mi primera posición profesional como <strong>Trainee o Junior</strong> para aportar mi capacidad técnica y proactividad en un equipo colaborativo. Estoy entusiasmado por la oportunidad de crecer profesionalmente, aprender de expertos en el campo y contribuir al desarrollo de proyectos innovadores que tengan un impacto positivo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
