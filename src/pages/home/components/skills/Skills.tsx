import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionTitle from "../../../../components/SectionTitle";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const containerRef = useRef<HTMLElement | null>(null);

  const conceptos = [
    {
      title: "Programación orientada a objetos",
      description: "Aplicación de encapsulamiento, abstracción y separación de responsabilidades."
    },
    {
      title: "Principios SOLID",
      description: "Organización de lógica de negocio con bajo acoplamiento y alta cohesión."
    },
    {
      title: "Arquitectura en capas",
      description: "Separación entre presentación, aplicación, dominio e infraestructura."
    },
    {
      title: "CQS",
      description: "Separación entre operaciones de lectura y escritura para mayor claridad."
    },
    {
      title: "Modelado relacional",
      description: "Diseño de tablas, claves primarias/foráneas y normalización de datos."
    },
    {
      title: "UML",
      description: "Comprensión de diagramas de clases, secuencia, actividad y casos de uso."
    },
    {
      title: "Metodologías de desarrollo",
      description: "Conocimiento de enfoques ágiles (Scrum) y metodología tradicional."
    }
  ];

  const habilidadesBlandas = [
    {
      title: "Trabajo en equipo",
      description: "Colaboración en proyectos grupales utilizando control de versiones y organización de tareas."
    },
    {
      title: "Comunicación técnica",
      description: "Capacidad de fundamentar decisiones de diseño y estructura del sistema."
    },
    {
      title: "Autonomía en el aprendizaje",
      description: "Búsqueda y aplicación de documentación oficial para resolver problemas técnicos."
    },
    {
      title: "Pensamiento analítico",
      description: "Análisis de problemas y evaluación de distintas alternativas de implementación."
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(containerRef);

      gsap.set(q(".efecto-aparicion"), { opacity: 0, y: 20 });

      ScrollTrigger.batch(q(".efecto-aparicion"), {
        start: "top 85%",
        batchMax: 6,
        onEnter: (batch) => {
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.45,
            ease: "power3.out",
            stagger: { each: 0.08 },
          });
        },
        once: true,
      });
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section id="skills" ref={containerRef} className="py-20 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        <SectionTitle title="Habilidades y Conocimientos" />

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {/* Conceptos */}
          <div>
            <h3 className="text-xl font-semibold mb-6 font-titulo">Conceptos de desarrollo</h3>

            <div className="grid gap-4 sm:grid-cols-2">
              {conceptos.map((c) => (
                <article
                  key={c.title}
                  className="efecto-aparicion p-4 rounded-2xl border border-gray-100 dark:border-neutral-800 bg-white/0 dark:bg-transparent shadow-sm hover:shadow-md transition-transform duration-200"
                  aria-labelledby={`concept-${c.title}`}
                >
                  <div className="min-w-0 font-texto">
                    <h4 id={`concept-${c.title}`} className="font-subtitulo font-semibold text-gray-900 dark:text-gray-100">
                      {c.title}
                    </h4>
                    <p className="font-texto text-sm text-gray-600 dark:text-gray-300">{c.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Habilidades blandas */}
          <div>
            <h3 className="text-xl font-semibold mb-6 font-titulo">Habilidades blandas</h3>
            <ul className="grid gap-4">
              {habilidadesBlandas.map((h) => (
                <li key={h.title} className="efecto-aparicion">
                  <div className="flex items-start gap-4 p-4 rounded-2xl border border-gray-100 dark:border-neutral-800 bg-white/0 dark:bg-transparent shadow-sm hover:shadow-md transition-all duration-200">
                    <div className="min-w-0 font-texto ">
                      <p className="font-subtitulo font-semibold text-gray-900 dark:text-gray-100">{h.title}</p>
                      <p className="font-texto text-sm text-gray-600 dark:text-gray-300">{h.description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
