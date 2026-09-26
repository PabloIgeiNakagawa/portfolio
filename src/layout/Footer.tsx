import { socialLinks } from '../data/socialLinks';

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-neutral-900 text-gray-900 dark:text-white py-16 border-t border-gray-200/50 dark:border-neutral-800/50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 font-titulo text-gray-900 dark:text-white">
              Pablo Igei Nakagawa
            </h3>
            <p className="text-sm text-gray-600 dark:text-neutral-400 leading-relaxed">
              Desarrollador .NET y estudiante avanzado de Licenciatura en Sistemas en la UNGS.
            </p>
            <div className="mt-4 flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target={link.name !== 'Email' ? '_blank' : undefined}
                  rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                  aria-label={link.name === 'CV' ? 'Descargar CV' : link.name}
                  {...(link.download ? { download: true } : {})}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-300 text-gray-600 transition-all duration-200 hover:border-primary hover:text-primary dark:border-neutral-700 dark:text-neutral-400 dark:hover:border-primary [&>svg]:h-4 [&>svg]:w-4"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 dark:text-neutral-500 uppercase tracking-wider mb-4">
              Información
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-neutral-400">
                <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                Buenos Aires, Argentina
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-neutral-400">
                <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                </svg>
                Disponible para proyectos
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-neutral-400">
                <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
                Buscando oportunidades
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200/50 dark:border-neutral-800/50 pt-8">
          <div className="flex justify-center text-center">
            <p className="text-sm text-gray-500 dark:text-neutral-500">
              © {new Date().getFullYear()} Pablo Igei Nakagawa. Todos los derechos reservados.
            </p>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <button
            onClick={() => window.scrollTo({
              top: 0,
              behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
            })}
            className="group flex h-12 w-12 cursor-pointer items-center justify-center rounded-xl bg-gray-900 text-white transition-all duration-300 hover:scale-105 hover:bg-primary hover:shadow-lg hover:shadow-primary/25 dark:bg-neutral-800 dark:hover:bg-primary"
            aria-label="Volver arriba"
          >
            <svg
              className="h-5 w-5 transform transition-transform duration-300 group-hover:-translate-y-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
