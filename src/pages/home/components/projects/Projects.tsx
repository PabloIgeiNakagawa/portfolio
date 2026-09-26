import { proyectos } from './ProjectsData';
import ProjectCard from './ProjectCard';
import type { Proyecto as Project } from './ProjectsData';
import { useRef, useLayoutEffect } from 'react';
import SectionTitle from '../../../../components/SectionTitle';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import usePrefersReducedMotion from '../../../../hooks/usePrefersReducedMotion';

export default function Projects() {
  const containerRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useLayoutEffect(() => {
    if (prefersReducedMotion) return;
    gsap.registerPlugin(ScrollTrigger);

    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const cards = containerRef.current!.querySelectorAll<HTMLElement>('.project-card');
      gsap.set(cards, { opacity: 0, y: 30 });

      ScrollTrigger.batch(cards, {
        start: 'top 85%',
        onEnter: (batch) => {
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: 'power2.out',
          });
        },
        once: true
      });

    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, [prefersReducedMotion]);

  return (
    <section id="projects" className="py-20 relative overflow-hidden" ref={containerRef}>
      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        <SectionTitle title="Proyectos" paragraph="Explorá algunos de mis proyectos más destacados."/>
        <div className="grid auto-rows-fr grid-cols-1 md:grid-cols-2 gap-6">
          {proyectos.map((project: Project, index: number) => (
            <ProjectCard key={index} project={project} className="project-card" />
          ))}
        </div>
      </div>
    </section>
  );
}
