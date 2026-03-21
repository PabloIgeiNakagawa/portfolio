import type { Tecnologia } from "./TechnologiesData";

interface TechnologyCardProps {
  tecnologia: Tecnologia;
  onHover?: (index: number | null) => void;
  index?: number;                           
}

export default function TechnologyCard({
  tecnologia,
  onHover,
  index,
}: TechnologyCardProps) {
  return (
    <div
      className="group relative bg-white dark:bg-neutral-900/80 backdrop-blur-sm rounded-2xl p-6 hover:bg-gray-50/80 dark:hover:bg-neutral-800/80 transition-all duration-300 border border-gray-200/50 dark:border-neutral-700/50 hover:border-primary/50 dark:hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 cursor-pointer"
      onMouseEnter={() => onHover?.(index ?? null)}
      onMouseLeave={() => onHover?.(null)}
    >
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="w-16 h-16 mb-4 flex items-center justify-center relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <img
            src={tecnologia.icono}
            alt={tecnologia.nombre}
            className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300 relative z-10"
            loading="lazy"
            onError={(e) => {
                const target = e.target as HTMLImageElement; 
                target.style.display = 'none'; 
                const nextSibling = target.nextSibling as HTMLElement;
                nextSibling.style.display = 'flex';
            }}
          />
          <div className="w-12 h-12 bg-gray-800 dark:bg-neutral-200 rounded-lg hidden items-center justify-center text-white dark:text-neutral-900 font-bold text-xl relative z-10">
            {tecnologia.nombre.charAt(0)}
          </div>
        </div>
        <h3 className="font-texto font-medium text-sm text-gray-700 dark:text-neutral-300 group-hover:text-primary transition-colors duration-300">
          {tecnologia.nombre}
        </h3>
      </div>
    </div>
  );
}
