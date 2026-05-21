export default function Skills() {
  const conceptos = [
    "POO", "SOLID", "Arquitectura en capas", "CQS", "Modelado relacional", "UML", "Metodologías ágiles", "Git"
  ];
  
  const blandas = [
    "Trabajo en equipo", "Comunicación técnica", "Autonomía", "Pensamiento analítico", "Resolución de problemas", "Proactividad"
  ];

  return (
    <section id="skills" className="w-full scroll-mt-28">
      <div className="bg-steam-panel backdrop-blur-xl rounded-sm overflow-hidden">
        <div className="bg-white/5 px-4 py-2.5">
          <h2 className="text-steam-text-light text-lg font-semibold tracking-wide">Habilidades</h2>
        </div>

        <div className="p-4 md:p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xs text-steam-blue font-semibold mb-3 uppercase tracking-wider">Técnicas</h3>
              <div className="flex flex-col gap-2">
                {conceptos.map(c => (
                  <div key={c} className="flex items-center gap-2.5 group cursor-default">
                    <div className="w-1.5 h-1.5 rounded-full bg-steam-blue/60 group-hover:bg-steam-blue group-hover:shadow-[0_0_6px_#1a9fff] transition-all duration-200"></div>
                    <span className="text-sm text-steam-text-light group-hover:text-steam-white transition-colors">{c}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t md:border-t-0 md:border-l border-steam-border/50 pt-4 md:pt-0 md:pl-6">
              <h3 className="text-xs text-steam-green font-semibold mb-3 uppercase tracking-wider">Blandas</h3>
              <div className="flex flex-col gap-2">
                {blandas.map(b => (
                  <div key={b} className="flex items-center gap-2.5 group cursor-default">
                    <div className="w-1.5 h-1.5 rounded-full bg-steam-green/60 group-hover:bg-steam-green group-hover:shadow-[0_0_6px_#90ba3c] transition-all duration-200"></div>
                    <span className="text-sm text-steam-text-light group-hover:text-steam-white transition-colors">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
