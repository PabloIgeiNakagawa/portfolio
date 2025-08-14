import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import type { Proyecto } from '../home/components/projects/data/ProjectsData';
import { ButtonCode, ButtonDemo } from '../../components/Buttons';
import SectionTitle from '../../components/SectionTitle'; 

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
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
      <SectionTitle title={`Detalles - ${id}`} />
      {/* Descripción */}
      <article className="p-6 rounded-xl dark:text-white text-black">
        <div className="mb-10">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
            <h2 className="text-2xl sm:text-3xl font-bold">Descripción</h2>
            <div className="flex gap-4 justify-end">
              {project.url && <ButtonCode href={project.url} />}
              {project.demo && <ButtonDemo href={project.demo} />}
            </div>  
          </div>
          <div className="w-24 h-1 bg-gray-900 dark:bg-white rounded-full mt-3"></div>
        </div>
        <p className="mb-2"><strong>Tecnologías:</strong> {project.technologies.join(', ')}</p>
        <p className="mb-2"><strong>Estado:</strong> {project.status}</p>
        <p className="text-gray-800 dark:text-gray-200 leading-relaxed">{project.longDescription}</p>
      </article>
      {/* Características */}
      <article className="p-6 rounded-xl dark:text-white text-black">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold">Características</h2>
          <div className="w-24 h-1 bg-gray-900 dark:bg-white rounded-full mt-4"></div>
        </div>
        {project.features.map((seccion, idx) => (
            <div
              key={idx}
              className="mb-8 p-6 rounded-lg bg-white/60 dark:bg-neutral-800/60 backdrop-blur-sm shadow-lg border border-white/20 dark:border-gray-700/40 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white tracking-wide">
                {seccion.titulo}
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                {seccion.items.map((item, i) => (
                  <li key={i} className="relative pl-4">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </article>

      {/* Galería */}
      <article className="p-6 rounded-xl dark:text-white text-black">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold">Galería</h2>
          <div className="w-24 h-1 bg-gray-900 dark:bg-white rounded-full mt-4"></div>
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
          <div className="w-24 h-1 bg-gray-900 dark:bg-white rounded-full mt-3 mb-10"></div>
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
          className="cursor-pointer bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 
         dark:hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg"
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
