import { proyectos } from './data/ProjectsData';
import ProjectCard from './components/ProjectCard';
import type { Proyecto as Project } from './data/ProjectsData';
import { useRef, useEffect } from 'react';
import SectionTitle from '../../../../components/SectionTitle';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Projects() {
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const cards = containerRef.current!.querySelectorAll<HTMLElement>('.project-card');

      gsap.set(cards, {
        opacity: 0,
        y: 50,
        scale: 0.98,
        transformOrigin: 'center center',
        force3D: true,
      });

      cards.forEach(card => {
        const inner = card.querySelector<HTMLElement>('.project-image-inner');
        const overlay = card.querySelector<HTMLElement>('.project-image-overlay');
        if (inner) gsap.set(inner, { clipPath: 'inset(100% 0 0 0)' }); // oculto desde abajo
        if (overlay) gsap.set(overlay, { opacity: 1 }); // overlay visible inicialmente
      });

      ScrollTrigger.batch(cards, {
        start: 'top 85%',
        onEnter: (batch) => {
          batch.forEach((card, i) => {
            const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
            tl.to(card, {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
            }, 0);
            const inner = card.querySelector<HTMLElement>('.project-image-inner');
            if (inner) {
              tl.to(inner, {
                clipPath: 'inset(0% 0 0 0)',
                duration: 0.9,
              }, 0.05);
            }
            const overlay = card.querySelector<HTMLElement>('.project-image-overlay');
            if (overlay) {
              tl.to(overlay, { opacity: 0, duration: 0.6 }, 0.12);
            }
            const content = card.querySelector<HTMLElement>('.project-card-content');
            if (content) {
              tl.fromTo(content, { y: 10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, 0.35);
            }
            tl.delay(i * 0.12);
          });
        },
        once: true
      });

    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section id="projects" className="py-20 relative overflow-hidden" ref={containerRef}>
      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        <SectionTitle
          title="Mis Proyectos"
          paragraph="Explora algunos de mis proyectos más destacados, desde aplicaciones web hasta APIs"
        />

        {/* Lista vertical de proyectos; cada ProjectCard debe recibir la clase `project-card` */}
        <div className="mb-8 space-y-8">
          {proyectos.map((project: Project, index: number) => (
            <ProjectCard key={index} project={project} className="project-card" />
          ))}
        </div>
      </div>
    </section>
  );
}
