import { proyectos } from './ProjectsData';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section id="projects" className="w-full scroll-mt-28">
      <div className="bg-steam-panel backdrop-blur-xl rounded-sm overflow-hidden">
        <div className="bg-white/5 px-4 py-2.5">
          <h2 className="text-steam-text-light text-lg font-semibold tracking-wide">Proyectos</h2>
        </div>

        <div className="p-4 md:p-6">
          <div className="grid grid-cols-1 gap-4">
            {proyectos.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
