import { ButtonCode, ButtonDemo } from './ProjectsButtons';

const statusColors = {
  "Completado": "bg-green-600 dark:bg-green-400 text-gray-900 dark:text-white",
  "En desarrollo": "bg-orange-600 dark:bg-orange-400 text-gray-900 dark:text-white",
  "Planificado": "bg-blue-600 dark:bg-blue-400 text-gray-900 dark:text-white"
};

export default function ProjectCard({ project }) {
  return (
    <div className="group relative bg-white dark:bg-gray-900 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 hover:scale-[1.02] shadow-lg">
      <div className="flex flex-col lg:flex-row">
        {/* Imagen del proyecto */}
        <div className="relative overflow-hidden lg:w-1/3">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 lg:h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/60 to-transparent"></div>

          {/* Badge de estado */}
          <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium ${statusColors[project.status]}`}>
            {project.status}
          </div>
        </div>

        {/* Contenido */}
        <div className="p-6 lg:p-8 flex-1">
          <div className="flex flex-col h-full">
            <div className="flex-1">
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                {project.title}
              </h4>

              <p className="u-text-p text-base mb-4 leading-relaxed">
                {project.longDescription}
              </p>

              {/* Tecnologías */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Botones */}
            <div className="flex gap-4 pt-4">
              {project.url && <ButtonCode href={project.url} />}
              {project.demo && <ButtonDemo href={project.demo} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
