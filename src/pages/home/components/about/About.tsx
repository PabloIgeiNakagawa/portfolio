export default function About() {
  return (
    <section id="about" className="w-full scroll-mt-28">
      <div className="bg-steam-panel backdrop-blur-xl rounded-sm overflow-hidden">
        <div className="bg-white/5 px-4 py-2.5">
          <h2 className="text-steam-text-light text-lg font-semibold tracking-wide">Sobre mí</h2>
        </div>

        <div className="p-4 md:p-6">
          <div className="space-y-4">
            <p className="text-sm md:text-base text-steam-text leading-relaxed font-texto">
              ¡Hola! Soy <span className="font-semibold text-steam-white">Pablo</span>, Desarrollador .NET y estudiante avanzado de la Licenciatura en Sistemas en la UNGS. Me considero una persona curiosa y analítica, apasionada por resolver problemas, con una fuerte motivación por entender cómo funcionan las cosas para transformarlas en soluciones útiles y eficientes.
            </p>
            
            <p className="text-sm md:text-base text-steam-text leading-relaxed font-texto">
              Mi enfoque técnico se centra en el ecosistema <span className="font-medium text-steam-white">.NET (C#)</span> y bases de datos <span className="font-medium text-steam-white">SQL Server</span>, complementado con el desarrollo de interfaces web modernas y responsivas utilizando JavaScript, HTML/CSS y Bootstrap. He diseñado e implementado desde cero soluciones integrales que van desde la lógica de negocio con arquitectura en capas y principios SOLID, hasta la integración de APIs externas para servicios de tiempo real.
            </p>
            
            <p className="text-sm md:text-base text-steam-text leading-relaxed font-texto">
              Actualmente, busco mi primera experiencia profesional como <span className="font-medium text-steam-blue">Trainee o Junior</span> para aportar mi capacidad técnica y proactividad en un equipo colaborativo. Estoy entusiasmado por la oportunidad de crecer profesionalmente, aprender de expertos en el campo y contribuir al desarrollo de proyectos innovadores que tengan un impacto positivo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
