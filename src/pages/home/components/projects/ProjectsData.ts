import techStoreImage from '../../../../assets/projects/tech_store.webp';
import combiCommanderImage from '../../../../assets/projects/combicommander.webp';
import portfolioImage from '../../../../assets/projects/portfolio.webp';
import bocaJuniorsImage from '../../../../assets/projects/boca_juniors.webp';

export interface Proyecto {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  url: string;
  demo: string;
}

export const proyectos: Proyecto[] = [
  {
    title: "Tienda de Componentes PC",
    description: "E-commerce con carrito de compras, roles (usuario, admin, repartidor) y panel administrativo para gestión integral de productos y pedidos.",
    technologies: ["C#", "ASP.NET Core MVC", "Entity Framework Core", "SQL Server", "HTML", "CSS", "JavaScript", "Bootstrap", "GitHub"],
    image: techStoreImage,
    url: "https://github.com/PabloIgeiNakagawa/TiendaOnline",
    demo: "https://techstoreargentina.runasp.net/",
  },
  {
    title: "Sistema de gestión de flota de vehículos",
    description: "Aplicación web académica para la gestión integral de vehículos con seguimiento en tiempo real.",
    technologies: ["C#", "ASP.NET MVC", "ADO.NET", "SQL Server", "HTML", "CSS", "JavaScript", "Bootstrap", "Traccar API", "Trello", "Gitlab"],
    image: combiCommanderImage,
    url: "https://gitlab.com/GastonSanchez/tp-principal-manejo-de-flotas/-/tree/Produccion?ref_type=heads",
    demo: "",
  },
  {
    title: "Portfolio",
    description: "Mi sitio web personal con animaciones, efectos visuales y diseño responsivo.",
    technologies: ["React", "Tailwind CSS", "TypeScript", "HTML", "CSS", "GSAP", "EmailJS","GitHub"],
    image: portfolioImage,
    url: "https://github.com/PabloIgeiNakagawa/portfolio",
    demo: "https://portfolio-pabloigeinakagawas-projects.vercel.app/",
  },
  {
    title: "Información sobre Boca Juniors",
    description: "Aplicación web que presenta información actualizada sobre el Club Atlético Boca Juniors, jugadores, estadísticas y más contenidos relacionados con el fútbol del club.",
    technologies: ["React", "Tailwind CSS", "TypeScript", "HTML", "CSS", "RapidAPI (Transfermarkt API)", "GitHub"],
    image: bocaJuniorsImage,
    url: "https://github.com/PabloIgeiNakagawa/boca-juniors",
    demo: "",
  }
];
