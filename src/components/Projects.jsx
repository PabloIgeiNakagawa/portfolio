import { useState } from 'react';

const proyectos = [
  {
  title: "Tienda de Componentes PC",
  description: "E-commerce completo con carrito de compras, gestión de pedidos y panel administrativo para componentes de PC.",
  longDescription: "Tienda online desarrollada con ASP.NET Core y SQL Server. Incluye sistema de roles (Admin, Usuario, Repartidor), carrito de compras, seguimiento de pedidos y dashboard administrativo completo.",
  technologies: ["C#", "ASP.NET Core", "Entity Framework", "SQL Server", "Bootstrap"],
  image: "https://via.placeholder.com/600x400/1E40AF/FFFFFF?text=Tienda+PC+Components",
  url: "https://github.com/usuario/tienda-componentes-pc",
  demo: "https://tienda-componentes-pc.azurewebsites.net",
  status: "Completado",
  featured: true
  },
  {
    title: "Task Management App",
    description: "Aplicación de gestión de tareas con colaboración en tiempo real y tableros kanban.",
    longDescription: "Sistema de gestión de proyectos con funcionalidades de colaboración, asignación de tareas, seguimiento de progreso y notificaciones en tiempo real.",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Bootstrap"],
    image: "https://via.placeholder.com/600x400/8B5CF6/FFFFFF?text=Task+Manager",
    url: "https://github.com/usuario/task-manager",
    demo: "https://task-manager-demo.vercel.app",
    status: "Completado",
    featured: true
  },
  {
    title: "Portfolio Interactivo",
    description: "Mi sitio web personal con animaciones, efectos visuales y diseño responsivo.",
    longDescription: "Portfolio personal desarrollado con React y Tailwind CSS, featuring animaciones CSS personalizadas, efectos parallax y optimización para SEO.",
    technologies: ["React", "Tailwind CSS", "JavaScript", "HTML5", "CSS3"],
    image: "https://via.placeholder.com/600x400/10B981/FFFFFF?text=Portfolio+Web",
    url: "https://github.com/usuario/portfolio",
    demo: "https://pablo-nakagawa.vercel.app",
    status: "Completado",
    featured: false
  },
  {
    title: "Weather Dashboard",
    description: "Dashboard meteorológico con datos en tiempo real y pronósticos extendidos.",
    longDescription: "Aplicación del clima que consume APIs meteorológicas, muestra datos en tiempo real, pronósticos y gráficos interactivos de tendencias climáticas.",
    technologies: ["React", "Chart.js", "OpenWeather API", "Tailwind CSS"],
    image: "https://via.placeholder.com/600x400/F59E0B/FFFFFF?text=Weather+App",
    url: "https://github.com/usuario/weather-dashboard",
    demo: "https://weather-dashboard-demo.vercel.app",
    status: "En desarrollo",
    featured: false
  },
  {
    title: "Blog Platform",
    description: "CMS y blog con editor de contenido, categorías y sistema de comentarios.",
    longDescription: "Plataforma de blog completa con CMS, editor WYSIWYG, sistema de categorías, comentarios y panel de administración para gestión de contenido.",
    technologies: ["React", "C#", ".NET Core", "SQL Server", "TinyMCE"],
    image: "https://via.placeholder.com/600x400/EF4444/FFFFFF?text=Blog+Platform",
    url: "https://github.com/usuario/blog-platform",
    demo: "",
    status: "En desarrollo",
    featured: false
  },
  {
    title: "API REST Financial",
    description: "API para gestión financiera con autenticación JWT y documentación Swagger.",
    longDescription: "API REST desarrollada en .NET Core para gestión de finanzas personales, con endpoints para transacciones, categorías, reportes y autenticación segura.",
    technologies: ["C#", ".NET Core", "JWT", "Swagger", "SQL Server"],
    image: "https://via.placeholder.com/600x400/6366F1/FFFFFF?text=Financial+API",
    url: "https://github.com/usuario/financial-api",
    demo: "",
    status: "Completado",
    featured: false
  }
];

const statusColors = {
  "Completado": "from-green-500 to-emerald-500",
  "En desarrollo": "from-yellow-500 to-orange-500",
  "Planificado": "from-gray-500 to-slate-500"
};

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);

  const categories = ['All', 'Completado', 'En desarrollo'];
  const filteredProjects = selectedCategory === 'All' 
    ? proyectos 
    : proyectos.filter(project => project.status === selectedCategory);

  const featuredProjects = proyectos.filter(project => project.featured);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500 to-purple-500 opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-purple-500 to-pink-500 opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        
        {/* Título de sección */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold pb-4">
            Mis Proyectos
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Explora algunos de mis trabajos más destacados, desde aplicaciones web hasta APIs
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Lista de proyectos */}
        <div className="mb-8">
          <div className="space-y-8">
            {proyectos.map((project, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02]"
              >
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
                    <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${statusColors[project.status]} text-white`}>
                      {project.status}
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="p-6 lg:p-8 flex-1">
                    <div className="flex flex-col h-full">
                      <div className="flex-1">
                        <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                          {project.title}
                        </h4>
                        
                        <p className="text-gray-300 text-base mb-4 leading-relaxed">
                          {project.longDescription}
                        </p>

                        {/* Tecnologías */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm hover:bg-white/20 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Botones de acción */}
                      <div className="flex gap-4 pt-4">
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                          </svg>
                          Ver Código
                        </a>
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 border border-white/20 hover:border-white/40"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            Ver Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}