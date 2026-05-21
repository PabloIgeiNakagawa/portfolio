import { proyectos } from '../projects/ProjectsData';

export default function Sidebar() {
  return (
    <div className="bg-steam-panel backdrop-blur-xl rounded-sm p-4 flex flex-col gap-5">
      <div className="flex flex-col gap-0 leading-tight">
        <span className="text-steam-green text-lg flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-steam-green shadow-[0_0_6px_#90ba3c] animate-pulse"></span>
          Jugando a:
        </span>
        <span className="text-steam-green text-lg">Desarrollar</span>
      </div>

      <div>
        <h2 className="text-steam-white text-sm tracking-wide mb-2 flex items-baseline gap-1.5">
          Conectemos
          <span className="text-steam-text text-2xl font-thin">3</span>
        </h2>
        <div className="flex items-center gap-3">
          <a href="https://github.com/PabloIgeiNakagawa" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-sm bg-black/30 backdrop-blur-sm border border-steam-border flex items-center justify-center text-steam-text-light hover:border-steam-blue hover:text-steam-blue transition-all duration-200" aria-label="GitHub">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="https://linkedin.com/in/pabloigeinakagawa" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-sm bg-black/30 backdrop-blur-sm border border-steam-border flex items-center justify-center text-steam-text-light hover:border-steam-blue hover:text-steam-blue transition-all duration-200" aria-label="LinkedIn">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="mailto:pabloigeinaka@gmail.com" className="w-9 h-9 rounded-sm bg-black/30 backdrop-blur-sm border border-steam-border flex items-center justify-center text-steam-text-light hover:border-steam-blue hover:text-steam-blue transition-all duration-200" aria-label="Email">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
          </a>
        </div>
      </div>

      <div>
        <h2 className="text-steam-white text-sm tracking-wide mb-2">Estado</h2>
        <span className="text-steam-text-light text-sm">Disponible para trabajar</span>
      </div>

      <div>
        <h2 className="text-steam-white text-sm tracking-wide mb-2 flex items-baseline gap-1.5">
          Educación
          <span className="text-steam-text text-2xl font-thin">2</span>
        </h2>
        <div className="flex flex-col gap-3">
          <div className="flex items-start gap-2">
            <svg className="w-4 h-4 text-steam-blue mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 0c0 1.176.136 2.322.393 3.423" />
            </svg>
            <div className="flex flex-col">
              <span className="text-steam-text-light text-sm">Lic. Sistemas</span>
              <span className="text-steam-text text-xs">UNGS · 70% de la carrera</span>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <svg className="w-4 h-4 text-steam-blue mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 0c0 1.176.136 2.322.393 3.423" />
            </svg>
            <div className="flex flex-col">
              <span className="text-steam-text-light text-sm">Tec. Informática</span>
              <span className="text-steam-text text-xs">UNGS · Falta 1 final</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-steam-white text-sm tracking-wide mb-2 flex items-baseline gap-1.5">
          Idiomas
          <span className="text-steam-text text-2xl font-thin">2</span>
        </h2>
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-steam-blue/60"></div>
            <span className="text-steam-text-light text-sm">Español · Nativo</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-steam-blue/60"></div>
            <span className="text-steam-text-light text-sm">Inglés · Básico</span>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-steam-white text-sm tracking-wide mb-2 flex items-baseline gap-1.5">
          Proyectos
          <span className="text-steam-text text-2xl font-thin">{proyectos.length}</span>
        </h2>
      </div>
    </div>
  );
}
