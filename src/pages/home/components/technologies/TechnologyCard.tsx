import type { Tecnologia } from "./TechnologiesData";

interface TechnologyCardProps {
  tecnologia: Tecnologia;
  onHover: (index: number | null) => void;
  index: number;
}

export default function TechnologyCard({
  tecnologia,
  onHover,
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
        <h3 className="font-titulo font-semibold mb-2 group-hover:text-gray-700 dark:group-hover:text-neutral-300 transition-colors">
          {tecnologia.nombre}
        </h3>
      </div>
    </div>
  );
}
