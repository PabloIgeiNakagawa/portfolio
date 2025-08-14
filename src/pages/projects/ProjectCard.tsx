import { Link } from 'react-router-dom';
import { ButtonCode, ButtonDemo, ButtonInfo } from './Buttons';
import type { Proyecto as Project } from './ProjectsData';

const statusColors: Record<string, string> = {
  "Completado": "bg-green-600 dark:bg-green-400 text-white",
  "En desarrollo": "bg-orange-600 dark:bg-orange-400 text-white",
  "Planificado": "bg-blue-600 dark:bg-blue-400 text-white"
};

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-neutral-700 hover:border-gray-300 dark:hover:border-neutral-600 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
      <div className="flex flex-col lg:flex-row">
        {/* Imagen */}
        <div className="relative w-full lg:w-1/3 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 sm:h-64 lg:h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/50 to-transparent"></div>

          {/* Estado */}
          <span
            className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium shadow-md ${statusColors[project.status]}`}
          >
            {project.status}
          </span>
        </div>

        {/* Contenido */}
        <div className="p-5 sm:p-7 flex flex-col flex-1">
          <div className="flex-1">
            <h4 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {project.title}
            </h4>
            <p className="text-gray-600 dark:text-neutral-300 text-sm sm:text-base mb-5 leading-relaxed">
              {project.description}
            </p>

            {/* Tecnologías */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-neutral-300 rounded-full text-xs sm:text-sm hover:bg-gray-200 dark:hover:bg-neutral-700 transition"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Botones */}
          <div className="flex flex-wrap gap-3 pt-3 border-t border-gray-200 dark:border-neutral-700">
            {project.url && <ButtonCode href={project.url} />}
            {project.demo && <ButtonDemo href={project.demo} />}
            <Link to={`/projects/${project.title}`} state={{ project }}>
              <ButtonInfo />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
