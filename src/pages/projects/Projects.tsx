import { proyectos } from './ProjectsData';
import ProjectCard from './ProjectCard';
import type { Proyecto as Project} from './ProjectsData';
import { useRef } from 'react';
import SectionTitle from '../../components/SectionTitle';

export default function Projects() {
  const containerRef = useRef<HTMLElement | null>(null);

  return (
    <section id="projects" className="py-20 relative overflow-hidden" ref={containerRef}>
      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        <SectionTitle title="Mis Proyectos"
          paragraph='Explora algunos de mis proyectos más destacados, desde aplicaciones web hasta APIs'
        />

        <div className="mb-8 space-y-8">
          {proyectos.map((project: Project, index: number) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
