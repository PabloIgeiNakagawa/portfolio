import { backend, baseDeDatos, frontend, herramientasYEntornos } from './TechnologiesData';

const categories = [
  { id: 'backend', title: 'Backend', data: backend },
  { id: 'database', title: 'Base de Datos', data: baseDeDatos },
  { id: 'frontend', title: 'Frontend', data: frontend },
  { id: 'tools', title: 'Herramientas', data: herramientasYEntornos },
];

export default function Technologies() {
  return (
    <section id="technologies" className="w-full scroll-mt-28">
      <div className="bg-steam-panel backdrop-blur-xl rounded-sm overflow-hidden">
        <div className="bg-white/5 px-4 py-2.5">
          <h2 className="text-steam-text-light text-lg font-semibold tracking-wide">Tecnologías</h2>
        </div>

        <div className="p-4 md:p-6">
          <div className="space-y-6">
            {categories.map((category) => (
              <div key={category.id}>
                <h3 className="text-sm text-steam-text-light uppercase tracking-wider mb-3 pb-2 border-b border-steam-border/50">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.data.map((tech, index) => (
                    <div 
                      key={index} 
                      className="group relative w-12 h-12 bg-black/30 backdrop-blur-sm border border-steam-border hover:border-steam-blue/70 flex items-center justify-center p-2 rounded-sm transition-all duration-200"
                    >
                      <img src={tech.icono} alt={tech.nombre} className="w-full h-full object-contain" />
                      
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-2 py-1 bg-black/80 backdrop-blur-sm text-steam-white text-xs rounded-sm opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-10 border border-steam-border">
                        {tech.nombre}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
