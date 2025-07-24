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

  function IconoSol() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
        </svg>
    );
    }

    function IconoLuna() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
            </svg>
        );
    }

    function IconoSistema() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
            </svg>
        );
    }

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setDesplegado(!desplegado)}
        className="inline-flex items-center space-x-2 justify-center w-full cursor-pointer bg-white dark:bg-gray-900 font-medium text-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 p-2"
      >
        {temaActual === 'light' && (
          <IconoSol />
        )}
        {temaActual === 'dark' && (
          <IconoLuna />
        )}
        {temaActual === 'system' && (
          <IconoSistema />
        )}
        <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {desplegado && (
        <div className="absolute right-0 mt-2 w-32 sm:w-40 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-10">
          <div className="py-1">
            {temasDisponibles.map((tema) => (
              <button
                key={tema}
                onClick={() => cambiarTema(tema)}
                className={`block w-full text-left px-3 py-2 cursor-pointer text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 ${
                  temaActual === tema ? 'font-bold bg-gray-50 dark:bg-gray-700' : ''
                }`}
              >
                <span className="flex items-center space-x-2">
                  {tema === 'light' && <><IconoSol /><span>Claro</span></>}
                  {tema === 'dark' && <><IconoLuna /><span>Oscuro</span></>}
                  {tema === 'system' && <><IconoSistema /><span>Sistema</span></>}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
