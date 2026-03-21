import { useEffect, useState } from 'react';

type Tema = 'light' | 'dark' | 'system';

const temasDisponibles: Tema[] = ['light', 'dark', 'system'];

export default function DropdownTema() {
  const [temaActual, setTemaActual] = useState<Tema>('system');
  const [desplegado, setDesplegado] = useState<boolean>(false);

  useEffect(() => {
    const guardado = localStorage.getItem('theme') as Tema | null;
    const sistemaOscuro = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const temaDetectado: Tema =
      guardado === 'dark' || guardado === 'light'
        ? guardado
        : sistemaOscuro
        ? 'dark'
        : 'light';

    document.documentElement.setAttribute('data-theme', temaDetectado);
    setTemaActual(guardado ?? 'system');

    // Escuchar cambios del sistema si el usuario eligió "sistema"
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const manejadorCambioSistema = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
      }
    };
    media.addEventListener('change', manejadorCambioSistema);
    return () => media.removeEventListener('change', manejadorCambioSistema);
  }, []);

  const cambiarTema = (tema: Tema) => {
    setTemaActual(tema);
    if (tema === 'system') {
      localStorage.removeItem('theme');
      const sistemaOscuro = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.setAttribute('data-theme', sistemaOscuro ? 'dark' : 'light');
    } else {
      localStorage.setItem('theme', tema);
      document.documentElement.setAttribute('data-theme', tema);
    }
    setDesplegado(false);
  };

  const IconoSol = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
      </svg>
    );
  }

  const IconoLuna = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
      </svg>
    );
  }

  const IconoSistema = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
      </svg>
    );
  }

  const iconoTema = () => {
    if (temaActual === 'light') return <IconoSol />;
    if (temaActual === 'dark') return <IconoLuna />;
    return <IconoSistema />;
  };

  const nombreTema = (tema: Tema) => {
    if (tema === 'light') return 'Claro';
    if (tema === 'dark') return 'Oscuro';
    return 'Sistema';
  };

  return (
    <div className="relative">
      <button
        onClick={() => setDesplegado(!desplegado)}
        className="flex items-center justify-center w-10 h-10 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-neutral-800 text-gray-600 dark:text-neutral-400 hover:text-gray-900 dark:hover:text-white transition-all duration-200"
        aria-label="Cambiar tema"
      >
        {iconoTema()}
      </button>

      {desplegado && (
        <>
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setDesplegado(false)}
          />
          <div className="absolute right-0 mt-2 w-36 py-2 rounded-xl shadow-xl bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border border-gray-200/50 dark:border-neutral-700/50 z-50">
            {temasDisponibles.map((tema) => (
              <button
                key={tema}
                onClick={() => cambiarTema(tema)}
                className={`w-full flex items-center gap-3 px-4 py-2.5 cursor-pointer transition-all duration-150 ${
                  temaActual === tema 
                    ? 'text-primary dark:text-primary bg-primary/10 font-medium' 
                    : 'text-gray-600 dark:text-neutral-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-neutral-800'
                }`}
              >
                {tema === 'light' && <IconoSol />}
                {tema === 'dark' && <IconoLuna />}
                {tema === 'system' && <IconoSistema />}
                <span className="text-sm">{nombreTema(tema)}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
