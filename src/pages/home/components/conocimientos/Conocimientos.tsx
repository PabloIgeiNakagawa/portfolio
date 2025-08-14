type Skill = {
  id: string;
  name: string;
  category: "Concepts" | "Architecture" | "Tools" | "Databases" | "Other" | string;
  level: "Avanzado" | "Intermedio" | "Básico";
  pct?: number; // opcional para la barra (0-100)
  projects?: { name: string; href?: string }[]; // opcional
};

const skills: Skill[] = [
  { id: "k1", name: "Programación Orientada a Objetos (POO)", category: "Concepts", level: "Avanzado", pct: 90, projects: [{ name: "API .NET" }] },
  { id: "k2", name: "MVC (Patrón)", category: "Architecture", level: "Intermedio", pct: 75, projects: [{ name: "Proyecto Universidad" }] },
  { id: "k3", name: "XML / JSON", category: "Other", level: "Intermedio", pct: 70 },
  // ... reemplazá con tus items reales
];

const categoriesOrder = ["Concepts", "Architecture", "Databases", "Tools", "Other"];

export default function Conocimientos() {
  const grouped = categoriesOrder
    .map((cat) => ({ cat, items: skills.filter((s) => s.category === cat) }))
    .filter((g) => g.items.length > 0);

  return (
    <section id="conocimientos" className="py-16 bg-transparent">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold">Conocimientos</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-2">
            Conceptos, patrones y herramientas que aplico en proyectos reales.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {grouped.map(({ cat, items }) => (
            <div key={cat}>
              <h3 className="text-xl font-semibold mb-4">{cat}</h3>
              <ul className="space-y-4">
                {items.map((s) => (
                  <li key={s.id} className="bg-white/5 dark:bg-gray-900 rounded-lg p-4 border border-white/5">
                    <div className="flex justify-between items-start gap-3">
                      <div>
                        <div className="font-medium">{s.name}</div>
                        {s.projects?.length ? (
                          <div className="text-xs text-gray-400 mt-1">
                            Usado en:{" "}
                            {s.projects.map((p, i) => (
                              <span key={i} className="underline decoration-dotted">
                                {p.href ? <a href={p.href} target="_blank" rel="noopener noreferrer">{p.name}</a> : p.name}
                                {i < s.projects!.length - 1 ? ", " : ""}
                              </span>
                            ))}
                          </div>
                        ) : null}
                      </div>

                      <div className="text-xs px-2 py-1 rounded-md border border-white/10">
                        {s.level}
                      </div>
                    </div>

                    {typeof s.pct === "number" && (
                      <div className="mt-3" aria-hidden>
                        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className="h-2 rounded-full transition-all duration-500"
                            style={{ width: `${s.pct}%`, background: "linear-gradient(90deg,#60a5fa,#7c3aed)" }}
                            role="progressbar"
                            aria-valuemin={0}
                            aria-valuemax={100}
                            aria-valuenow={s.pct}
                          />
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mobile compact row of top skills */}
        <div className="mt-8 md:hidden">
          <div className="flex flex-wrap gap-2">
            {skills.slice(0, 8).map((s) => (
              <span key={s.id} className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-sm">
                {s.name} • {s.level}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
