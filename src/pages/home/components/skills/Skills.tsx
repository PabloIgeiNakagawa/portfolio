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
    },
    {
      title: "Control de versiones",
      description: "Gestión de cambios en el código con Git, ramas, merge y resolución de conflictos."
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
    },
    {
      title: "Resolución de problemas",
      description: "Capacidad para identificar, diagnosticar y encontrar soluciones eficientes a desafíos técnicos."
    },
    {
      title: "Proactividad",
      description: "Iniciativa para anticipar necesidades y actuar sin esperar instrucciones."
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
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        <SectionTitle title="Habilidades y Conocimientos" />

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          {/* Conceptos */}
          <div>
            <h3 className="efecto-aparicion text-lg font-titulo font-semibold text-gray-900 dark:text-white mb-5 flex items-center gap-2">
              <span className="w-1 h-5 bg-primary rounded-full"></span>
              Conceptos de desarrollo
            </h3>

            <div className="grid gap-3 sm:grid-cols-2">
              {conceptos.map((c) => (
                <article
                  key={c.title}
                  className="efecto-aparicion p-4 rounded-xl border border-gray-200/50 dark:border-neutral-700/50 bg-white/60 dark:bg-neutral-900/60 backdrop-blur-sm hover:bg-white dark:hover:bg-neutral-800 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-0.5 transition-all duration-200 cursor-default"
                  aria-labelledby={`concept-${c.title}`}
                >
                  <div className="min-w-0">
                    <h4 id={`concept-${c.title}`} className="font-titulo font-medium text-sm text-gray-900 dark:text-white mb-1">
                      {c.title}
                    </h4>
                    <p className="font-texto text-xs text-gray-600 dark:text-neutral-400 leading-relaxed">{c.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Habilidades blandas */}
          <div>
            <h3 className="efecto-aparicion text-lg font-titulo font-semibold text-gray-900 dark:text-white mb-5 flex items-center gap-2">
              <span className="w-1 h-5 bg-primary rounded-full"></span>
              Habilidades blandas
            </h3>
            <ul className="grid gap-3">
              {habilidadesBlandas.map((h) => (
                <li key={h.title} className="efecto-aparicion">
                  <div className="flex items-start gap-4 p-4 rounded-xl border border-gray-200/50 dark:border-neutral-700/50 bg-white/60 dark:bg-neutral-900/60 backdrop-blur-sm hover:bg-white dark:hover:bg-neutral-800 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-0.5 transition-all duration-200">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <div className="min-w-0">
                      <p className="font-titulo font-medium text-sm text-gray-900 dark:text-white mb-1">{h.title}</p>
                      <p className="font-texto text-xs text-gray-600 dark:text-neutral-400 leading-relaxed">{h.description}</p>
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
