import { ButtonCode, ButtonDemo } from '../../../../components/Buttons';
import type { Proyecto as Project } from './ProjectsData';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import usePrefersReducedMotion from '../../../../hooks/usePrefersReducedMotion';

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
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const animatedElements = [
      cardRef.current,
      imgRef.current,
      imgInnerRef.current,
      overlayRef.current,
    ];

    return () => {
      gsap.killTweensOf(animatedElements);
    };
  }, []);

  function handleEnter() {
    if (prefersReducedMotion) return;
    gsap.killTweensOf([cardRef.current, imgRef.current, overlayRef.current, titleRef.current]);

    gsap.to(cardRef.current, { y: -6, duration: 0.5, ease: 'power3.out' });
    gsap.to(imgRef.current, { scale: 1.05, duration: 0.6, ease: 'power3.out' });

    if (imgInnerRef.current) {
      gsap.to(imgInnerRef.current, { scale: 1.03, duration: 0.8, ease: 'power3.out' });
    }

    if (overlayRef.current) {
      gsap.to(overlayRef.current, { opacity: 0, duration: 0.5, ease: 'power3.out' });
    }

    if (titleRef.current) gsap.to(titleRef.current, { y: -3, duration: 0.45, ease: 'power3.out' });
  }

  function handleLeave() {
    if (prefersReducedMotion) return;
    gsap.killTweensOf([cardRef.current, imgRef.current, imgInnerRef.current, overlayRef.current, titleRef.current]);

    gsap.to(cardRef.current, { y: 0, duration: 0.5, ease: 'power3.out' });
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
      className={`group relative h-full rounded-2xl overflow-hidden border border-gray-300 dark:border-neutral-700/80 ${className}`}
    >
      <div className="flex h-full flex-col">
        <div className="relative w-full overflow-hidden">
          <div ref={imgInnerRef} className="project-image-inner relative w-full h-52 transform-gpu">
            <img
              ref={imgRef}
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              style={{ transformOrigin: 'center center' }}
              loading="lazy"
            />
            <div
              ref={overlayRef}
              className="project-image-overlay absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none"
            />
          </div>
        </div>

        <div className="p-4 lg:p-5 flex flex-1 flex-col project-card-content">
          <div className="flex flex-1 flex-col">
            <h4 ref={titleRef} className="line-clamp-2 font-titulo text-base sm:text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-primary transition-colors duration-300">
              {project.title}
            </h4>
            <p className="min-h-18 font-texto text-gray-600 dark:text-neutral-400 text-sm sm:text-base mb-3 leading-relaxed line-clamp-3">
              {project.description}
            </p>

            <div className="mt-auto mb-4 flex flex-wrap content-start gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md bg-gray-100/80 px-2 py-1 font-texto text-xs leading-4 text-gray-600 dark:bg-neutral-800/80 dark:text-neutral-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-end gap-2 pt-2 border-t border-gray-100 dark:border-neutral-800">
            {project.url && <ButtonCode href={project.url} />}
            {project.demo && <ButtonDemo href={project.demo} />}
          </div>
        </div>
      </div>
    </div>
  );
}
