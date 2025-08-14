import { Link } from 'react-router-dom';
import { ButtonCode, ButtonDemo, ButtonInfo } from '../../../../../components/Buttons';
import type { Proyecto as Project } from '../data/ProjectsData';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';

// Mapeo de estados a clases Tailwind (colores)
const statusColors: Record<string, string> = {
  "Completado": "bg-green-600 dark:bg-green-400 text-white",
  "En desarrollo": "bg-orange-600 dark:bg-orange-400 text-white",
  "Planificado": "bg-blue-600 dark:bg-blue-400 text-white"
};

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export default function ProjectCard({ project, className = '' }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const imgInnerRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    return () => {
      gsap.killTweensOf([cardRef.current, imgRef.current, imgInnerRef.current, overlayRef.current]);
    };
  }, []);

  function handleEnter() {
    gsap.killTweensOf([cardRef.current, imgRef.current, overlayRef.current, titleRef.current]);

    gsap.to(cardRef.current, { y: -8, boxShadow: '0 18px 40px rgba(2,6,23,0.22)', duration: 0.5, ease: 'power3.out' });

    gsap.to(imgRef.current, { scale: 1.06, duration: 0.6, ease: 'power3.out' });

    if (imgInnerRef.current) {
      gsap.to(imgInnerRef.current, { scale: 1.03, duration: 0.8, ease: 'power3.out' });
    }

    if (overlayRef.current) {
      gsap.to(overlayRef.current, { opacity: 0, duration: 0.5, ease: 'power3.out' });
    }

    if (titleRef.current) gsap.to(titleRef.current, { y: -4, duration: 0.45, ease: 'power3.out' });
  }

  function handleLeave() {
    gsap.killTweensOf([cardRef.current, imgRef.current, imgInnerRef.current, overlayRef.current, titleRef.current]);

    gsap.to(cardRef.current, { y: 0, boxShadow: '0 6px 18px rgba(2,6,23,0.08)', duration: 0.5, ease: 'power3.out' });
    gsap.to(imgRef.current, { scale: 1, duration: 0.6, ease: 'power3.out' });
    if (imgInnerRef.current) gsap.to(imgInnerRef.current, { scale: 1, duration: 0.6, ease: 'power3.out' });
    if (overlayRef.current) gsap.to(overlayRef.current, { opacity: 1, duration: 0.5, ease: 'power3.out' });
    if (titleRef.current) gsap.to(titleRef.current, { y: 0, duration: 0.45, ease: 'power3.out' });
  }

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className={`group relative bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-neutral-700 transition-all duration-300 ${className}`}
      style={{ transitionProperty: 'transform, box-shadow' }}
    >
      <div className="flex flex-col lg:flex-row">
        {/* Imagen: inner wrapper para clip/scale y overlay para oscurecer */}
        <div className="relative w-full lg:w-1/3 overflow-hidden">
          <div ref={imgInnerRef} className="project-image-inner relative w-full h-48 sm:h-64 lg:h-full transform-gpu">
            <img
              ref={imgRef}
              src={project.image}
              alt={project.title}
              className="w-full h-48 sm:h-64 lg:h-full object-cover"
              style={{ transformOrigin: 'center center' }}
            />
            {/* Overlay aplicado sobre la imagen para efecto de revelado */}
            <div
              ref={overlayRef}
              className="project-image-overlay absolute inset-0 bg-gradient-to-t from-black/55 to-transparent pointer-events-none"
            />
          </div>

          {/* Badge de estado (Completado / En desarrollo / Planificado) */}
          <span
            className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium shadow-md ${statusColors[project.status]}`}
          >
            {project.status}
          </span>
        </div>

        {/* Contenido textual */}
        <div className="p-5 sm:p-7 flex flex-col flex-1 project-card-content">
          <div className="flex-1">
            <h4 ref={titleRef} className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {project.title}
            </h4>
            <p className="text-gray-600 dark:text-neutral-300 text-sm sm:text-base mb-5 leading-relaxed">
              {project.description}
            </p>

            {/* Lista de tecnologías (chips) */}
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

          {/* Botones de acción */}
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
