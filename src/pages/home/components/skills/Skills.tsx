import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionTitle from "../../../../components/SectionTitle";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const containerRef = useRef<HTMLElement | null>(null);

  const conceptos = [
    { title: "POO", description: "Programación Orientada a Objetos" },
    { title: "SOLID", description: "Principios de diseño de software" },
    { title: "MVC", description: "Arquitectura Modelo-Vista-Controlador" },
    { title: "UML", description: "Diagramas de clases, secuencia, actividad, estado, entidad-relacion y casos de uso" },
    { title: "Metodologías ágiles", description: "Scrum" },
  ];

  const habilidadesBlandas = [
    { title: "Trabajo en equipo", description: "Colaboración y coordinación en proyectos" },
    { title: "Comunicación", description: "Efectiva y clara, tanto oral como escrita" },
    { title: "Resolución de problemas", description: "Analizar errores y proponer soluciones eficientes" },
    { title: "Adaptabilidad", description: "Flexibilidad ante nuevos retos y tecnologías" },
    { title: "Aprendizaje rápido", description: "Capacidad de incorporar nuevas herramientas y conocimientos" },
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
            <ul className="grid gap-4 sm:grid-cols-2">
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
