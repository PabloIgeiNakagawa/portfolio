import proyectos from './ProjectsData';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl px-6 relative z-10">

        <div className="text-center mb-16">
          <h2 className="u-text-h2 text-4xl sm:text-5xl font-bold pb-4">Mis Proyectos</h2>
          <p className="u-text-p text-lg max-w-2xl mx-auto">
            Explora algunos de mis proyectos más destacados, desde aplicaciones web hasta APIs
          </p>
          <div className="u-linea-divisora"></div>
        </div>

        <div className="mb-8 space-y-8">
          {proyectos.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
