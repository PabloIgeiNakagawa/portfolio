import type { Proyecto as Project } from './ProjectsData';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-black/30 backdrop-blur-sm border border-steam-border rounded-sm overflow-hidden group hover:border-steam-blue/40 transition-all duration-300 flex flex-col">
      <div className="relative aspect-[2.5/1] overflow-hidden p-[2px] bg-steam-panel border-b border-steam-border">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>

      <div className="p-2.5 flex flex-col flex-1">
        <h4 className="font-titulo text-base font-medium text-steam-blue mb-1 hover:text-white cursor-pointer transition-colors line-clamp-1">
          {project.title}
        </h4>
        <p className="font-texto text-steam-text text-sm leading-relaxed flex-1 line-clamp-1 mb-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-2">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-2 py-0.5 bg-black/30 text-steam-text-light rounded-sm text-xs border border-steam-border"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-end gap-2 pt-2 border-t border-steam-border/50">
          {project.url && <a href={project.url} target="_blank" rel="noreferrer" className="text-xs bg-gradient-to-r from-steam-green-bright to-[#6b8a2b] text-white px-4 py-2 rounded-sm transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]">Código</a>}
          {project.demo && <a href={project.demo} target="_blank" rel="noreferrer" className="text-xs bg-steam-blue/20 hover:bg-steam-blue/40 border border-steam-blue/50 text-steam-blue px-3 py-1.5 rounded-sm transition-colors">Demo</a>}
        </div>
      </div>
    </div>
  );
}
