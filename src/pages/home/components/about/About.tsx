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
              ¡Hola! Me llamo Pablo, soy una persona curiosa, honesta y empática. Me apasiona el fútbol, la música y los videojuegos, y disfruto aprender cosas nuevas, especialmente si me permiten mejorar o crear algo útil. Siempre trato de ir un poco más allá, de entender cómo funcionan las cosas y de buscarle la vuelta a los desafíos.
            </p>
            <p className="efecto-aparicion">
              Actualmente estudio la Licenciatura en Sistemas en la Universidad Nacional de General Sarmiento (UNGS), y estoy próximo a finalizar la Tecnicatura Universitaria en Informática. En paralelo, desarrollo proyectos propios donde aplico lo que aprendo y experimento con nuevas tecnologías. Me estoy formando como Full Stack Developer, con un enfoque en React y .NET, y disfruto trabajar tanto en la lógica como en el diseño de las interfaces.
            </p>
            <p className="efecto-aparicion">
              Estoy buscando mi primera experiencia profesional donde pueda seguir creciendo, aportar lo que sé y aprender de otros. Valoro los equipos que comparten conocimientos, tienen buena comunicación y disfrutan construir cosas juntos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
