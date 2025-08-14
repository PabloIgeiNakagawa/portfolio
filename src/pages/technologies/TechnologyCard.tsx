import type { Tecnologia } from "./TechnologiesData";

interface TechnologyCardProps {
  tecnologia: Tecnologia;
  onHover: (index: number | null) => void;
  isHovered: boolean;
  index: number;
}

export default function TechnologyCard({
  tecnologia,
  onHover,
  isHovered,
  index,
}: TechnologyCardProps) {
  return (
    <div
      className="group relative bg-white dark:bg-neutral-900 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-50 dark:hover:bg-neutral-800 transition-all duration-300 border border-gray-200 dark:border-neutral-700 hover:border-gray-300 dark:hover:border-neutral-600 hover:scale-105 cursor-pointer shadow-lg"
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
    >
      <div className="absolute inset-0 bg-gray-100 dark:bg-neutral-700 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="w-16 h-16 mb-4 flex items-center justify-center">
          <img
            src={tecnologia.icono}
            alt={tecnologia.nombre}
            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
            onError={(e) => {
                const target = e.target as HTMLImageElement; 
                target.style.display = 'none'; 
                const nextSibling = target.nextSibling as HTMLElement;
                nextSibling.style.display = 'flex';
            }}
          />
          <div className="w-16 h-16 bg-gray-800 dark:bg-neutral-200 rounded-lg hidden items-center justify-center text-white dark:text-neutral-900 font-bold text-xl">
            {tecnologia.nombre.charAt(0)}
          </div>
        </div>
        <h3 className="u-text-h3 font-semibold mb-2 group-hover:text-gray-700 dark:group-hover:text-neutral-300 transition-colors">
          {tecnologia.nombre}
        </h3>
        <span className="text-xs text-gray-500 dark:text-neutral-400">
          {tecnologia.categoria}
        </span>
      </div>

      {isHovered && (
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-neutral-100 text-white dark:text-neutral-900 px-3 py-2 rounded-lg text-sm whitespace-nowrap z-20 border border-gray-700 dark:border-neutral-300 shadow-lg">
          <div className="font-medium">{tecnologia.origen}</div>
          {tecnologia.relacionadas && (
            <div className="text-xs text-gray-300 dark:text-neutral-600">Tecnologias relacionadas: {tecnologia.relacionadas}</div>
          )}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900 dark:border-t-neutral-100"></div>
        </div>
      )}
    </div>
  );
}
