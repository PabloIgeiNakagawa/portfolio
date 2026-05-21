interface ButtonProps {
  href: string;
}

function ButtonCode({ href }: ButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-800 font-texto text-neutral-800 dark:text-neutral-200 px-5 py-2.5 rounded-xl font-medium transition-all duration-300 border border-neutral-300 dark:border-neutral-600 hover:border-primary hover:shadow-md hover:shadow-primary/10 hover:-translate-y-0.5"
    >
      Ver repositorio
    </a>
  );
}

function ButtonDemo({ href }: ButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white px-5 py-2.5 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25 hover:-translate-y-0.5 font-texto"
    >
      <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
      Ver en vivo
    </a>
  );
}

export { ButtonCode, ButtonDemo };
