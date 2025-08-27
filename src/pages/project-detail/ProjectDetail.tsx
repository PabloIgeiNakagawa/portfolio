import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import type { Proyecto } from '../home/components/projects/data/ProjectsData';
import { ButtonCode, ButtonDemo } from '../../components/Buttons';
import SectionTitle from '../../components/SectionTitle'; 

const ProjectDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const project = location.state?.project as Proyecto;

  const [imagenIndex, setImagenIndex] = useState<number | null>(null);

  const abrirVisor = (index: number) => setImagenIndex(index);
  const cerrarVisor = () => setImagenIndex(null);

  const avanzar = () => {
    if (imagenIndex !== null) {
      setImagenIndex((imagenIndex + 1) % project.gallery.length);
    }
  };

  const retroceder = () => {
    if (imagenIndex !== null) {
      setImagenIndex((imagenIndex - 1 + project.gallery.length) % project.gallery.length);
    }
  };

  // Manejo con teclado
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (imagenIndex !== null) {
        if (e.key === 'ArrowRight') avanzar();
        if (e.key === 'ArrowLeft') retroceder();
        if (e.key === 'Escape') cerrarVisor();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [imagenIndex]);

  if (!project) {
    return (
      <div className="min-h-screen container mx-auto max-w-6xl px-6 text-black dark:text-white">
        <p>No se encontró información adicional sobre este proyecto.</p>
      </div>
    );
  }

  return (
    <section className="py-25 container mx-auto max-w-6xl px-4 sm:px-6 z-10">
      <SectionTitle title={project.title ?? "Proyecto"} />
      {/* Descripción */}
      <article className="p-6 rounded-xl dark:text-white text-black">
        <div className="mb-10">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
            <h2 className="text-2xl sm:text-3xl font-titulo font-bold">Descripción</h2>
            <div className="flex gap-4 justify-end">
              {project.url && <ButtonCode href={project.url} />}
              {project.demo && <ButtonDemo href={project.demo} />}
            </div>  
          </div>
          <div className="w-24 h-1 bg-black dark:bg-white rounded-full mt-3"></div>
        </div>
        
        <div className="space-y-3">
          <p className="inline-block mb-6 px-3 py-1 rounded-tr-xl rounded-bl-xl text-sm font-medium bg-black dark:bg-white text-white dark:text-black">
            {project.status}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="font-texto px-3 py-1 bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-neutral-300 rounded-full text-xs sm:text-sm hover:bg-gray-200 dark:hover:bg-neutral-700 transition"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <p className="font-texto text-black dark:text-white leading-relaxed pt-2">
            {project.longDescription}
          </p>
        </div>
      </article>
      {/* Características */}
      {project.features && project.features.length > 0 && (
        <article className="p-6 rounded-xl dark:text-white text-black">
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-titulo font-bold">Características</h2>
            <div className="w-24 h-1 bg-black dark:bg-white rounded-full mt-4"></div>
          </div>

          {project.features.map((seccion, idx) => (
            <div
              key={idx}
              className="mb-8 p-6 rounded-lg bg-white/60 dark:bg-neutral-800/60 backdrop-blur-sm shadow-lg border border-white/20 dark:border-gray-700/40 transition-all duration-300 hover:shadow-xl"
            >
              <h3 className="text-2xl font-subtitulo font-bold mb-6 text-black dark:text-white tracking-wide">
                {seccion.titulo}
              </h3>
              <ul className="space-y-3 font-texto text-gray-900 dark:text-white">
                {seccion.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1 h-4 bg-black dark:bg-white mt-1.5 flex-shrink-0 rounded-full"></div>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </article>
      )}


      {/* Galería */}
      <article className="p-6 rounded-xl dark:text-white text-black">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold">Galería</h2>
          <div className="w-24 h-1 bg-black dark:bg-white rounded-full mt-4"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {project.gallery.map((imgUrl, index) => (
            <img
              key={index}
              src={imgUrl}
              alt={`${project.title} - Imagen ${index + 1}`}
              className="w-full h-60 sm:h-64 md:h-72 rounded-lg shadow-md object-cover cursor-pointer hover:scale-105 transition-transform"
              onClick={() => abrirVisor(index)}
            />
          ))}
        </div>
      </article>

      {/* Video Section */}
      {project.video && project.video.endsWith(".mp4") ? (
        <article className="p-6">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 dark:text-white text-black">Demo</h2>
          <div className="w-24 h-1 bg-black dark:bg-white rounded-full mt-3 mb-10"></div>
            <div className="relative max-w-full w-full h-auto rounded-lg shadow-lg">
              <video
                className="w-full h-auto rounded-lg object-cover"
                controls
                preload="none"
              >
                <source src={project.video} type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>
            </div>
        </article>
      ) : (
        ""
      )}

      <div className="flex justify-end p-6">
        <button
          onClick={() => navigate("/", { state: { seccionScroll: "projects" } })}
          className="cursor-pointer bg-black dark:bg-white  font-texto text-white dark:text-black hover:bg-black/85
         dark:hover:bg-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg"
        >
          ← Volver
        </button>
      </div>

      {/* Visor */}
      {imagenIndex !== null && (
        <div
          onClick={cerrarVisor}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
        >
          {/* Botón Cerrar */}
          <button
            onClick={cerrarVisor}
            className="absolute top-20 right-15 text-white text-4xl font-bold z-50 cursor-pointer"
          >
            &times;
          </button>

          {/* Botón Anterior */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              retroceder();
            }}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 text-white text-3xl sm:text-5xl z-50 bg-black/50 p-2 rounded-full hover:bg-black/70 transition cursor-pointer"
            aria-label="Anterior"
          >
            &#8592;
          </button>


          {/* Imagen */}
          <img
            src={project.gallery[imagenIndex]}
            alt="Vista ampliada"
            className="max-w-[90vw] max-h-[80vh] rounded-xl shadow-lg z-40 object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Botón Siguiente */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              avanzar();
            }}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 text-white text-3xl sm:text-5xl z-50 bg-black/50 p-2 rounded-full hover:bg-black/70 transition cursor-pointer"
            aria-label="Siguiente"
          >
            &#8594;
          </button>
        </div>
      )}      
    </section>
  );
};

export default ProjectDetail;
