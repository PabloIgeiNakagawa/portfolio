import techstoreImg from '../../assets/techstore.webp'; 
import combicommanderImg from '../../assets/combicommander.webp';
import portfolioImg from '../../assets/portfolio.webp';

const proyectos = [
  {
    title: "Tienda de Componentes PC",
    description: "E-commerce con carrito de compras, roles (usuario, admin, repartidor) y panel administrativo para gestión integral de productos y pedidos.",
    longDescription: `
      Aplicación web que permite registro, navegación, compras y seguimiento de pedidos.
      Incluye administración completa para gestionar productos, usuarios y pedidos, con reportes y auditoría
      Interfaz responsive con Bootstrap y exportación de reportes a Excel y PDF.
    `,
    technologies: ["C#", "ASP.NET Core MVC", "Entity Framework Core", "SQL Server", "Bootstrap"],
    image: techstoreImg,
    url: "https://github.com/PabloIgeiNakagawa/TiendaOnline",
    demo: "http://techstore.somee.com/",
    status: "Completado"
  },
  {
    title: "Sistema de gestión de flota de vehículos",
    description: "Aplicación web académica para la gestión integral de vehículos con seguimiento en tiempo real.",
    longDescription: "Proyecto desarrollado en el marco de una simulación profesional universitaria orientada a la administración de una flota de vehículos. Incluye funcionalidades para gestión de roles, mantenimientos, stock de repuestos y escaneo QR. Se integró la API de Traccar para rastreo en tiempo real. El desarrollo se organizó con GitLab, metodología Scrum y planificación con Trello.",
    technologies: ["C#", "ASP.NET MVC", "Entity Framework", "SQL Server", "JavaScript", "Bootstrap", "Traccar API"],
    image: combicommanderImg,
    url: "https://gitlab.com/GastonSanchez/tp-principal-manejo-de-flotas/-/tree/Produccion?ref_type=heads",
    demo: "",
    status: "Completado"
  },
  {
    title: "Portfolio Interactivo",
    description: "Mi sitio web personal con animaciones, efectos visuales y diseño responsivo.",
    longDescription: "Portfolio personal diseñado para mostrar proyectos, habilidades y experiencia profesional mediante una interfaz moderna, accesible y adaptable a distintos dispositivos.",
    technologies: ["React", "Tailwind CSS", "JavaScript", "HTML5", "CSS3"],
    image: portfolioImg,
    url: "https://github.com/PabloIgeiNakagawa/portfolio",
    demo: "https://portfolio-pabloigeinakagawas-projects.vercel.app/",
    status: "Completado"
  },
  {
    title: "Resultados de fútbol",
    description: "Mi sitio web personal con animaciones, efectos visuales y diseño responsivo.",
    longDescription: "Aplicación web que muestra resultados de fútbol en tiempo real, con diseño responsivo y animaciones interactivas.",
    technologies: ["React", "Tailwind CSS", "JavaScript", "HTML5", "CSS3", "API-Football"],
    image: "",
    url: "",
    demo: "",
    status: "Planificado"
  }
]; 

export default proyectos; 