export interface Proyecto {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  gallery: string [];
  url: string;
  demo: string;
}

const imageModules = import.meta.glob('../../../../assets/projects/**/*.webp', { eager: true });

const getProjectImages = (projectFolder: string) => {
  const images = Object.entries(imageModules)
    .filter(([path]) => path.includes(`projects/${projectFolder}`))
    .map(([, module]) => (module as { default: string }).default);

  return {
    image: images[0] || '',
    gallery: images || [] 
  };
};

export const proyectos: Proyecto[] = [
  {
    title: "Tienda de Componentes PC",
    description: "E-commerce con carrito de compras, roles (usuario, admin, repartidor) y panel administrativo para gestión integral de productos y pedidos.",
    technologies: ["C#", "ASP.NET Core MVC", "Entity Framework Core", "SQL Server", "HTML", "CSS", "JavaScript", "Bootstrap", "GitHub"],
    ...getProjectImages('tech_store'),
    url: "https://github.com/PabloIgeiNakagawa/TiendaOnline",
    demo: "https://techstoreargentina.runasp.net/"
  },
  {
    title: "Sistema de gestión de flota de vehículos",
    description: "Aplicación web académica para la gestión integral de vehículos con seguimiento en tiempo real.",
    technologies: ["C#", "ASP.NET MVC", "ADO.NET", "SQL Server", "HTML", "CSS", "JavaScript", "Bootstrap", "Traccar API", "Trello", "Gitlab"],
    ...getProjectImages('combi_commander'),
    url: "https://gitlab.com/GastonSanchez/tp-principal-manejo-de-flotas/-/tree/Produccion?ref_type=heads",
    demo: ""
  },
  {
    title: "Portfolio",
    description: "Mi sitio web personal con animaciones, efectos visuales y diseño responsivo.",
    technologies: ["React", "Tailwind CSS", "TypeScript", "HTML", "CSS", "GSAP", "EmailJS","GitHub"],
    ...getProjectImages('portfolio'),
    url: "https://github.com/PabloIgeiNakagawa/portfolio",
    demo: "https://portfolio-pabloigeinakagawas-projects.vercel.app/"
  },
  {
    title: "Información sobre Boca Juniors",
    description: "Aplicación web que presenta información actualizada sobre el Club Atlético Boca Juniors, jugadores, estadísticas y más contenidos relacionados con el fútbol del club.",
    technologies: ["React", "Tailwind CSS", "TypeScript", "HTML", "CSS", "RapidAPI (Transfermarkt API)", "GitHub"],
    ...getProjectImages('boca_juniors'),
    url: "https://github.com/PabloIgeiNakagawa/boca-juniors",
    demo: ""
  }
];
