import videoCombiCommander from '../../assets/projects/combi_commander/demo.mp4'

export type Feature = {
  titulo: string;
  items: string[];
}

export interface Proyecto {
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: Feature[];
  image: string;
  gallery: string [];
  url: string;
  demo: string;
  status: "Completado" | "En desarrollo" | "Planificado";
  video?: string;
}

const imageModules = import.meta.glob('../../assets/projects/**/*.webp', { eager: true });

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
    longDescription: `Aplicación web que permite registro, navegación, compras y seguimiento de pedidos.
      Incluye administración completa para gestionar productos, usuarios y pedidos, con reportes y auditoría
      Interfaz responsive con Bootstrap y exportación de reportes a Excel y PDF.`,
    features: [
      {
        titulo: "Roles diferenciados",
        items: [
          "Usuario: puede navegar por el catálogo, agregar productos al carrito, realizar compras y ver su historial.",
          "Administrador: acceso completo a la gestión de productos, usuarios y pedidos. Incluye auditoría del sistema con registros de acciones.",
          "Repartidor: visualiza los pedidos asignados y actualiza el estado de entrega.",
        ],
      },
      {
        titulo: "Gestión de usuarios",
        items: [
          "Registro, autenticación y autorización según rol.",
          "Seguridad implementada con hash de contraseñas y validaciones del lado cliente y servidor.",
        ],
      },
      {
        titulo: "Carrito de compras",
        items: [
          "Agregado y eliminación de productos.",
          "Cálculo automático del total y confirmación del pedido.",
        ],
      },
      {
        titulo: "Panel administrativo",
        items: [
          "Alta, baja y modificación de productos, usuarios y pedidos.",
          "Visualización de logs del sistema para control interno.",
        ],
      },
      {
        titulo: "Reportes dinámicos",
        items: [
          "Productos más vendidos.",
          "Ventas por categoría.",
          "Clientes con mayor actividad.",
          "Estado y evolución de los pedidos.",
        ],
      },
      {
        titulo: "Gestión de pedidos",
        items: [
          "Cambios de estado (pendiente, enviado, entregado).",
          "Visualización detallada del contenido del pedido.",
        ],
      },
      {
        titulo: "Extras",
        items: [
          "Exportación de reportes a Excel o PDF.",
          "Diseño responsivo adaptado a dispositivos móviles.",
          "Uso de patrones de arquitectura MVC y buenas prácticas de desarrollo.",
        ],
      },
    ],
    technologies: ["C#", "ASP.NET Core MVC", "Entity Framework Core", "SQL Server", "HTML", "CSS","Bootstrap"],
    ...getProjectImages('tech_store'),
    url: "https://github.com/PabloIgeiNakagawa/TiendaOnline",
    demo: "http://techstore.somee.com/",
    status: "Completado"
  },
  {
    title: "Sistema de gestión de flota de vehículos",
    description: "Aplicación web académica para la gestión integral de vehículos con seguimiento en tiempo real.",
    longDescription: `Formé parte de un equipo de 7 personas con roles distribuidos, incluyendo desarrolladores, tester, administrador de base de datos y Scrum Master, lo que permitió una organización eficiente y colaboración efectiva.
    Participé en el desarrollo de un sistema web adaptable (mobile-first) para la gestión integral de flotas, pensado para múltiples perfiles de usuario. El proyecto incluyó funcionalidades de geoposicionamiento en tiempo real mediante la integración con la API de Traccar, gestión de stock, control de mantenimiento con códigos QR, generación de reportes y análisis de datos para optimizar operaciones.
    El trabajo se organizó bajo metodología Scrum, utilizando Trello para la gestión de tareas y GitLab para el control de versiones del código.`,
    features: [
      {
        titulo: "Gestión de usuarios y autenticación",
        items: [
          "Registro, edición y eliminación de usuarios con distintos roles (Administrador, Chofer, Mecánico, Supervisor).",
          "Autenticación de usuarios mediante login con validación de credenciales.",
          "Gestión de roles y permisos de acceso según perfil.",
          "Interfaz para visualización y búsqueda de usuarios activos.",
          "Recuperación y actualización de contraseñas."
        ]
      },
      {
        titulo: "Gestión de vehículos",
        items: [
          "Alta, edición y baja de vehículos de la flota.",
          "Carga de datos técnicos del vehículo (patente, tipo, modelo, año, etc.).",
          "Asignación de vehículos a choferes.",
          "Registro y control de kilometraje actual.",
          "Gestión del estado de disponibilidad de cada vehículo."
        ]
      },
      {
        titulo: "Mantenimientos",
        items: [
          "Registro de mantenimientos correctivos (con detalle del problema y solución aplicada).",
          "Registro de mantenimientos preventivos (basados en kilometraje o tiempo).",
          "Consulta del historial completo de mantenimientos por vehículo.",
          "Generación automática de alertas por mantenimiento pendiente o vencido.",
          "Asignación de tareas de mantenimiento a mecánicos específicos."
        ]
      },
      {
        titulo: "Gestión de stock y repuestos",
        items: [
          "Registro y administración del inventario de repuestos.",
          "Control de ingresos y egresos de repuestos utilizados en mantenimientos.",
          "Asociación automática de repuestos a tareas de mantenimiento.",
          "Consulta de disponibilidad de repuestos en tiempo real."
        ]
      },
      {
        titulo: "Reportes",
        items: [
          "Generación de reportes por vehículo, incluyendo historial de mantenimiento.",
          "Reportes por chofer, con detalle de kilómetros recorridos y asignaciones.",
          "Reportes por repuesto, con uso, stock restante y movimientos.",
          "Reportes por tipo de mantenimiento (correctivo vs preventivo).",
          "Exportación de reportes a formatos imprimibles (PDF o Excel)."
        ]
      },
      {
        titulo: "Dashboard y paneles de control",
        items: [
          "Panel principal con resumen visual de la flota (vehículos activos, en mantenimiento, disponibles).",
          "Visualización de alertas o tareas pendientes.",
          "Gráficos sobre el estado del stock y frecuencia de mantenimientos.",
          "Accesos rápidos a funciones clave desde el dashboard."
        ]
      },
      {
        titulo: "Notificaciones y alertas",
        items: [
          "Notificaciones automáticas por vencimiento de mantenimiento o revisión.",
          "Alertas de bajo stock de repuestos.",
          "Alertas para asignaciones de choferes o vehículos no disponibles.",
          "Mensajes internos entre usuarios con distintos roles."
        ]
      },
      {
        titulo: "Asignaciones y planificación",
        items: [
          "Asignación de vehículos a recorridos o tareas específicas.",
          "Planificación de mantenimientos preventivos según kilometraje estimado.",
          "Coordinación entre mecánicos y supervisores para distribución de tareas."
        ]
      },
      {
        titulo: "Funcionalidades generales",
        items: [
          "Interfaz responsive adaptada para distintos dispositivos.",
          "Navegación intuitiva con secciones separadas por perfil de usuario.",
          "Validaciones en formularios para evitar errores de carga.",
          "Seguridad en el manejo de datos y operaciones restringidas según permisos.",
          "Integración de filtros y búsquedas por múltiples criterios en todas las vistas."
        ]
      }
    ],
    technologies: ["C#", "ASP.NET MVC", "Entity Framework", "SQL Server", "HTML", "CSS", "Bootstrap", "Traccar API", "Trello", "Gitlab"],
    ...getProjectImages('combi_commander'),
    url: "https://gitlab.com/GastonSanchez/tp-principal-manejo-de-flotas/-/tree/Produccion?ref_type=heads",
    demo: "",
    status: "Completado",
    video: videoCombiCommander
  },
  {
    title: "Portfolio Interactivo",
    description: "Mi sitio web personal con animaciones, efectos visuales y diseño responsivo.",
    longDescription: "Portfolio personal diseñado para mostrar proyectos, habilidades y experiencia profesional mediante una interfaz moderna, accesible y adaptable a distintos dispositivos.",
    features: [
    ],
    technologies: ["React", "Tailwind CSS", "JavaScript", "HTML", "CSS"],
    ...getProjectImages('portfolio'),
    url: "https://github.com/PabloIgeiNakagawa/portfolio",
    demo: "https://portfolio-pabloigeinakagawas-projects.vercel.app/",
    status: "Completado"
  },
  {
    title: "Información sobre Boca Juniors",
    description: "Aplicación web que presenta información actualizada sobre el Club Atlético Boca Juniors, jugadores, estadísticas y más contenidos relacionados con el fútbol del club.",
    longDescription: `Esta aplicación web consume la API de Transfermarkt a través de RapidAPI para mostrar información detallada y actualizada sobre el Club Atlético Boca Juniors. 
      Incluye datos del plantel actual, perfiles individuales de jugadores, estadísticas, y detalles del club. 
      Desarrollada como parte de una práctica personal con tecnologías como React, React Router y TailwindCSS, la aplicación también ofrece una interfaz responsive para una experiencia óptima en distintos dispositivos.`,
    features: [
      {
        titulo: "Funcionalidades generales",
        items: [
          "Visualización del plantel actual con foto, nombre, posición y edad de los jugadores.",
          "Detalle individual de cada jugador con estadísticas e información extraída desde la API.",
          "Diseño responsive adaptado a dispositivos móviles, tablets y escritorio.",
          "Navegación fluida mediante React Router (SPA).",
          "Consumo de datos en tiempo real desde la API de Transfermarkt usando RapidAPI.",
          "Componentes reutilizables y diseño limpio con Tailwind CSS."
        ]
      }
    ],
    technologies: ["React", "Tailwind CSS", "TypeScript", "HTML", "CSS", "RapidAPI (Transfermarkt API)"],
    ...getProjectImages('boca_juniors'),
    url: "https://github.com/PabloIgeiNakagawa/boca-juniors",
    demo: "https://boca-juniors-pabloigeinakagawas-projects.vercel.app/",
    status: "Completado"
  },
  {
    title: "Organización de Torneos de Fútbol",
    description: "Aplicación web para la gestión de torneos de fútbol: permite registrar equipos, jugadores, partidos, árbitros, eventos en juego y estadísticas.",
    longDescription: `Esta aplicación web permite organizar torneos de fútbol de forma integral. 
    Los usuarios pueden registrar equipos y jugadores, crear y gestionar partidos, asignar árbitros y registrar eventos como goles, tarjetas y sustituciones. 
    Además, se generan estadísticas automáticas por jugador, equipo y torneo. 
    La aplicación fue desarrollada como práctica personal utilizando tecnologías modernas como React, React Router y Tailwind CSS. Cuenta con una interfaz responsive y amigable, adaptada a distintos dispositivos.`,
    features: [
      {
        titulo: "Funcionalidades principales",
        items: [
          "Registro y edición de equipos con sus respectivos jugadores.",
          "Creación y programación de partidos entre equipos.",
          "Asignación de árbitros y registro de eventos dentro de cada partido (goles, tarjetas, cambios, etc.).",
          "Visualización de estadísticas detalladas por jugador, equipo y torneo.",
          "Diseño responsive adaptado a móviles, tablets y escritorio.",
          "Navegación fluida y dinámica mediante React Router (SPA).",
          "Componentes reutilizables con estilo consistente gracias a Tailwind CSS."
        ]
      }
    ],
    technologies: [
      "React", "Tailwind CSS", "HTML", "CSS", "TypeScript", 
      ".NET Web API", "Entity Framework Core", "SQL Server"
    ],
    ...getProjectImages('torneo_futbol'),
    url: "",
    demo: "",
    status: "En desarrollo"
  }
];